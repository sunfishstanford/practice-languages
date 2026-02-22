import React, { useState, useEffect } from 'react';
import { speak, isTTSSupported } from '../audio';
import './Browse.css';

function Browse({ language, settings }) {
  const visibleCategories = language.categories.filter(cat =>
    (settings.includePhonetics && cat.phonetic) ||
    cat.data.some(item => item.level === settings.level)
  );

  const [activeCategory, setActiveCategory] = useState(language.categories[0]?.id || '');

  useEffect(() => {
    const visible = language.categories.filter(cat =>
      (settings.includePhonetics && cat.phonetic) ||
      cat.data.some(item => item.level === settings.level)
    );
    if (!visible.find(cat => cat.id === activeCategory)) {
      setActiveCategory(visible[0]?.id || '');
    }
  }, [settings.level, settings.includePhonetics, language, activeCategory]);

  const currentCategory = language.categories.find(cat => cat.id === activeCategory);
  const currentData = currentCategory
    ? (settings.includePhonetics && currentCategory.phonetic
        ? currentCategory.data
        : currentCategory.data.filter(item => item.level === settings.level))
    : [];

  const handleSpeak = (text) => {
    speak(text, language.speechLang, {
      rate: language.speechRate,
      preferredVoices: language.preferredVoices,
    }).catch(() => {});
  };

  const renderGridRows = (category) => {
    const filteredData = (settings.includePhonetics && category.phonetic)
      ? category.data
      : category.data.filter(item => item.level === settings.level);
    const rows = category.gridRows(filteredData);

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
        {visibleCategories.map(category => {
          const count = (settings.includePhonetics && category.phonetic)
            ? category.data.length
            : category.data.filter(item => item.level === settings.level).length;
          return (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <span className="count">({count})</span>
            </button>
          );
        })}
      </div>

      {currentCategory?.renderMode === 'grid'
        ? renderGridRows(currentCategory)
        : renderListItems(currentData)}
    </div>
  );
}

export default Browse;
