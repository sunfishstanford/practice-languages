import React, { useState } from 'react';
import './Settings.css';

function Settings({ settings, updateSettings }) {
  const [questionsPerSession, setQuestionsPerSession] = useState(
    settings.questionsPerSession
  );
  const [showRomaji, setShowRomaji] = useState(settings.showRomaji);
  const [includeHiragana, setIncludeHiragana] = useState(settings.includeHiragana ?? true);
  const [includeKatakana, setIncludeKatakana] = useState(settings.includeKatakana ?? true);
  const [includePhrases, setIncludePhrases] = useState(settings.includePhrases ?? true);
  const [includeVocabulary, setIncludeVocabulary] = useState(settings.includeVocabulary ?? true);

  const handleSave = () => {
    // Validate that at least one content type is selected
    if (!includeHiragana && !includeKatakana && !includePhrases && !includeVocabulary) {
      alert('Please select at least one content type to quiz on!');
      return;
    }

    updateSettings({
      questionsPerSession: parseInt(questionsPerSession),
      showRomaji: showRomaji,
      includeHiragana: includeHiragana,
      includeKatakana: includeKatakana,
      includePhrases: includePhrases,
      includeVocabulary: includeVocabulary
    });
    alert('Settings saved!');
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      'Are you sure you want to reset all data? This will clear your history and incorrect question tracking.'
    );

    if (confirmed) {
      localStorage.removeItem('quizHistory');
      localStorage.removeItem('incorrectQuestions');
      localStorage.removeItem('quizSettings');
      setQuestionsPerSession(10);
      setShowRomaji(true);
      setIncludeHiragana(true);
      setIncludeKatakana(true);
      setIncludePhrases(true);
      setIncludeVocabulary(true);
      updateSettings({
        questionsPerSession: 10,
        showRomaji: true,
        includeHiragana: true,
        includeKatakana: true,
        includePhrases: true,
        includeVocabulary: true
      });
      alert('All data has been reset!');
    }
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

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

      <div className="setting-item">
        <label htmlFor="show-romaji">
          <input
            type="checkbox"
            id="show-romaji"
            checked={showRomaji}
            onChange={(e) => setShowRomaji(e.target.checked)}
          />
          Show Romaji pronunciation for Japanese characters
        </label>
      </div>

      <div className="setting-item">
        <label className="setting-section-label">Quiz content types:</label>
        <div className="checkbox-group">
          <label htmlFor="include-hiragana">
            <input
              type="checkbox"
              id="include-hiragana"
              checked={includeHiragana}
              onChange={(e) => setIncludeHiragana(e.target.checked)}
            />
            Hiragana characters
          </label>
          <label htmlFor="include-katakana">
            <input
              type="checkbox"
              id="include-katakana"
              checked={includeKatakana}
              onChange={(e) => setIncludeKatakana(e.target.checked)}
            />
            Katakana characters
          </label>
          <label htmlFor="include-phrases">
            <input
              type="checkbox"
              id="include-phrases"
              checked={includePhrases}
              onChange={(e) => setIncludePhrases(e.target.checked)}
            />
            Japanese phrases
          </label>
          <label htmlFor="include-vocabulary">
            <input
              type="checkbox"
              id="include-vocabulary"
              checked={includeVocabulary}
              onChange={(e) => setIncludeVocabulary(e.target.checked)}
            />
            Vocabulary words
          </label>
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
          This app helps you practice Japanese hiragana, katakana, and common
          phrases. Questions you answer incorrectly will be emphasized in
          future sessions to help you learn.
        </p>
        <p>
          The app works offline once loaded, so you can practice anywhere!
        </p>
      </div>
    </div>
  );
}

export default Settings;
