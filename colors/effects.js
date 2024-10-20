const colors = require("colors");

const specialEffects = {
  rainbow: (text) => colors.rainbow(text),
  zebra: (text) => colors.zebra(text),
  america: (text) => colors.america(text),
  trap: (text) => colors.trap(text),
  random: (text) => colors.random(text),
  neon: (text) => colors.brightGreen(text),
  fire: (text) => colors.brightRed(colors.bold(text)),
  ice: (text) => colors.brightCyan(colors.italic(text)),
  matrix: (text) => colors.green(colors.bgBlack(text)),
  underwater: (text) => colors.blue(colors.dim(text)),
  sunset: (text) => colors.yellow(colors.bgRed(text)),
  alien: (text) => colors.brightGreen(colors.inverse(text)),
  retro: (text) => colors.yellow(colors.bgBlue(text)),
  glitch: (text) => colors.random(colors.strikethrough(text)),
  pastel: (text) => colors.magenta(colors.dim(text)),
};

module.exports = specialEffects;
