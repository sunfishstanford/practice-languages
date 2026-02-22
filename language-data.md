# Language Data File Specification

This document describes how to create a language data file for the Practice Languages app. Each language is a single JavaScript file that exports a configuration object. The app handles all processing — your file just provides raw data.

## File Location

Place your file in `src/languages/` (e.g., `src/languages/korean.js`).

To register it, add an import in `src/languages/index.js`:

```js
import korean from './korean';

export const languageList = [japanese, chinese, korean].map(processLanguage);
```

## Top-Level Config

```js
const myLanguage = {
  id: 'korean',              // Unique identifier (lowercase, no spaces)
  name: 'Korean',            // Display name
  speechLang: 'ko-KR',       // BCP 47 language tag for text-to-speech
  hasRomanization: true,      // Whether items have romanized text
  romanizationLabel: 'Show Romanization',  // Toggle label in settings
  categories: [ /* ... */ ]
};

export default myLanguage;
```

- `speechLang`: Used by the Web Speech API. Common values: `'ja-JP'`, `'zh-CN'`, `'ko-KR'`, `'es-ES'`, `'fr-FR'`.
- `hasRomanization`: Set `false` for languages using the Latin alphabet (e.g., Spanish, French). When `false`, `romanizationLabel` is ignored.

## Categories

Each category is a group of related content (e.g., "Phrases", "Vocabulary", "Characters").

```js
categories: [
  {
    id: 'phrases',            // Unique within this language
    name: 'Phrases',          // Display name
    renderMode: 'list',       // 'list' or 'grid'
    levels: {
      elementary: [ /* items */ ],
      high_school: [ /* items */ ],
      college: [ /* items */ ]
    }
  }
]
```

### Render Modes

- **`list`**: Items shown as rows with native text, romanization, and English. Best for phrases and vocabulary.
- **`grid`**: Items shown in a compact grid of cells. Best for characters, kana, or tones.

### Levels

Three difficulty levels are available:

| Key | Display Name |
|-----|-------------|
| `elementary` | Elementary School |
| `high_school` | High School |
| `college` | College |

A category does not need all three levels. For example, a character grid that only applies to beginners:

```js
{
  id: 'characters',
  name: 'Characters',
  renderMode: 'grid',
  levels: { elementary: characters }
}
```

Categories with no items at the user's selected level are automatically hidden.

## Items

Each item has exactly three fields:

```js
{ native: '你好', romanization: 'nǐ hǎo', english: 'Hello' }
```

- `native`: The word/phrase in the target language.
- `romanization`: Romanized pronunciation (e.g., pinyin, romaji). Required even if `hasRomanization` is `false` — just set it to the same value as `native`.
- `english`: English translation.

Do **not** include `type`, `level`, or `categoryId` fields — these are added automatically by the app.

## Custom Grid Layout (Optional)

By default, grid categories display items in rows of 5. To customize row breaks, add a `gridRows` function to the category:

```js
{
  id: 'hiragana',
  name: 'Hiragana',
  renderMode: 'grid',
  gridRows: function(items) {
    // Return an array of arrays (each inner array is one row)
    const rows = [];
    let currentRow = [];
    items.forEach(item => {
      currentRow.push(item);
      if (currentRow.length === 5 || item.romanization === 'n') {
        rows.push([...currentRow]);
        currentRow = [];
      }
    });
    if (currentRow.length > 0) rows.push(currentRow);
    return rows;
  },
  levels: { elementary: hiragana }
}
```

The `gridRows` function receives the filtered items array and must return an array of row arrays. If omitted, the default rows-of-5 layout is used.

## Complete Minimal Example

```js
const greetings = [
  { native: '안녕하세요', romanization: 'annyeonghaseyo', english: 'Hello' },
  { native: '감사합니다', romanization: 'gamsahamnida', english: 'Thank you' },
  { native: '죄송합니다', romanization: 'joesonghamnida', english: 'I\'m sorry' },
  { native: '네', romanization: 'ne', english: 'Yes' },
  { native: '아니요', romanization: 'aniyo', english: 'No' },
];

const advancedPhrases = [
  { native: '실례합니다', romanization: 'sillyehamnida', english: 'Excuse me' },
  { native: '도와주세요', romanization: 'dowajuseyo', english: 'Please help me' },
];

const korean = {
  id: 'korean',
  name: 'Korean',
  speechLang: 'ko-KR',
  hasRomanization: true,
  romanizationLabel: 'Show Romanization',
  categories: [
    {
      id: 'phrases',
      name: 'Phrases',
      renderMode: 'list',
      levels: {
        elementary: greetings,
        high_school: advancedPhrases
      }
    }
  ]
};

export default korean;
```
