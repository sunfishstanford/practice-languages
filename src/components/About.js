import React from 'react';
import './About.css';

const VERSION = '1.3.0';

const CHANGELOG = [
  {
    version: '1.3.0',
    date: '2026-03-28',
    changes: [
      'Incorrectly answered questions now accumulate across sessions, not just the most recent session',
      'Items answered correctly are removed from the emphasis list',
      'Hiragana and katakana mistakes age out — only the most recent 30% are retained to keep the emphasis list fresh',
      'Vocabulary and phrase mistakes accumulate without a cap',
    ],
  },
  {
    version: '1.2.0',
    date: '2026-03-28',
    changes: [
      'New quiz topic selector for Japanese: choose Hiragana, Katakana, Mix, Vocabulary, or Phrases',
      'Difficulty level, Romaji, and listening settings only shown for Vocabulary and Phrases',
      'Romaji hidden during hiragana/katakana quiz questions to avoid giving away the answer',
      'Removed "Include Hiragana & Katakana at all levels" option',
    ],
  },
  {
    version: '1.1.0',
    date: '2026-03-27',
    changes: [
      'Multi-language support: Japanese, Chinese, and Dutch',
      'Difficulty levels: Elementary, High School, College',
      'Listening mode for audio-based questions',
      'Browse mode with grid and list views',
      'Offline support via service worker',
    ],
  },
];

function About() {
  return (
    <div className="about-container">
      <h2>About</h2>

      <div className="about-section">
        <p className="about-version">Version {VERSION}</p>
        <p>
          Practice Languages helps you learn through interactive quizzes with
          text-to-speech support. Questions you answer incorrectly are
          emphasized in future sessions to help you learn. The app works
          offline once loaded.
        </p>
      </div>

      <div className="about-section">
        <h3>Changelog</h3>
        {CHANGELOG.map(release => (
          <div key={release.version} className="changelog-entry">
            <div className="changelog-header">
              <span className="changelog-version">v{release.version}</span>
              <span className="changelog-date">{release.date}</span>
            </div>
            <ul>
              {release.changes.map((change, i) => (
                <li key={i}>{change}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
