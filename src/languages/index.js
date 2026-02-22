import japanese from './japanese';
import chinese from './chinese';

export const languageList = [japanese, chinese];

export const defaultLanguageId = 'japanese';

export function getLanguage(id) {
  return languageList.find(lang => lang.id === id) || languageList[0];
}
