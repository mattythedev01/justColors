const colors = require("colors");

const additionalColors = {
  orange: (text) => colors.yellow(colors.red(text)),
  purple: (text) => colors.blue(colors.magenta(text)),
  pink: (text) => colors.magenta(colors.white(text)),
  brown: (text) => colors.yellow(colors.red(colors.dim(text))),
  teal: (text) => colors.green(colors.blue(text)),
  navy: (text) => colors.blue(colors.dim(text)),
  maroon: (text) => colors.red(colors.dim(text)),
  olive: (text) => colors.green(colors.yellow(colors.dim(text))),
};

const additionalBackgroundColors = {
  bgOrange: (text) => colors.bgYellow(colors.red(text)),
  bgPurple: (text) => colors.bgBlue(colors.magenta(text)),
  bgPink: (text) => colors.bgMagenta(colors.white(text)),
  bgBrown: (text) => colors.bgYellow(colors.red(colors.dim(text))),
  bgTeal: (text) => colors.bgGreen(colors.blue(text)),
  bgNavy: (text) => colors.bgBlue(colors.dim(text)),
  bgMaroon: (text) => colors.bgRed(colors.dim(text)),
  bgOlive: (text) => colors.bgGreen(colors.yellow(colors.dim(text))),
};

module.exports = { additionalColors, additionalBackgroundColors };
