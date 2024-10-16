const colors = require("colors");

// Semantic colors
const semanticColors = {
  success: (text) => colors.green(text),
  error: (text) => colors.red(text),
  warning: (text) => colors.yellow(text),
  info: (text) => colors.blue(text),
  debug: (text) => colors.magenta(text),
  primary: (text) => colors.cyan(text),
  secondary: (text) => colors.gray(text),
  highlight: (text) => colors.brightYellow(text),
  muted: (text) => colors.dim(text),

  // Background semantic colors
  bgSuccess: (text) => colors.bgGreen(colors.black(text)),
  bgError: (text) => colors.bgRed(colors.white(text)),
  bgWarning: (text) => colors.bgYellow(colors.black(text)),
  bgInfo: (text) => colors.bgBlue(colors.white(text)),
  bgDebug: (text) => colors.bgMagenta(colors.white(text)),
  bgPrimary: (text) => colors.bgCyan(colors.black(text)),
  bgSecondary: (text) => colors.bgGray(colors.white(text)),
  bgHighlight: (text) => colors.bgBrightYellow(colors.black(text)),
  bgMuted: (text) => colors.bgWhite(colors.gray(text)),

  // Combination semantic colors
  successBold: (text) => colors.green(colors.bold(text)),
  errorUnderline: (text) => colors.red(colors.underline(text)),
  warningItalic: (text) => colors.yellow(colors.italic(text)),
  infoInverse: (text) => colors.blue(colors.inverse(text)),
  debugStrikethrough: (text) => colors.magenta(colors.strikethrough(text)),
};

module.exports = semanticColors;
