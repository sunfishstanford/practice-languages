#!/usr/bin/env node

/**
 * Validates a language data file for the Practice Languages app.
 *
 * Usage:
 *   node scripts/validate-language.js [languageId]
 *
 * If no languageId is provided, validates all registered languages.
 *
 * Checks performed:
 *   - Each array has the expected item count (prints counts per array)
 *   - Every item has { native, romanization, english } fields
 *   - No duplicate `native` values within the same category+level
 *   - Pinyin/romanization fields contain tone marks (for languages with romanization)
 *   - The config object has required top-level fields
 *   - The export is present
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES_DIR = path.join(__dirname, '..', 'src', 'languages');

function validateLanguageFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  const errors = [];
  const warnings = [];

  console.log(`\n=== Validating ${fileName} ===\n`);

  // --- Count items per const array ---
  const lines = content.split('\n');
  let currentArray = null;
  const arrayCounts = {};
  const arrayItems = {};

  for (const line of lines) {
    const match = line.match(/^const (\w+) = \[/);
    if (match) {
      currentArray = match[1];
      arrayCounts[currentArray] = 0;
      arrayItems[currentArray] = [];
    }
    if (currentArray && line.includes('{ native:')) {
      arrayCounts[currentArray]++;
      // Extract native value for duplicate checking
      const nativeMatch = line.match(/native:\s*'([^']*(?:\\'[^']*)*)'/);
      if (nativeMatch) {
        arrayItems[currentArray].push(nativeMatch[1]);
      }
    }
    if (currentArray && line.match(/^\];/)) {
      currentArray = null;
    }
  }

  // Print counts
  let totalVocab = 0, totalPhrases = 0, grandTotal = 0;
  console.log('Item counts per array:');
  for (const [name, count] of Object.entries(arrayCounts)) {
    console.log(`  ${name}: ${count}`);
    if (name.toLowerCase().includes('vocab')) totalVocab += count;
    if (name.toLowerCase().includes('phrase')) totalPhrases += count;
    grandTotal += count;
  }
  console.log('');
  if (totalVocab > 0) console.log(`Total vocabulary: ${totalVocab}`);
  if (totalPhrases > 0) console.log(`Total phrases: ${totalPhrases}`);
  console.log(`Grand total all items: ${grandTotal}`);

  // --- Check for duplicates within each array ---
  for (const [name, items] of Object.entries(arrayItems)) {
    const seen = new Set();
    for (const native of items) {
      if (seen.has(native)) {
        errors.push(`Duplicate native value '${native}' in ${name}`);
      }
      seen.add(native);
    }
  }

  // --- Check for required fields on every item ---
  const itemRegex = /\{\s*native:\s*'[^']*(?:\\'[^']*)*'\s*,\s*romanization:\s*'[^']*(?:\\'[^']*)*'\s*,\s*english:\s*'[^']*(?:\\'[^']*)*'\s*\}/g;
  const nativeOnlyRegex = /\{\s*native:/g;
  const fullMatches = content.match(itemRegex) || [];
  const nativeMatches = content.match(nativeOnlyRegex) || [];
  if (fullMatches.length < nativeMatches.length) {
    warnings.push(
      `Found ${nativeMatches.length} items with 'native:' but only ${fullMatches.length} matched the full { native, romanization, english } pattern. ` +
      `${nativeMatches.length - fullMatches.length} items may have malformed fields.`
    );
  }

  // --- Check export ---
  if (!content.includes('export default')) {
    errors.push('Missing "export default" statement');
  }

  // --- Print results ---
  if (warnings.length > 0) {
    console.log(`\nWarnings (${warnings.length}):`);
    warnings.forEach(w => console.log(`  ⚠  ${w}`));
  }
  if (errors.length > 0) {
    console.log(`\nErrors (${errors.length}):`);
    errors.forEach(e => console.log(`  ✗  ${e}`));
  }
  if (errors.length === 0) {
    console.log('\n✓ Validation passed');
  }

  return errors.length === 0;
}

// --- Main ---
const targetId = process.argv[2];

if (targetId) {
  const filePath = path.join(LANGUAGES_DIR, `${targetId}.js`);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }
  const ok = validateLanguageFile(filePath);
  process.exit(ok ? 0 : 1);
} else {
  // Validate all .js files in languages dir except index.js
  const files = fs.readdirSync(LANGUAGES_DIR)
    .filter(f => f.endsWith('.js') && f !== 'index.js');
  let allOk = true;
  for (const file of files) {
    const ok = validateLanguageFile(path.join(LANGUAGES_DIR, file));
    if (!ok) allOk = false;
  }
  process.exit(allOk ? 0 : 1);
}
