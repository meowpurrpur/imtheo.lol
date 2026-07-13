import colors from "./languageColors.json";
const languageColors = colors as Record<string, string>;

export function getLanguageColor(lang: string) {
  return languageColors[lang] || "#d4cdcd";
}
