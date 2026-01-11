import React, { useState } from 'react';
import { hiragana, katakana, phrases, vocabulary } from '../data';
import './Browse.css';

function Browse() {
  const [activeCategory, setActiveCategory] = useState('hiragana');

  const categories = [
    { id: 'hiragana', name: 'Hiragana', data: hiragana },
    { id: 'katakana', name: 'Katakana', data: katakana },
    { id: 'phrases', name: 'Phrases', data: phrases },
    { id: 'vocabulary', name: 'Vocabulary', data: vocabulary }
  ];

  const currentData = categories.find(cat => cat.id === activeCategory)?.data || [];

  return (
    <div className="browse-container">
      <h2>Browse & Learn</h2>

      <div className="category-tabs">
        {categories.map(category => (
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

      <div className="browse-list">
        {currentData.map((item, index) => (
          <div key={index} className="browse-item">
            <div className="browse-japanese">{item.japanese}</div>
            <div className="browse-details">
              <div className="browse-romaji">{item.romaji}</div>
              <div className="browse-english">{item.english}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
