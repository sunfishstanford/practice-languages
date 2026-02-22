// Thin wrapper around Web Speech API

export function speak(text, lang) {
  return new Promise((resolve, reject) => {
    if (!isTTSSupported()) {
      reject(new Error('Speech synthesis not supported'));
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85;

    utterance.onend = () => resolve();
    utterance.onerror = (e) => {
      // 'canceled' is not a real error — happens when we cancel before speaking again
      if (e.error === 'canceled') {
        resolve();
      } else {
        reject(e);
      }
    };

    window.speechSynthesis.speak(utterance);
  });
}

export function isTTSSupported() {
  return 'speechSynthesis' in window;
}
