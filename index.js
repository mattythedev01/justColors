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
  // Regular colors and background colors
  ...colorFunctions,

  // Styles
  ...styleFunctions,
  ...additionalStyles,

  // Special effects
  ...specialEffects,

  // Pastel colors
  ...pastelColors,

  // Additional colors and background colors
  ...additionalColors,
  ...additionalBackgroundColors,

  // Gradient effects
  ...gradients,

  // Semantic colors
  ...semanticColors,

  // Neon colors
  ...neonColors,

  // Metallic colors
  ...metallicColors,

  // Color combinations
  ...colorCombinations,

  // Emoji decorations
  ...emojiDecorations,

  // New effects
  ...newEffects,

  // Text decorations
  frame: (text) => {
    const lines = text.split("\n");
    const width = Math.max(...lines.map((line) => line.length));
    const top = "╔" + "═".repeat(width + 2) + "╗";
    const bottom = "╚" + "═".repeat(width + 2) + "╝";
    const framedLines = lines.map((line) => "║ " + line.padEnd(width) + " ║");
    return [top, ...framedLines, bottom].join("\n");
  },
};

module.exports = justColors;
