// Centralized localStorage helpers with per-language namespacing

export function getActiveLanguageId() {
  return localStorage.getItem('activeLanguageId') || 'japanese';
}

export function saveActiveLanguageId(id) {
  localStorage.setItem('activeLanguageId', id);
}

export function getLanguageSettings(langId) {
  const raw = localStorage.getItem(`${langId}:quizSettings`);
  return raw ? JSON.parse(raw) : null;
}

export function saveLanguageSettings(langId, settings) {
  localStorage.setItem(`${langId}:quizSettings`, JSON.stringify(settings));
}

export function getQuizHistory(langId) {
  const raw = localStorage.getItem(`${langId}:quizHistory`);
  return raw ? JSON.parse(raw) : [];
}

export function saveQuizHistory(langId, history) {
  localStorage.setItem(`${langId}:quizHistory`, JSON.stringify(history));
}

export function getIncorrectQuestions(langId) {
  const raw = localStorage.getItem(`${langId}:incorrectQuestions`);
  return raw ? JSON.parse(raw) : [];
}

export function saveIncorrectQuestions(langId, questions) {
  localStorage.setItem(`${langId}:incorrectQuestions`, JSON.stringify(questions));
}

export function resetLanguageData(langId) {
  localStorage.removeItem(`${langId}:quizSettings`);
  localStorage.removeItem(`${langId}:quizHistory`);
  localStorage.removeItem(`${langId}:incorrectQuestions`);
}

// Migrate old un-namespaced keys to japanese:* prefix
export function migrateOldStorage() {
  // Only migrate if old keys exist and new keys don't
  const oldSettings = localStorage.getItem('quizSettings');
  const oldHistory = localStorage.getItem('quizHistory');
  const oldIncorrect = localStorage.getItem('incorrectQuestions');

  const alreadyMigrated = localStorage.getItem('japanese:quizSettings')
    || localStorage.getItem('japanese:quizHistory')
    || localStorage.getItem('japanese:incorrectQuestions');

  if ((oldSettings || oldHistory || oldIncorrect) && !alreadyMigrated) {
    if (oldSettings) {
      localStorage.setItem('japanese:quizSettings', oldSettings);
    }
    if (oldHistory) {
      localStorage.setItem('japanese:quizHistory', oldHistory);
    }
    if (oldIncorrect) {
      localStorage.setItem('japanese:incorrectQuestions', oldIncorrect);
    }

    // Remove old keys
    localStorage.removeItem('quizSettings');
    localStorage.removeItem('quizHistory');
    localStorage.removeItem('incorrectQuestions');
  }
}
