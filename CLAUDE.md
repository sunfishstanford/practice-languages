# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Practice Languages is a React PWA for learning Japanese (hiragana, katakana, phrases, vocabulary) through interactive quizzes. It runs entirely client-side with localStorage persistence—no backend. Optimized for mobile/iOS with offline support via Workbox service workers. Deployed to GitHub Pages at freeenergy.blog/practice-languages.

## Commands

- `npm start` — Dev server at localhost:3000
- `npm test` — Jest tests (Create React App defaults)
- `npm run build` — Production build to `/build`
- `npm run deploy` — Build and deploy to GitHub Pages via gh-pages

## Architecture

**State & Data Flow**: App.js is the top-level router managing `currentPage` and `settings` state. No routing library—pages are swapped via conditional rendering. All persistence uses localStorage with three keys: `quizSettings`, `quizHistory`, `incorrectQuestions`.

**Quiz Logic** (Quiz.js): 40% of questions drawn from previously incorrect items, 60% random. Direction (JP→EN or EN→JP) is randomized 50/50. Four multiple-choice options per question with immediate feedback.

**Data** (data.js): All content lives in a single 38KB file. Each item follows `{ japanese, romaji, english, type }` format. Content types: hiragana (46), katakana (46), phrases (40+), vocabulary.

**Components**: Quiz (core learning), Browse (kana tables + phrase/vocab lists), Settings (preferences + data reset), History (session statistics).

**PWA**: Service worker uses Workbox with precaching for app shell and stale-while-revalidate for images (max 50 cached entries). iOS meta tags in public/index.html enable full-screen installable behavior.

## Key Conventions

- Mobile-first CSS with minimum 20px font sizes to prevent iOS auto-zoom
- Create React App baseline (react-scripts)—no custom webpack or ESLint config
- Content additions go in `src/data.js` following existing `{ japanese, romaji, english, type }` structure
