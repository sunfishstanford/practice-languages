# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Practice Languages is a React PWA for learning multiple languages (Japanese, Chinese, and extensible) through interactive quizzes with text-to-speech support. It runs entirely client-side with localStorage persistence—no backend. Optimized for mobile/iOS with offline support via Workbox service workers. Deployed to GitHub Pages at freeenergy.blog/practice-languages.

## Commands

- `npm start` — Dev server at localhost:3000
- `npm test` — Jest tests (Create React App defaults)
- `npm run build` — Production build to `/build`
- `npm run deploy` — Build and deploy to GitHub Pages via gh-pages

## Architecture

**Language Plugin System**: Each language is a self-contained file in `src/languages/` exporting a config object with `id`, `name`, `speechLang`, `hasRomanization`, `romanizationLabel`, and `categories[]`. The registry in `src/languages/index.js` exports `languageList`, `getLanguage(id)`, and `defaultLanguageId`.

**Data Schema**: Each data item follows `{ native, romanization, english, type }` format. Categories define `renderMode` (`grid` or `list`) and grid categories include a `gridRows(items)` function for row layout.

**State & Data Flow**: App.js manages `currentPage`, `activeLanguageId`, `language` object, and `settings` state. No routing library—pages are swapped via conditional rendering.

**Storage** (`src/storage.js`): Per-language namespaced localStorage with key format `{languageId}:{key}`. Includes migration from old un-namespaced keys to `japanese:*` prefix.

**Settings Shape**: `{ questionsPerSession, showRomanization, includeListening, enabledCategories: { [catId]: boolean } }`.

**Quiz Logic** (Quiz.js): 40% of questions drawn from previously incorrect items, 60% random. Three question directions: native→english, english→native, and listening (TTS). Four multiple-choice options per question with immediate feedback.

**Audio** (`src/audio.js`): Web Speech API wrapper for text-to-speech. `speak(text, lang)` returns a Promise. Works offline with OS-level voices.

**Components**: Quiz (core learning with listening mode), Browse (grid/list views with per-item audio), Settings (language selector, dynamic category checkboxes, audio toggle), History (per-language session statistics).

**PWA**: Service worker uses Workbox with precaching for app shell and stale-while-revalidate for images (max 50 cached entries). iOS meta tags in public/index.html enable full-screen installable behavior.

## Key Conventions

- Mobile-first CSS with minimum 20px font sizes to prevent iOS auto-zoom
- Create React App baseline (react-scripts)—no custom webpack or ESLint config
- New languages go in `src/languages/` following existing schema, then register in `src/languages/index.js`
- Content items use `{ native, romanization, english, type }` structure
