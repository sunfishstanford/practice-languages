// Thin wrapper around Web Speech API

// Cache voices once they're loaded — on many browsers getVoices() returns []
// until the voiceschanged event fires asynchronously.
let cachedVoices = [];
let voicesLoaded = false;

function loadVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  cachedVoices = window.speechSynthesis.getVoices();
  if (cachedVoices.length > 0) {
    voicesLoaded = true;
    return;
  }
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    cachedVoices = window.speechSynthesis.getVoices();
    voicesLoaded = true;
  });
  // Polling fallback — some mobile browsers never fire voiceschanged
  let attempts = 0;
  const poll = setInterval(() => {
    const v = window.speechSynthesis.getVoices();
    if (v.length > 0) {
      cachedVoices = v;
      voicesLoaded = true;
      clearInterval(poll);
    } else if (++attempts >= 20) { // give up after ~5s
      clearInterval(poll);
    }
  }, 250);
}

loadVoices();

function findVoice(lang, preferredNames) {
  // Always try fresh voices; fall back to cache if getVoices() is empty
  const fresh = window.speechSynthesis.getVoices();
  if (fresh.length > 0) {
    cachedVoices = fresh;
  }
  const voices = cachedVoices;
  const prefix = lang.split('-')[0];
  const langVoices = voices.filter(v => v.lang === lang || v.lang.startsWith(prefix));

  // If preferred voice names are specified, try each in priority order
  if (preferredNames && preferredNames.length > 0) {
    for (const name of preferredNames) {
      const match = langVoices.find(v =>
        v.name.toLowerCase().includes(name.toLowerCase())
      );
      if (match) return match;
    }
  }

  // Fall back to exact match, then prefix match
  return voices.find(v => v.lang === lang)
    || voices.find(v => v.lang.startsWith(prefix));
}

export function speak(text, lang, options = {}) {
  return new Promise((resolve, reject) => {
    if (!isTTSSupported()) {
      reject(new Error('Speech synthesis not supported'));
      return;
    }

    const synth = window.speechSynthesis;

    // Only cancel if actively speaking or queued — unconditional cancel()
    // before speak() causes iOS to silently drop the new utterance.
    if (synth.speaking || synth.pending) {
      synth.cancel();
    }

    if (synth.paused) {
      synth.resume();
    }

    const utterance = new (window.SpeechSynthesisUtterance || SpeechSynthesisUtterance)(text);
    utterance.lang = lang;
    utterance.rate = options.rate || 0.85;
    utterance.volume = 1; // explicit — some mobile browsers default to 0

    // Explicitly set a voice for the target language.
    // Without this, some browsers silently produce no audio when they
    // can't auto-select a voice for the lang code.
    const voice = findVoice(lang, options.preferredVoices);
    if (voice) {
      utterance.voice = voice;
    }

    let settled = false;
    const settle = (fn) => {
      if (!settled) { settled = true; clearInterval(iosResumeInterval); fn(); }
    };

    utterance.onend = () => settle(resolve);
    utterance.onerror = (e) => settle(() => {
      if (e.error === 'canceled') {
        resolve();
      } else {
        reject(e);
      }
    });

    // Safety net — some browsers fire neither onend nor onerror
    setTimeout(() => settle(resolve), 10000);

    synth.speak(utterance);

    // iOS workaround: Safari sometimes silently pauses synthesis.
    // Periodically calling pause()/resume() keeps it alive.
    const iosResumeInterval = setInterval(() => {
      if (!synth.speaking) {
        clearInterval(iosResumeInterval);
      } else {
        synth.pause();
        synth.resume();
      }
    }, 3000);
  });
}

// Warm up TTS on mobile — iOS and some Android browsers require a user-gesture-
// triggered speak call before subsequent calls produce audio. Call this once from
// a click/touch handler early in the app lifecycle.
export function warmUpTTS() {
  if (!isTTSSupported()) return;
  const synth = window.speechSynthesis;
  // Use a real character with near-zero volume. iOS ignores empty strings
  // and zero-volume utterances, so the warmup never actually "unlocks"
  // the synthesizer.
  const utterance = new (window.SpeechSynthesisUtterance || SpeechSynthesisUtterance)('.');
  utterance.volume = 0.01;
  utterance.rate = 2;
  synth.speak(utterance);
}

export function isTTSSupported() {
  return typeof window !== 'undefined'
    && 'speechSynthesis' in window
    && (typeof window.SpeechSynthesisUtterance === 'function'
        || typeof SpeechSynthesisUtterance === 'function');
}
