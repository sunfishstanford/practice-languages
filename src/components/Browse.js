import React, { useState } from 'react';
import { speak, isTTSSupported } from '../audio';
import './Browse.css';

function Browse({ language }) {
  const [activeCategory, setActiveCategory] = useState(language.categories[0]?.id || '');

  const currentCategory = language.categories.find(cat => cat.id === activeCategory);
  const currentData = currentCategory?.data || [];

  const handleSpeak = (text) => {
    speak(text, language.speechLang).catch(() => {});
  };

  const renderGridRows = (category) => {
    const rows = category.gridRows(category.data);

    return (
      <div className="kana-rows">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="kana-row">
            {row.map((item, itemIndex) => (
              <div key={itemIndex} className="kana-cell">
                <div className="kana-japanese">{item.native}</div>
                <div className="kana-romaji">{item.romanization}</div>
                {isTTSSupported() && (
                  <button
                    className="browse-audio-btn"
                    onClick={() => handleSpeak(item.native)}
                    aria-label={`Play ${item.native}`}
                  >
                    &#x1f50a;
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const renderListItems = (data) => {
    return (
      <div className="browse-list">
        {data.map((item, index) => (
          <div key={index} className="browse-item">
            <div className="browse-japanese">{item.native}</div>
            <div className="browse-details">
              <div className="browse-romaji">{item.romanization}</div>
              <div className="browse-english">{item.english}</div>
            </div>
            {isTTSSupported() && (
              <button
                className="browse-audio-btn"
                onClick={() => handleSpeak(item.native)}
                aria-label={`Play ${item.native}`}
              >
                &#x1f50a;
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="browse-container">
      <h2>Browse & Learn</h2>

      <div className="category-tabs">
        {language.categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
            <span className="count">({category.data.length})</span>
          </button>
        ))}
      </div>

      {currentCategory?.renderMode === 'grid'
        ? renderGridRows(currentCategory)
        : renderListItems(currentData)}
    </div>
  );
}

export default Browse;
