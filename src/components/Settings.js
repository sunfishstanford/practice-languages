import React, { useState, useEffect } from 'react';
import { resetLanguageData } from '../storage';
import { isTTSSupported, getVoicesForLang } from '../audio';
import { LEVEL_LIST, DEFAULT_LEVEL } from '../levels';
import './Settings.css';

function Settings({ settings, updateSettings, language, languages, activeLanguageId, onLanguageChange }) {
  const update = (changes) => {
    updateSettings({ ...settings, ...changes });
  };

  const hasPhonetic = language.categories.some(c => c.phonetic);
  const phoneticCats = language.categories.filter(c => c.phonetic);
  const nonPhoneticCats = language.categories.filter(c => !c.phonetic);
  const mixValue = phoneticCats.map(c => c.id).join('+');
  const isPhoneticMode = hasPhonetic && settings.quizMode &&
    settings.quizMode.split('+').every(id =>
      language.categories.find(c => c.id === id)?.phonetic
    );

  const [availableVoices, setAvailableVoices] = useState([]);

  useEffect(() => {
    if (!isTTSSupported()) return;
    const refresh = () => {
      const voices = getVoicesForLang(language.speechLang);
      if (voices.length > 0) setAvailableVoices(voices);
    };
    refresh();
    window.speechSynthesis.addEventListener('voiceschanged', refresh);
    // Polling fallback — some browsers never fire voiceschanged
    let attempts = 0;
    const poll = setInterval(() => {
      refresh();
      if (++attempts >= 20) clearInterval(poll);
    }, 250);
    return () => {
      clearInterval(poll);
      window.speechSynthesis.removeEventListener('voiceschanged', refresh);
    };
  }, [language.speechLang]);

  const handleReset = () => {
    const confirmed = window.confirm(
      `Are you sure you want to reset all ${language.name} data? This will clear your history and incorrect question tracking.`
    );

    if (confirmed) {
      resetLanguageData(language.id);
      const defaults = {
        questionsPerSession: 10,
        showRomanization: true,
        listeningMode: 'off',
        level: DEFAULT_LEVEL
      };
      if (hasPhonetic) {
        defaults.quizMode = phoneticCats[0].id;
      }
      updateSettings(defaults);
      alert(`All ${language.name} data has been reset!`);
    }
  };

  const handleLanguageSwitch = (e) => {
    onLanguageChange(e.target.value);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="setting-item">
        <label htmlFor="language-select">Language:</label>
        <select
          id="language-select"
          value={activeLanguageId}
          onChange={handleLanguageSwitch}
        >
          {languages.map(lang => (
            <option key={lang.id} value={lang.id}>{lang.name}</option>
          ))}
        </select>
      </div>

      <div className="setting-item">
        <label htmlFor="questions-count">Questions per session:</label>
        <select
          id="questions-count"
          value={settings.questionsPerSession}
          onChange={(e) => update({ questionsPerSession: parseInt(e.target.value) })}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
      </div>

      {hasPhonetic && (
        <div className="setting-item">
          <label className="setting-section-label">Quiz topic:</label>
          <div className="radio-group">
            {phoneticCats.map(cat => (
              <label key={cat.id} htmlFor={`mode-${cat.id}`}>
                <input
                  type="radio"
                  id={`mode-${cat.id}`}
                  name="quizMode"
                  value={cat.id}
                  checked={settings.quizMode === cat.id}
                  onChange={() => update({ quizMode: cat.id })}
                />
                {cat.name}
              </label>
            ))}
            {phoneticCats.length > 1 && (
              <label htmlFor="mode-mix">
                <input
                  type="radio"
                  id="mode-mix"
                  name="quizMode"
                  value={mixValue}
                  checked={settings.quizMode === mixValue}
                  onChange={() => update({ quizMode: mixValue })}
                />
                Mix ({phoneticCats.map(c => c.name).join(' & ')})
              </label>
            )}
            {nonPhoneticCats.map(cat => (
              <label key={cat.id} htmlFor={`mode-${cat.id}`}>
                <input
                  type="radio"
                  id={`mode-${cat.id}`}
                  name="quizMode"
                  value={cat.id}
                  checked={settings.quizMode === cat.id}
                  onChange={() => update({ quizMode: cat.id })}
                />
                {cat.name}
              </label>
            ))}
          </div>
        </div>
      )}

      {(!hasPhonetic || !isPhoneticMode) && language.hasRomanization && (
        <div className="setting-item">
          <label htmlFor="show-romanization">
            <input
              type="checkbox"
              id="show-romanization"
              checked={settings.showRomanization ?? true}
              onChange={(e) => update({ showRomanization: e.target.checked })}
            />
            {language.romanizationLabel}
          </label>
        </div>
      )}

      {(!hasPhonetic || !isPhoneticMode) && isTTSSupported() && (
        <div className="setting-item">
          <label className="setting-section-label">Listening questions:</label>
          <div className="radio-group">
            {[
              { id: 'off', name: 'Off' },
              { id: 'mixed', name: 'Mixed' },
              { id: 'only', name: 'Listening only' },
            ].map(opt => (
              <label key={opt.id} htmlFor={`listening-${opt.id}`}>
                <input
                  type="radio"
                  id={`listening-${opt.id}`}
                  name="listeningMode"
                  value={opt.id}
                  checked={(settings.listeningMode ?? 'off') === opt.id}
                  onChange={() => update({ listeningMode: opt.id })}
                />
                {opt.name}
              </label>
            ))}
          </div>
        </div>
      )}

      {isTTSSupported() && availableVoices.length > 1 && (
        <div className="setting-item">
          <label htmlFor="voice-select">Voice:</label>
          <select
            id="voice-select"
            value={settings.selectedVoice ?? ''}
            onChange={(e) => update({ selectedVoice: e.target.value || undefined })}
          >
            <option value="">Default</option>
            {availableVoices.map(v => (
              <option key={v.name} value={v.name}>{v.name}</option>
            ))}
          </select>
        </div>
      )}

      {(!hasPhonetic || !isPhoneticMode) && (
        <div className="setting-item">
          <label className="setting-section-label">Difficulty level:</label>
          <div className="radio-group">
            {LEVEL_LIST.map(lvl => (
              <label key={lvl.id} htmlFor={`level-${lvl.id}`}>
                <input
                  type="radio"
                  id={`level-${lvl.id}`}
                  name="level"
                  value={lvl.id}
                  checked={settings.level === lvl.id}
                  onChange={() => update({ level: lvl.id })}
                />
                {lvl.name}
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="settings-buttons">
        <button className="reset-btn" onClick={handleReset}>
          Reset All Data
        </button>
      </div>

    </div>
  );
}

export default Settings;
