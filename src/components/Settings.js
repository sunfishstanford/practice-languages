import React, { useState } from 'react';
import { resetLanguageData } from '../storage';
import { isTTSSupported } from '../audio';
import './Settings.css';

function Settings({ settings, updateSettings, language, languages, activeLanguageId, onLanguageChange }) {
  const [questionsPerSession, setQuestionsPerSession] = useState(
    settings.questionsPerSession
  );
  const [showRomanization, setShowRomanization] = useState(settings.showRomanization ?? true);
  const [includeListening, setIncludeListening] = useState(settings.includeListening ?? false);
  const [enabledCategories, setEnabledCategories] = useState(() => {
    const cats = {};
    language.categories.forEach(cat => {
      cats[cat.id] = settings.enabledCategories?.[cat.id] ?? true;
    });
    return cats;
  });

  const handleCategoryToggle = (catId, checked) => {
    setEnabledCategories(prev => ({ ...prev, [catId]: checked }));
  };

  const handleSave = () => {
    const anyEnabled = Object.values(enabledCategories).some(v => v);
    if (!anyEnabled) {
      alert('Please select at least one content type to quiz on!');
      return;
    }

    updateSettings({
      questionsPerSession: parseInt(questionsPerSession),
      showRomanization,
      includeListening,
      enabledCategories
    });
    alert('Settings saved!');
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      `Are you sure you want to reset all ${language.name} data? This will clear your history and incorrect question tracking.`
    );

    if (confirmed) {
      resetLanguageData(language.id);
      const defaultCats = {};
      language.categories.forEach(cat => {
        defaultCats[cat.id] = true;
      });
      setQuestionsPerSession(10);
      setShowRomanization(true);
      setIncludeListening(false);
      setEnabledCategories(defaultCats);
      updateSettings({
        questionsPerSession: 10,
        showRomanization: true,
        includeListening: false,
        enabledCategories: defaultCats
      });
      alert(`All ${language.name} data has been reset!`);
    }
  };

  const handleLanguageSwitch = (e) => {
    const newId = e.target.value;
    onLanguageChange(newId);
    // Re-initialize local state for new language
    const newLang = languages.find(l => l.id === newId);
    if (newLang) {
      const cats = {};
      newLang.categories.forEach(cat => {
        cats[cat.id] = true;
      });
      setEnabledCategories(cats);
      setShowRomanization(true);
      setIncludeListening(false);
    }
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
          value={questionsPerSession}
          onChange={(e) => setQuestionsPerSession(e.target.value)}
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
              checked={showRomanization}
              onChange={(e) => setShowRomanization(e.target.checked)}
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
              checked={includeListening}
              onChange={(e) => setIncludeListening(e.target.checked)}
            />
            Include listening questions
          </label>
        </div>
      )}

      <div className="setting-item">
        <label className="setting-section-label">Quiz content types:</label>
        <div className="checkbox-group">
          {language.categories.map(cat => (
            <label key={cat.id} htmlFor={`include-${cat.id}`}>
              <input
                type="checkbox"
                id={`include-${cat.id}`}
                checked={enabledCategories[cat.id] ?? true}
                onChange={(e) => handleCategoryToggle(cat.id, e.target.checked)}
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      <div className="settings-buttons">
        <button className="save-btn" onClick={handleSave}>
          Save Settings
        </button>
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
