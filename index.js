#!/usr/bin/env node

const colorFunctions = require("./colors/colors");
const { styleFunctions, additionalStyles } = require("./colors/styles");
const specialEffects = require("./colors/effects");
const pastelColors = require("./colors/pastelColors");
const {
  additionalColors,
  additionalBackgroundColors,
} = require("./colors/additionalColors");
const gradients = require("./colors/gradient");
const semanticColors = require("./colors/semanticColors");
const {
  neonColors,
  metallicColors,
  colorCombinations,
} = require("./colors/otherColors");
const emojiDecorations = require("./colors/emojiDecor");
const newEffects = require("./colors/newEffects");

const justColors = {
  // Regular colors
  red: colorFunctions.red,
  green: colorFunctions.green,
  blue: colorFunctions.blue,
  yellow: colorFunctions.yellow,
  magenta: colorFunctions.magenta,
  cyan: colorFunctions.cyan,
  white: colorFunctions.white,
  gray: colorFunctions.gray,
  black: colorFunctions.black,
  orange: colorFunctions.orange,
  purple: colorFunctions.purple,
  pink: colorFunctions.pink,
  brown: colorFunctions.brown,
  navy: colorFunctions.navy,
  teal: colorFunctions.teal,
  maroon: colorFunctions.maroon,
  olive: colorFunctions.olive,
  lime: colorFunctions.lime,
  coral: colorFunctions.coral,
  salmon: colorFunctions.salmon,
  gold: colorFunctions.gold,
  indigo: colorFunctions.indigo,
  turquoise: colorFunctions.turquoise,
  violet: colorFunctions.violet,
  plum: colorFunctions.plum,
  khaki: colorFunctions.khaki,
  crimson: colorFunctions.crimson,
  orchid: colorFunctions.orchid,
  sienna: colorFunctions.sienna,
  tan: colorFunctions.tan,
  chocolate: colorFunctions.chocolate,
  peru: colorFunctions.peru,
  indianRed: colorFunctions.indianRed,
  darkGreen: colorFunctions.darkGreen,
  darkBlue: colorFunctions.darkBlue,
  darkRed: colorFunctions.darkRed,
  darkCyan: colorFunctions.darkCyan,
  darkMagenta: colorFunctions.darkMagenta,
  darkOrange: colorFunctions.darkOrange,
  darkViolet: colorFunctions.darkViolet,
  darkGray: colorFunctions.darkGray,
  lightGray: colorFunctions.lightGray,
  lightGreen: colorFunctions.lightGreen,
  lightBlue: colorFunctions.lightBlue,
  lightPink: colorFunctions.lightPink,
  lightSalmon: colorFunctions.lightSalmon,
  lightCoral: colorFunctions.lightCoral,
  lightSkyBlue: colorFunctions.lightSkyBlue,

  // Bright colors
  brightRed: colorFunctions.brightRed,
  brightGreen: colorFunctions.brightGreen,
  brightBlue: colorFunctions.brightBlue,
  brightYellow: colorFunctions.brightYellow,
  brightMagenta: colorFunctions.brightMagenta,
  brightCyan: colorFunctions.brightCyan,
  brightWhite: colorFunctions.brightWhite,

  // Background colors
  bgRed: colorFunctions.bgRed,
  bgGreen: colorFunctions.bgGreen,
  bgBlue: colorFunctions.bgBlue,
  bgYellow: colorFunctions.bgYellow,
  bgMagenta: colorFunctions.bgMagenta,
  bgCyan: colorFunctions.bgCyan,
  bgWhite: colorFunctions.bgWhite,
  bgBlack: colorFunctions.bgBlack,

  // Bright background colors
  bgBrightRed: colorFunctions.bgBrightRed,
  bgBrightGreen: colorFunctions.bgBrightGreen,
  bgBrightBlue: colorFunctions.bgBrightBlue,
  bgBrightYellow: colorFunctions.bgBrightYellow,
  bgBrightMagenta: colorFunctions.bgBrightMagenta,
  bgBrightCyan: colorFunctions.bgBrightCyan,
  bgBrightWhite: colorFunctions.bgBrightWhite,

  // Styles
  ...styleFunctions,

  // Special effects
  rainbow: specialEffects.rainbow,
  zebra: specialEffects.zebra,
  america: specialEffects.america,
  trap: specialEffects.trap,
  random: specialEffects.random,

  // Pastel colors
  pastelRed: pastelColors.pastelRed,
  pastelGreen: pastelColors.pastelGreen,
  pastelBlue: pastelColors.pastelBlue,
  pastelYellow: pastelColors.pastelYellow,
  pastelMagenta: pastelColors.pastelMagenta,
  pastelCyan: pastelColors.pastelCyan,

  // Additional colors
  ...additionalColors,

  // Additional background colors
  ...additionalBackgroundColors,

  // Additional styles
  ...additionalStyles,

  // Gradient effects
  sunsetGradient: gradients.sunsetGradient,
  oceanGradient: gradients.oceanGradient,

  // Semantic colors
  ...semanticColors,

  // Additional gradient effects
  forestGradient: gradients.forestGradient,
  lavenderGradient: gradients.lavenderGradient,

  // Neon colors
  ...neonColors,

  // Metallic colors
  ...metallicColors,

  // Color combinations
  ...colorCombinations,

  // Text decorations
  frame: (text) => {
    const lines = text.split("\n");
    const width = Math.max(...lines.map((line) => line.length));
    const top = "╔" + "═".repeat(width + 2) + "╗";
    const bottom = "╚" + "═".repeat(width + 2) + "╝";
    const framedLines = lines.map((line) => "║ " + line.padEnd(width) + " ║");
    return [top, ...framedLines, bottom].join("\n");
  },

  // Emoji decorations
  ...emojiDecorations,

  // New effects
  ...newEffects,
};

module.exports = justColors;
