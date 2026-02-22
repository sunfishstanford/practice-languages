import japanese from './japanese';
import chinese from './chinese';
import dutch from './dutch';

function defaultGridRows(items) {
  const rows = [];
  for (let i = 0; i < items.length; i += 5) {
    rows.push(items.slice(i, i + 5));
  }
  return rows;
}

function processLanguage(raw) {
  return {
    ...raw,
    categories: raw.categories.map(cat => {
      const data = [];
      for (const [level, items] of Object.entries(cat.levels)) {
        for (const item of items) {
          data.push({ ...item, level, categoryId: cat.id });
        }
      }
      return {
        ...cat,
        data,
        gridRows: cat.gridRows || (cat.renderMode === 'grid' ? defaultGridRows : undefined),
      };
    }),
  };
}

export const languageList = [japanese, chinese, dutch].map(processLanguage);

export const defaultLanguageId = 'japanese';

export function getLanguage(id) {
  return languageList.find(lang => lang.id === id) || languageList[0];
}
