import { speak, isTTSSupported } from './audio';

// Mock Web Speech API
let mockUtterance;
let mockSpeechSynthesis;

class MockSpeechSynthesisUtterance {
  constructor(text) {
    this.text = text;
    this.lang = '';
    this.rate = 1;
    this.voice = null;
    this.onend = null;
    this.onerror = null;
    mockUtterance = this;
  }
}

function createMockSynthesis(overrides = {}) {
  return {
    speaking: false,
    pending: false,
    paused: false,
    cancel: jest.fn(),
    resume: jest.fn(),
    getVoices: jest.fn(() => []),
    addEventListener: jest.fn(),
    speak: jest.fn((utterance) => {
      setTimeout(() => {
        if (utterance.onend) utterance.onend();
      }, 10);
    }),
    ...overrides,
  };
}

beforeEach(() => {
  mockUtterance = null;
  mockSpeechSynthesis = createMockSynthesis();
  window.speechSynthesis = mockSpeechSynthesis;
  window.SpeechSynthesisUtterance = MockSpeechSynthesisUtterance;
});

afterEach(() => {
  delete window.speechSynthesis;
  delete window.SpeechSynthesisUtterance;
});

describe('isTTSSupported', () => {
  test('returns true when speechSynthesis is available', () => {
    expect(isTTSSupported()).toBe(true);
  });

  test('returns false when speechSynthesis is not available', () => {
    delete window.speechSynthesis;
    expect(isTTSSupported()).toBe(false);
  });
});

describe('speak', () => {
  test('calls speechSynthesis.speak with correct text and language', async () => {
    const promise = speak('こんにちは', 'ja-JP');
    expect(mockSpeechSynthesis.speak).toHaveBeenCalledTimes(1);
    expect(mockUtterance.text).toBe('こんにちは');
    expect(mockUtterance.lang).toBe('ja-JP');
    expect(mockUtterance.rate).toBe(0.85);
    await promise;
  });

  test('resolves when utterance ends', async () => {
    const result = await speak('hello', 'en-US');
    expect(result).toBeUndefined();
  });

  test('always calls cancel to reset synthesis state', async () => {
    mockSpeechSynthesis.speaking = false;
    mockSpeechSynthesis.pending = false;
    const promise = speak('test', 'en-US');
    expect(mockSpeechSynthesis.cancel).toHaveBeenCalledTimes(1);
    await promise;
  });

  test('calls resume when paused', async () => {
    mockSpeechSynthesis.paused = true;
    const promise = speak('test', 'en-US');
    expect(mockSpeechSynthesis.resume).toHaveBeenCalledTimes(1);
    await promise;
  });

  test('rejects when TTS is not supported', async () => {
    delete window.speechSynthesis;
    await expect(speak('test', 'en-US')).rejects.toThrow('Speech synthesis not supported');
  });

  test('rejects on real speech errors', async () => {
    mockSpeechSynthesis.speak.mockImplementation((utterance) => {
      setTimeout(() => {
        if (utterance.onerror) utterance.onerror({ error: 'network' });
      }, 10);
    });
    await expect(speak('test', 'en-US')).rejects.toEqual({ error: 'network' });
  });

  test('resolves (not rejects) on canceled error', async () => {
    mockSpeechSynthesis.speak.mockImplementation((utterance) => {
      setTimeout(() => {
        if (utterance.onerror) utterance.onerror({ error: 'canceled' });
      }, 10);
    });
    await expect(speak('test', 'en-US')).resolves.toBeUndefined();
  });

  test('selects a voice matching the exact lang code', async () => {
    const jaVoice = { lang: 'ja-JP', name: 'Kyoko' };
    mockSpeechSynthesis.getVoices.mockReturnValue([
      { lang: 'en-US', name: 'Samantha' },
      jaVoice,
    ]);

    const promise = speak('こんにちは', 'ja-JP');
    expect(mockUtterance.voice).toBe(jaVoice);
    await promise;
  });

  test('falls back to voice matching lang prefix', async () => {
    const zhVoice = { lang: 'zh-TW', name: 'Mei-Jia' };
    mockSpeechSynthesis.getVoices.mockReturnValue([
      { lang: 'en-US', name: 'Samantha' },
      zhVoice,
    ]);

    const promise = speak('你好', 'zh-CN');
    expect(mockUtterance.voice).toBe(zhVoice);
    await promise;
  });

  test('prefers voice matching preferredVoices option', async () => {
    const tingting = { lang: 'zh-CN', name: 'Tingting' };
    const defaultZh = { lang: 'zh-CN', name: 'Zhiyu' };
    mockSpeechSynthesis.getVoices.mockReturnValue([
      defaultZh,
      tingting,
    ]);

    const promise = speak('你好', 'zh-CN', { preferredVoices: ['Tingting', 'Lili'] });
    expect(mockUtterance.voice).toBe(tingting);
    await promise;
  });

  test('falls back to default voice when no preferredVoices match', async () => {
    const defaultZh = { lang: 'zh-CN', name: 'Zhiyu' };
    mockSpeechSynthesis.getVoices.mockReturnValue([
      { lang: 'en-US', name: 'Samantha' },
      defaultZh,
    ]);

    const promise = speak('你好', 'zh-CN', { preferredVoices: ['NonExistent'] });
    expect(mockUtterance.voice).toBe(defaultZh);
    await promise;
  });

  test('uses custom speech rate from options', async () => {
    const promise = speak('你好', 'zh-CN', { rate: 0.75 });
    expect(mockUtterance.rate).toBe(0.75);
    await promise;
  });

  test('uses default rate when options.rate is not provided', async () => {
    const promise = speak('hello', 'en-US', {});
    expect(mockUtterance.rate).toBe(0.85);
    await promise;
  });

  test('works without any matching voice (voice stays null)', async () => {
    mockSpeechSynthesis.getVoices.mockReturnValue([
      { lang: 'en-US', name: 'Samantha' },
    ]);

    const promise = speak('こんにちは', 'ja-JP');
    expect(mockUtterance.voice).toBeNull();
    expect(mockSpeechSynthesis.speak).toHaveBeenCalledTimes(1);
    await promise;
  });

  test('resolves via safety timeout if browser fires no events', async () => {
    jest.useFakeTimers();
    mockSpeechSynthesis.speak.mockImplementation(() => {
      // Simulate browser that fires neither onend nor onerror
    });

    const promise = speak('test', 'en-US');
    jest.advanceTimersByTime(10000);
    await expect(promise).resolves.toBeUndefined();
    jest.useRealTimers();
  });

  test('only settles once even if both onend and timeout fire', async () => {
    jest.useFakeTimers();
    let capturedUtterance;
    mockSpeechSynthesis.speak.mockImplementation((utt) => {
      capturedUtterance = utt;
    });

    const promise = speak('test', 'en-US');

    // Fire onend manually
    capturedUtterance.onend();

    // Then let timeout fire too — should not cause issues
    jest.advanceTimersByTime(10000);
    await expect(promise).resolves.toBeUndefined();
    jest.useRealTimers();
  });
});
