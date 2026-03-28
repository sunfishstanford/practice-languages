import React, { useState, useEffect, useCallback, useRef } from 'react';
import { speak, isTTSSupported } from '../audio';
import { getIncorrectQuestions, saveIncorrectQuestions, getQuizHistory, saveQuizHistory } from '../storage';
import './Quiz.css';

function Quiz({ settings, language }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [showDictionary, setShowDictionary] = useState(false);
  const feedbackRef = useRef(null);

  const getFilteredData = useCallback(() => {
    let data = [];
    const hasPhonetic = language.categories.some(c => c.phonetic);

    if (hasPhonetic && settings.quizMode) {
      const selectedIds = settings.quizMode.split('+');
      language.categories.forEach(cat => {
        if (selectedIds.includes(cat.id)) {
          if (cat.phonetic) {
            data = [...data, ...cat.data];
          } else {
            data = [...data, ...cat.data.filter(item => item.level === settings.level)];
          }
        }
      });
    } else {
      language.categories.forEach(cat => {
        data = [...data, ...cat.data.filter(item => item.level === settings.level)];
      });
    }
    return data;
  }, [language, settings.level, settings.quizMode]);

  const startNewSession = useCallback(() => {
    const previouslyIncorrect = getIncorrectQuestions(language.id);
    const availableData = getFilteredData();

    const listeningMode = isTTSSupported() ? (settings.listeningMode ?? 'off') : 'off';
    const newQuestions = generateQuestions(
      settings.questionsPerSession,
      previouslyIncorrect,
      availableData,
      listeningMode
    );

    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setIncorrectQuestions([]);
    setSessionComplete(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.questionsPerSession, settings.listeningMode, getFilteredData, language.id]);

  useEffect(() => {
    startNewSession();
  }, [startNewSession]);

  useEffect(() => {
    if (showFeedback && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [showFeedback]);

  const generateQuestions = (count, emphasizeItems, availableData, listeningMode) => {
    const questions = [];
    const usedIndices = new Set();

    const filteredEmphasizeItems = emphasizeItems.filter(item => {
      return availableData.some(d => d.native === item.native && d.english === item.english);
    });

    const emphasizeCount = Math.min(
      Math.floor(count * 0.4),
      filteredEmphasizeItems.length
    );

    for (let i = 0; i < emphasizeCount; i++) {
      const item = filteredEmphasizeItems[i];
      const question = createQuestion(item, availableData, listeningMode);
      questions.push(question);
    }

    while (questions.length < count && availableData.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableData.length);

      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        const item = availableData[randomIndex];
        const question = createQuestion(item, availableData, listeningMode);
        questions.push(question);
      }
    }

    return shuffleArray(questions);
  };

  const createQuestion = (item, availableData, listeningMode) => {
    const rand = Math.random();
    let direction;
    if (listeningMode === 'only') {
      direction = 'listening';
    } else if (listeningMode === 'mixed' && rand < 0.33) {
      direction = 'listening';
    } else if (rand < (listeningMode === 'mixed' ? 0.66 : 0.5)) {
      direction = 'native-to-english';
    } else {
      direction = 'english-to-native';
    }

    let questionText, correctAnswer, targetField;

    if (direction === 'listening') {
      questionText = null; // audio-only
      correctAnswer = item.native;
      targetField = 'native';
    } else if (direction === 'native-to-english') {
      questionText = item.native;
      correctAnswer = item.english;
      targetField = 'english';
    } else {
      questionText = item.english;
      correctAnswer = item.native;
      targetField = 'native';
    }

    const wrongAnswers = generateWrongAnswers(item, targetField, availableData);

    const answers = shuffleArray([correctAnswer, ...wrongAnswers]);

    return {
      item,
      type: direction,
      questionText,
      correctAnswer,
      romanization: item.romanization,
      answers
    };
  };

  const generateWrongAnswers = (correctItem, targetField, availableData) => {
    const wrongAnswers = [];
    const usedIndices = new Set();

    while (wrongAnswers.length < 3 && availableData.length > wrongAnswers.length) {
      const randomIndex = Math.floor(Math.random() * availableData.length);
      const randomItem = availableData[randomIndex];

      if (
        randomItem[targetField] !== correctItem[targetField] &&
        !usedIndices.has(randomIndex)
      ) {
        usedIndices.add(randomIndex);
        wrongAnswers.push(randomItem[targetField]);
      }
    }

    return wrongAnswers;
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleAnswerClick = (answer) => {
    if (showFeedback) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectQuestions([...incorrectQuestions, currentQuestion.item]);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setShowDictionary(false);
    } else {
      finishSession();
    }
  };

  const finishSession = () => {
    setSessionComplete(true);

    const history = getQuizHistory(language.id);
    const sessionData = {
      date: new Date().toISOString(),
      score,
      total: questions.length,
      percentage: Math.round((score / questions.length) * 100)
    };
    history.push(sessionData);
    saveQuizHistory(language.id, history);

    // Accumulate incorrect questions across sessions
    const previous = getIncorrectQuestions(language.id);

    // Add new incorrect items, then deduplicate (keep latest occurrence)
    const combined = [...previous, ...incorrectQuestions];
    const seen = new Set();
    const deduped = [];
    for (let i = combined.length - 1; i >= 0; i--) {
      const key = combined[i].native + '|' + combined[i].categoryId;
      if (!seen.has(key)) {
        seen.add(key);
        deduped.unshift(combined[i]);
      }
    }

    // Remove items the user answered correctly this session
    const correctThisSession = new Set(
      questions
        .filter((q, idx) => {
          const answered = idx < currentQuestionIndex || (idx === currentQuestionIndex);
          return answered && !incorrectQuestions.some(iq => iq.native === q.item.native && iq.categoryId === q.item.categoryId);
        })
        .map(q => q.item.native + '|' + q.item.categoryId)
    );
    const afterCorrect = deduped.filter(item => !correctThisSession.has(item.native + '|' + item.categoryId));

    // Age out phonetic categories: keep only most recent 30% * category size
    const phoneticCats = language.categories.filter(c => c.phonetic);
    const phoneticTotal = phoneticCats.reduce((sum, c) => sum + c.data.length, 0);
    const phoneticCap = Math.ceil(phoneticTotal * 0.3);
    const phoneticIds = new Set(phoneticCats.map(c => c.id));

    const nonPhonetic = afterCorrect.filter(item => !phoneticIds.has(item.categoryId));
    const phonetic = afterCorrect.filter(item => phoneticIds.has(item.categoryId));
    // Keep only the most recent entries (end of array = most recent)
    const cappedPhonetic = phonetic.slice(-phoneticCap);

    saveIncorrectQuestions(language.id, [...nonPhonetic, ...cappedPhonetic]);
  };

  const handlePlayAudio = (text) => {
    const preferredVoices = settings.selectedVoice
      ? [settings.selectedVoice]
      : language.preferredVoices;
    speak(text, language.speechLang, {
      rate: language.speechRate,
      preferredVoices,
    }).catch(() => {});
  };

  if (questions.length === 0) {
    return <div className="quiz-loading">Loading quiz...</div>;
  }

  if (sessionComplete) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="quiz-complete">
        <h2>Session Complete!</h2>
        <div className="score-display">
          <p className="score-text">
            Score: {score} / {questions.length}
          </p>
          <p className="percentage-text">{percentage}%</p>
        </div>
        <button className="new-session-btn" onClick={startNewSession}>
          Start New Session
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const currentCategory = language.categories.find(c => c.id === currentQuestion.item.categoryId);
  const categoryName = currentCategory?.name;
  const isPhonetic = currentCategory?.phonetic;

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>

      <div className="quiz-score">
        Score: {score} / {currentQuestionIndex + (showFeedback ? 1 : 0)}
      </div>

      <div className="question-card">
        {categoryName && currentQuestion.item.categoryId !== 'phrases' && (
          <div className="question-type-badge">
            {categoryName}
          </div>
        )}
        {currentQuestion.type === 'listening' ? (
          <div className="listening-question">
            <button
              className="play-audio-btn"
              onClick={() => handlePlayAudio(currentQuestion.item.native)}
              aria-label="Play audio"
            >
              &#x1f50a;
            </button>
            <div className="audio-hint">Tap to listen</div>
          </div>
        ) : (
          <>
            <div className="question-text">{currentQuestion.questionText}</div>
            {settings.showRomanization && language.hasRomanization && currentQuestion.type === 'native-to-english' && !language.categories.find(c => c.id === currentQuestion.item.categoryId)?.phonetic && (
              <div className="romaji-text">({currentQuestion.romanization})</div>
            )}
          </>
        )}
      </div>

      <div className="answers-container">
        {currentQuestion.answers.map((answer, index) => {
          let buttonClass = 'answer-btn';

          if (showFeedback) {
            if (answer === currentQuestion.correctAnswer) {
              buttonClass += ' correct';
            } else if (answer === selectedAnswer) {
              buttonClass += ' incorrect';
            }
          } else if (answer === selectedAnswer) {
            buttonClass += ' selected';
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => handleAnswerClick(answer)}
              disabled={showFeedback}
            >
              {answer}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div ref={feedbackRef} className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          <p className="feedback-text">
            {isCorrect ? 'Correct!' : 'Incorrect!'}
          </p>
          {!isCorrect && (
            <p className="correct-answer-text">
              Correct answer: {currentQuestion.correctAnswer}
            </p>
          )}
          {!isPhonetic && !showDictionary && (
            <button className="dictionary-btn" onClick={() => setShowDictionary(true)}>
              Dictionary
            </button>
          )}
          {showDictionary && (
            <div className="dictionary-entry">
              <div className="dictionary-native">{currentQuestion.item.native}</div>
              {language.hasRomanization && currentQuestion.item.romanization && (
                <div className="dictionary-romanization">{currentQuestion.item.romanization}</div>
              )}
              <div className="dictionary-english">{currentQuestion.item.english}</div>
            </div>
          )}
          <button className="next-btn" onClick={handleNext}>
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Session'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
