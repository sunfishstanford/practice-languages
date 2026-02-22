# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Practice Languages is a React PWA for learning multiple languages (Japanese, Chinese, Dutch, and extensible) through interactive quizzes with text-to-speech support. It runs entirely client-side with localStorage persistence—no backend. Optimized for mobile/iOS with offline support via Workbox service workers. Deployed to GitHub Pages at freeenergy.blog/practice-languages.

## Commands

- `npm start` — Dev server at localhost:3000
- `npm test` — Jest tests (Create React App defaults)
- `npm run build` — Production build to `/build`
- `npm run deploy` — Build and deploy to GitHub Pages via gh-pages

## Architecture

**Language Plugin System**: Each language is a self-contained file in `src/languages/` exporting a config object with `id`, `name`, `speechLang`, `hasRomanization`, `romanizationLabel`, and `categories[]`. Optional fields: `preferredVoices` (ordered array of preferred TTS voice name substrings, e.g. `['Tingting', 'Lili']`) and `speechRate` (number, overrides the default 0.85). See `language-data.md` for the complete specification for authoring language files. The registry in `src/languages/index.js` uses `processLanguage()` to transform raw configs into runtime format, then exports `languageList`, `getLanguage(id)`, and `defaultLanguageId`.

**Data Schema**: In language files, items are `{ native, romanization, english }` — no `type` or `level` fields. Categories use a `levels` object (`{ elementary: [...], high_school: [...], college: [...] }`) to organize items by difficulty. `processLanguage()` flattens these into a `data` array at runtime, adding `level` and `categoryId` to each item. Categories define `renderMode` (`grid` or `list`); grid categories get a default rows-of-5 layout unless they provide a custom `gridRows(items)` function.

**State & Data Flow**: App.js manages `currentPage`, `activeLanguageId`, `language` object, and `settings` state. No routing library—pages are swapped via conditional rendering.

**Storage** (`src/storage.js`): Per-language namespaced localStorage with key format `{languageId}:{key}`. Includes migration from old un-namespaced keys to `japanese:*` prefix.

**Difficulty Levels** (`src/levels.js`): Shared constants for the level system. Exports `LEVELS` enum, `LEVEL_LIST` (for UI rendering), and `DEFAULT_LEVEL` (`'elementary'`). Filtering is non-cumulative — each level shows only its own content.

**Settings Shape**: `{ questionsPerSession, showRomanization, includeListening, level }`. The `level` field is one of `'elementary'`, `'high_school'`, or `'college'`. Migrates from old `enabledCategories` format to `level: 'elementary'`.

**Quiz Logic** (Quiz.js): 40% of questions drawn from previously incorrect items, 60% random. Three question directions: native→english, english→native, and listening (TTS). Four multiple-choice options per question with immediate feedback.

**Audio** (`src/audio.js`): Web Speech API wrapper for text-to-speech. `speak(text, lang, options?)` returns a Promise. The optional `options` object supports `preferredVoices` (array of voice name substrings to prefer, tried in order) and `rate` (speech rate override, defaults to 0.85). Components pass `language.preferredVoices` and `language.speechRate` from the language config. Works offline with OS-level voices.

**Components**: Quiz (core learning with listening mode, filters items by difficulty level), Browse (grid/list views with per-item audio, filters by level, shows filtered counts), Settings (language selector, difficulty level radio buttons, audio toggle), History (per-language session statistics).

**PWA**: Service worker uses Workbox with precaching for app shell and stale-while-revalidate for images (max 50 cached entries). iOS meta tags in public/index.html enable full-screen installable behavior.

## Key Conventions

- Mobile-first CSS with minimum 20px font sizes to prevent iOS auto-zoom
- Create React App baseline (react-scripts)—no custom webpack or ESLint config
- New languages go in `src/languages/` following `language-data.md` spec, then register in `src/languages/index.js`
- Content items in language files use `{ native, romanization, english }` structure (no `type` or `level`)
- Difficulty levels are non-cumulative: each level shows only its own content
