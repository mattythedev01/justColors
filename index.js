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
  starry: (text) => "✨ " + text + " ✨",
  hearty: (text) => "❤️ " + text + " ❤️",
  coder: (text) => "👨‍💻 " + text + " 👩‍💻",
  bug: (text) => "🐛 " + text + " 🐞",
  rocket: (text) => "🚀 " + text + " 🚀",
  robot: (text) => "🤖 " + text + " 🤖",
  laptop: (text) => "💻 " + text + " 💻",
  discord: (text) => "🎮 " + text + " 🎮",

  // New effects
  spinner: (text) => {
    const frames = [
      "|/-\\",
      "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏",
      "⣾⣽⣻⢿⡿⣟⣯⣷",
      "▁▂▃▄▅▆▇█▇▆▅▄▃▂▁",
      "▉▊▋▌▍▎▏▎▍▌▋▊▉",
      "▖▘▝▗",
      "◢◣◤◥",
      "◰◳◲◱",
      "◴◷◶◵",
      "◐◓◑◒",
      "◡◡⊙⊙◠◠",
      "⣷⣯⣟⡿⢿⣻⣽⣾",
    ];

    let frameIndex = 0;
    let charIndex = 0;

    return new Promise((resolve) => {
      const interval = setInterval(() => {
        process.stdout.write("\r" + frames[frameIndex][charIndex] + " " + text);
        charIndex = (charIndex + 1) % frames[frameIndex].length;
        if (charIndex === 0) {
          frameIndex = (frameIndex + 1) % frames.length;
        }
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        process.stdout.write("\r" + " ".repeat(text.length + 2) + "\r");
        resolve(text);
      }, 3000);
    });
  },

  rainbow: (text) => {
    const colors = [
      "\x1b[31m",
      "\x1b[33m",
      "\x1b[32m",
      "\x1b[36m",
      "\x1b[34m",
      "\x1b[35m",
    ];
    return (
      text
        .split("")
        .map((char, i) => colors[i % colors.length] + char)
        .join("") + "\x1b[0m"
    );
  },

  typewriter: (text, speed = 100) => {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          process.stdout.write(text[i]);
          i++;
        } else {
          clearInterval(interval);
          console.log();
          resolve(text);
        }
      }, speed);
    });
  },

  blink: (text, interval = 500) => {
    return new Promise((resolve) => {
      let visible = true;
      const blinkInterval = setInterval(() => {
        if (visible) {
          process.stdout.write("\r" + " ".repeat(text.length));
        } else {
          process.stdout.write("\r" + text);
        }
        visible = !visible;
      }, interval);

      setTimeout(() => {
        clearInterval(blinkInterval);
        process.stdout.write("\r" + text + "\n");
        resolve(text);
      }, 5000);
    });
  },

  gradient: (text, startColor = [255, 0, 0], endColor = [0, 0, 255]) => {
    const steps = text.length;
    return text
      .split("")
      .map((char, i) => {
        const r = Math.round(
          startColor[0] + (endColor[0] - startColor[0]) * (i / steps)
        );
        const g = Math.round(
          startColor[1] + (endColor[1] - startColor[1]) * (i / steps)
        );
        const b = Math.round(
          startColor[2] + (endColor[2] - startColor[2]) * (i / steps)
        );
        return `\x1b[38;2;${r};${g};${b}m${char}\x1b[0m`;
      })
      .join("");
  },
};

module.exports = justColors;
