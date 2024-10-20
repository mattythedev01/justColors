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

  // Additional semantic colors
  important: (text) => colors.brightRed(text),
  neutral: (text) => colors.white(text),
  positive: (text) => colors.brightGreen(text),
  negative: (text) => colors.brightRed(text),
  accent: (text) => colors.brightCyan(text),
  link: (text) => colors.blue(colors.underline(text)),
  visited: (text) => colors.purple(text),
  active: (text) => colors.brightBlue(text),
  inactive: (text) => colors.gray(text),
  pending: (text) => colors.yellow(text),
  completed: (text) => colors.green(text),
  cancelled: (text) => colors.red(text),
  processing: (text) => colors.cyan(text),
  urgent: (text) => colors.brightRed(colors.bold(text)),
  lowPriority: (text) => colors.gray(colors.dim(text)),
  highPriority: (text) => colors.brightMagenta(colors.bold(text)),
  custom1: (text) => colors.brightGreen(colors.underline(text)),
  custom2: (text) => colors.brightYellow(colors.italic(text)),
  custom3: (text) => colors.brightBlue(colors.inverse(text)),

  // Additional background semantic colors
  bgImportant: (text) => colors.bgBrightRed(colors.white(text)),
  bgNeutral: (text) => colors.bgWhite(colors.black(text)),
  bgPositive: (text) => colors.bgBrightGreen(colors.black(text)),
  bgNegative: (text) => colors.bgBrightRed(colors.white(text)),
  bgAccent: (text) => colors.bgBrightCyan(colors.black(text)),
  bgLink: (text) => colors.bgBlue(colors.white(colors.underline(text))),
  bgVisited: (text) => colors.bgPurple(colors.white(text)),
  bgActive: (text) => colors.bgBrightBlue(colors.white(text)),
  bgInactive: (text) => colors.bgGray(colors.white(text)),
  bgPending: (text) => colors.bgYellow(colors.black(text)),

  // Additional combination semantic colors
  importantBoldItalic: (text) =>
    colors.brightRed(colors.bold(colors.italic(text))),
  neutralUnderlineInverse: (text) =>
    colors.white(colors.underline(colors.inverse(text))),
  positiveStrikethroughBold: (text) =>
    colors.brightGreen(colors.strikethrough(colors.bold(text))),
};

module.exports = semanticColors;
