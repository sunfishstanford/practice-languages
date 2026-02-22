import React from 'react';
import { resetLanguageData } from '../storage';
import { isTTSSupported } from '../audio';
import { LEVEL_LIST, DEFAULT_LEVEL } from '../levels';
import './Settings.css';

function Settings({ settings, updateSettings, language, languages, activeLanguageId, onLanguageChange }) {
  const update = (changes) => {
    updateSettings({ ...settings, ...changes });
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      `Are you sure you want to reset all ${language.name} data? This will clear your history and incorrect question tracking.`
    );

    if (confirmed) {
      resetLanguageData(language.id);
      updateSettings({
        questionsPerSession: 10,
        showRomanization: true,
        includeListening: false,
        includePhonetics: false,
        level: DEFAULT_LEVEL
      });
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

      {language.hasRomanization && (
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

      {isTTSSupported() && (
        <div className="setting-item">
          <label htmlFor="include-listening">
            <input
              type="checkbox"
              id="include-listening"
              checked={settings.includeListening ?? false}
              onChange={(e) => update({ includeListening: e.target.checked })}
            />
            Include listening questions
          </label>
        </div>
      )}

      {language.categories.some(c => c.phonetic) && (
        <div className="setting-item">
          <label htmlFor="include-phonetics">
            <input
              type="checkbox"
              id="include-phonetics"
              checked={settings.includePhonetics ?? false}
              onChange={(e) => update({ includePhonetics: e.target.checked })}
            />
            Include {language.categories.filter(c => c.phonetic).map(c => c.name).join(' & ')} at all levels
          </label>
        </div>
      )}

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

      <div className="settings-buttons">
        <button className="reset-btn" onClick={handleReset}>
          Reset All Data
        </button>
      </div>

      <div className="settings-info">
        <h3>About</h3>
        <p>
          This app helps you practice {language.name} through interactive quizzes.
          Questions you answer incorrectly will be emphasized in future sessions
          to help you learn.
        </p>
        <p>
          The app works offline once loaded, so you can practice anywhere!
        </p>
      </div>
    </div>
  );
}

export default Settings;
