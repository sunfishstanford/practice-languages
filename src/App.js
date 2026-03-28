import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Settings from './components/Settings';
import History from './components/History';
import Browse from './components/Browse';
import About from './components/About';
import { languageList, getLanguage } from './languages';
import { DEFAULT_LEVEL } from './levels';
import { warmUpTTS } from './audio';
import {
  getActiveLanguageId,
  saveActiveLanguageId,
  getLanguageSettings,
  saveLanguageSettings,
  migrateOldStorage
} from './storage';

function getDefaultSettings(language) {
  const defaults = {
    questionsPerSession: 10,
    showRomanization: true,
    listeningMode: 'off',
    level: DEFAULT_LEVEL
  };
  if (language && language.categories.some(c => c.phonetic)) {
    defaults.quizMode = language.categories.find(c => c.phonetic).id;
  }
  return defaults;
}

function migrateSettings(saved, language) {
  if (!saved) return getDefaultSettings(language);
  // Migrate old includeListening boolean → listeningMode
  if ('includeListening' in saved && !('listeningMode' in saved)) {
    saved.listeningMode = saved.includeListening ? 'mixed' : 'off';
    delete saved.includeListening;
  }
  // Migrate old includePhonetics → quizMode
  if ('includePhonetics' in saved) {
    delete saved.includePhonetics;
  }
  if (language && language.categories.some(c => c.phonetic) && !saved.quizMode) {
    saved.quizMode = language.categories.find(c => c.phonetic).id;
  }
  if (saved.level) return saved;
  // Old format with enabledCategories or includeHiragana — migrate to default level
  return {
    questionsPerSession: saved.questionsPerSession || 10,
    showRomanization: saved.showRomaji ?? saved.showRomanization ?? true,
    listeningMode: saved.listeningMode ?? 'off',
    level: DEFAULT_LEVEL
  };
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

  const ttsWarmedUp = useRef(false);

  useEffect(() => {
    migrateOldStorage();
  }, []);

  // Warm up TTS on first user interaction — iOS/Android require a gesture-
  // triggered speak call before audio works.
  useEffect(() => {
    const handler = () => {
      if (!ttsWarmedUp.current) {
        ttsWarmedUp.current = true;
        warmUpTTS();
      }
      document.removeEventListener('click', handler);
      document.removeEventListener('touchstart', handler);
    };
    document.addEventListener('click', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('click', handler);
      document.removeEventListener('touchstart', handler);
    };
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
        <button
          className={currentPage === 'about' ? 'active' : ''}
          onClick={() => setCurrentPage('about')}
        >
          About
        </button>
      </nav>

      <main className="App-main">
        {currentPage === 'quiz' && <Quiz settings={settings} language={language} />}
        {currentPage === 'browse' && <Browse language={language} settings={settings} />}
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
        {currentPage === 'about' && <About />}
      </main>
    </div>
  );
}

export default App;
