// Q4 Merge Config using spread
function mergeConfig(defaultConfig, userConfig) {
  return { ...defaultConfig, ...userConfig };
}
const defaultConfig = { dark: false, lang: "en" };
const userConfig = { dark: true };

console.log(mergeConfig(defaultConfig, userConfig))
