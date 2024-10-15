#!/usr/bin/env node

const colors = require("colors");

const justColors = {
  // Regular colors
  red: (text) => colors.red(text),
  green: (text) => colors.green(text),
  blue: (text) => colors.blue(text),
  yellow: (text) => colors.yellow(text),
  magenta: (text) => colors.magenta(text),
  cyan: (text) => colors.cyan(text),
  white: (text) => colors.white(text),
  gray: (text) => colors.gray(text),
  black: (text) => colors.black(text),

  // Bright colors
  brightRed: (text) => colors.brightRed(text),
  brightGreen: (text) => colors.brightGreen(text),
  brightBlue: (text) => colors.brightBlue(text),
  brightYellow: (text) => colors.brightYellow(text),
  brightMagenta: (text) => colors.brightMagenta(text),
  brightCyan: (text) => colors.brightCyan(text),
  brightWhite: (text) => colors.brightWhite(text),

  // Background colors
  bgRed: (text) => colors.bgRed(text),
  bgGreen: (text) => colors.bgGreen(text),
  bgBlue: (text) => colors.bgBlue(text),
  bgYellow: (text) => colors.bgYellow(text),
  bgMagenta: (text) => colors.bgMagenta(text),
  bgCyan: (text) => colors.bgCyan(text),
  bgWhite: (text) => colors.bgWhite(text),
  bgBlack: (text) => colors.bgBlack(text),

  // Bright background colors
  bgBrightRed: (text) => colors.bgBrightRed(text),
  bgBrightGreen: (text) => colors.bgBrightGreen(text),
  bgBrightBlue: (text) => colors.bgBrightBlue(text),
  bgBrightYellow: (text) => colors.bgBrightYellow(text),
  bgBrightMagenta: (text) => colors.bgBrightMagenta(text),
  bgBrightCyan: (text) => colors.bgBrightCyan(text),
  bgBrightWhite: (text) => colors.bgBrightWhite(text),

  // Styles
  bold: (text) => colors.bold(text),
  dim: (text) => colors.dim(text),
  italic: (text) => colors.italic(text),
  underline: (text) => colors.underline(text),
  inverse: (text) => colors.inverse(text),
  hidden: (text) => colors.hidden(text),
  strikethrough: (text) => colors.strikethrough(text),

  // Special effects
  rainbow: (text) => colors.rainbow(text),
  zebra: (text) => colors.zebra(text),
  america: (text) => colors.america(text),
  trap: (text) => colors.trap(text),
  random: (text) => colors.random(text),

  // Pastel colors
  pastelRed: (text) => colors.red(colors.dim(text)),
  pastelGreen: (text) => colors.green(colors.dim(text)),
  pastelBlue: (text) => colors.blue(colors.dim(text)),
  pastelYellow: (text) => colors.yellow(colors.dim(text)),
  pastelMagenta: (text) => colors.magenta(colors.dim(text)),
  pastelCyan: (text) => colors.cyan(colors.dim(text)),

  // Additional colors
  orange: (text) => colors.yellow(colors.red(text)),
  purple: (text) => colors.blue(colors.magenta(text)),
  pink: (text) => colors.magenta(colors.white(text)),
  brown: (text) => colors.yellow(colors.red(colors.dim(text))),
  teal: (text) => colors.green(colors.blue(text)),
  navy: (text) => colors.blue(colors.dim(text)),
  maroon: (text) => colors.red(colors.dim(text)),
  olive: (text) => colors.green(colors.yellow(colors.dim(text))),

  // Additional background colors
  bgOrange: (text) => colors.bgYellow(colors.red(text)),
  bgPurple: (text) => colors.bgBlue(colors.magenta(text)),
  bgPink: (text) => colors.bgMagenta(colors.white(text)),
  bgBrown: (text) => colors.bgYellow(colors.red(colors.dim(text))),
  bgTeal: (text) => colors.bgGreen(colors.blue(text)),
  bgNavy: (text) => colors.bgBlue(colors.dim(text)),
  bgMaroon: (text) => colors.bgRed(colors.dim(text)),
  bgOlive: (text) => colors.bgGreen(colors.yellow(colors.dim(text))),

  // Additional styles
  blink: (text) => colors.blink(text),
  overline: (text) => `\x1b[53m${text}\x1b[0m`,
  doubleUnderline: (text) => `\x1b[21m${text}\x1b[0m`,

  // Gradient effects
  sunsetGradient: (text) => {
    const chars = text.split("");
    return chars
      .map((char, i) => {
        const hue = Math.floor((i / chars.length) * 60);
        return `\x1b[38;2;${255};${Math.floor(
          255 * (1 - hue / 60)
        )};0m${char}\x1b[0m`;
      })
      .join("");
  },
  oceanGradient: (text) => {
    const chars = text.split("");
    return chars
      .map((char, i) => {
        const hue = Math.floor((i / chars.length) * 60);
        return `\x1b[38;2;0;${Math.floor(
          128 + 127 * (hue / 60)
        )};${255}m${char}\x1b[0m`;
      })
      .join("");
  },

  // Semantic colors
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

module.exports = justColors;
