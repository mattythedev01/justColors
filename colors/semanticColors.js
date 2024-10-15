const colors = require("colors");

// Semantic colors
const semanticColors = {
  success: (text) => colors.green(text),
  error: (text) => colors.red(text),
  warning: (text) => colors.yellow(text),
  info: (text) => colors.blue(text),
  debug: (text) => colors.magenta(text),

  // Background semantic colors
  bgSuccess: (text) => colors.bgGreen(colors.black(text)),
  bgError: (text) => colors.bgRed(colors.white(text)),
  bgWarning: (text) => colors.bgYellow(colors.black(text)),
  bgInfo: (text) => colors.bgBlue(colors.white(text)),
  bgDebug: (text) => colors.bgMagenta(colors.white(text)),
};

module.exports = semanticColors;
