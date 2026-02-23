#!/usr/bin/env node

/**
 * Quick summary of item counts across all language files.
 *
 * Usage:
 *   node scripts/count-items.js
 *
 * Prints a table showing item counts per category and level for each language.
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES_DIR = path.join(__dirname, '..', 'src', 'languages');

function countItems(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let currentArray = null;
  const counts = {};

  for (const line of lines) {
    const match = line.match(/^const (\w+) = \[/);
    if (match) {
      currentArray = match[1];
      counts[currentArray] = 0;
    }
    if (currentArray && line.includes('{ native:')) {
      counts[currentArray]++;
    }
    if (currentArray && line.match(/^\];/)) {
      currentArray = null;
    }
  }
  return counts;
}

// --- Main ---
const files = fs.readdirSync(LANGUAGES_DIR)
  .filter(f => f.endsWith('.js') && f !== 'index.js')
  .sort();

for (const file of files) {
  const lang = file.replace('.js', '');
  const counts = countItems(path.join(LANGUAGES_DIR, file));
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  console.log(`\n${lang} (${total} total):`);
  for (const [name, count] of Object.entries(counts)) {
    console.log(`  ${name}: ${count}`);
  }
}
console.log('');
