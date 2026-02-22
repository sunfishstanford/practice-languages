import React, { useState, useEffect } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Settings from './components/Settings';
import History from './components/History';
import Browse from './components/Browse';
import { languageList, getLanguage } from './languages';
import {
  getActiveLanguageId,
  saveActiveLanguageId,
  getLanguageSettings,
  saveLanguageSettings,
  migrateOldStorage
} from './storage';

function getDefaultSettings(language) {
  const enabledCategories = {};
  language.categories.forEach(cat => {
    enabledCategories[cat.id] = true;
  });
  return {
    questionsPerSession: 10,
    showRomanization: true,
    includeListening: false,
    enabledCategories
  };
}

function migrateSettings(saved, language) {
  // Detect old format with includeHiragana etc.
  if (saved && saved.includeHiragana !== undefined) {
    return {
      questionsPerSession: saved.questionsPerSession || 10,
      showRomanization: saved.showRomaji ?? saved.showRomanization ?? true,
      includeListening: saved.includeListening ?? false,
      enabledCategories: {
        hiragana: saved.includeHiragana ?? true,
        katakana: saved.includeKatakana ?? true,
        phrases: saved.includePhrases ?? true,
        vocabulary: saved.includeVocabulary ?? true
      }
    };
  }
  // Already new format or null
  if (saved && saved.enabledCategories) {
    return saved;
  }
  return getDefaultSettings(language);
}

function App() {
  const [currentPage, setCurrentPage] = useState('quiz');
  const [activeLanguageId, setActiveLanguageId] = useState(() => getActiveLanguageId());
  const [language, setLanguage] = useState(() => getLanguage(getActiveLanguageId()));
  const [settings, setSettings] = useState(() => {
    const lang = getLanguage(getActiveLanguageId());
    const saved = getLanguageSettings(lang.id);
    return migrateSettings(saved, lang);
  });

  useEffect(() => {
    migrateOldStorage();
  }, []);

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    saveLanguageSettings(activeLanguageId, newSettings);
  };

  const handleLanguageChange = (newId) => {
    // Save current settings
    saveLanguageSettings(activeLanguageId, settings);

    // Switch language
    const newLang = getLanguage(newId);
    setActiveLanguageId(newId);
    setLanguage(newLang);
    saveActiveLanguageId(newId);

    // Load new language's settings
    const saved = getLanguageSettings(newId);
    const newSettings = migrateSettings(saved, newLang);
    setSettings(newSettings);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Practice Languages</h1>
      </header>

      <nav className="App-nav">
        <button
          className={currentPage === 'quiz' ? 'active' : ''}
          onClick={() => setCurrentPage('quiz')}
        >
          Quiz
        </button>
        <button
          className={currentPage === 'browse' ? 'active' : ''}
          onClick={() => setCurrentPage('browse')}
        >
          Browse
        </button>
        <button
          className={currentPage === 'settings' ? 'active' : ''}
          onClick={() => setCurrentPage('settings')}
        >
          Settings
        </button>
        <button
          className={currentPage === 'history' ? 'active' : ''}
          onClick={() => setCurrentPage('history')}
        >
          History
        </button>
      </nav>

      <main className="App-main">
        {currentPage === 'quiz' && <Quiz settings={settings} language={language} />}
        {currentPage === 'browse' && <Browse language={language} />}
        {currentPage === 'settings' && (
          <Settings
            settings={settings}
            updateSettings={updateSettings}
            language={language}
            languages={languageList}
            activeLanguageId={activeLanguageId}
            onLanguageChange={handleLanguageChange}
          />
        )}
        {currentPage === 'history' && <History language={language} />}
      </main>
    </div>
  );
}

export default App;
