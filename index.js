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
  orange: (text) => `\x1b[38;2;255;165;0m${text}\x1b[0m`,
  purple: (text) => `\x1b[38;2;128;0;128m${text}\x1b[0m`,
  pink: (text) => `\x1b[38;2;255;192;203m${text}\x1b[0m`,
  brown: (text) => `\x1b[38;2;165;42;42m${text}\x1b[0m`,
  navy: (text) => `\x1b[38;2;0;0;128m${text}\x1b[0m`,
  teal: (text) => `\x1b[38;2;0;128;128m${text}\x1b[0m`,
  maroon: (text) => `\x1b[38;2;128;0;0m${text}\x1b[0m`,
  olive: (text) => `\x1b[38;2;128;128;0m${text}\x1b[0m`,
  lime: (text) => `\x1b[38;2;0;255;0m${text}\x1b[0m`,
  coral: (text) => `\x1b[38;2;255;127;80m${text}\x1b[0m`,
  salmon: (text) => `\x1b[38;2;250;128;114m${text}\x1b[0m`,
  gold: (text) => `\x1b[38;2;255;215;0m${text}\x1b[0m`,
  indigo: (text) => `\x1b[38;2;75;0;130m${text}\x1b[0m`,
  turquoise: (text) => `\x1b[38;2;64;224;208m${text}\x1b[0m`,
  violet: (text) => `\x1b[38;2;238;130;238m${text}\x1b[0m`,
  plum: (text) => `\x1b[38;2;221;160;221m${text}\x1b[0m`,
  khaki: (text) => `\x1b[38;2;240;230;140m${text}\x1b[0m`,
  crimson: (text) => `\x1b[38;2;220;20;60m${text}\x1b[0m`,
  orchid: (text) => `\x1b[38;2;218;112;214m${text}\x1b[0m`,
  sienna: (text) => `\x1b[38;2;160;82;45m${text}\x1b[0m`,
  tan: (text) => `\x1b[38;2;210;180;140m${text}\x1b[0m`,
  chocolate: (text) => `\x1b[38;2;210;105;30m${text}\x1b[0m`,
  peru: (text) => `\x1b[38;2;205;133;63m${text}\x1b[0m`,
  indianRed: (text) => `\x1b[38;2;205;92;92m${text}\x1b[0m`,
  darkGreen: (text) => `\x1b[38;2;0;100;0m${text}\x1b[0m`,
  darkBlue: (text) => `\x1b[38;2;0;0;139m${text}\x1b[0m`,
  darkRed: (text) => `\x1b[38;2;139;0;0m${text}\x1b[0m`,
  darkCyan: (text) => `\x1b[38;2;0;139;139m${text}\x1b[0m`,
  darkMagenta: (text) => `\x1b[38;2;139;0;139m${text}\x1b[0m`,
  darkOrange: (text) => `\x1b[38;2;255;140;0m${text}\x1b[0m`,
  darkViolet: (text) => `\x1b[38;2;148;0;211m${text}\x1b[0m`,
  darkGray: (text) => `\x1b[38;2;169;169;169m${text}\x1b[0m`,
  lightGray: (text) => `\x1b[38;2;211;211;211m${text}\x1b[0m`,
  lightGreen: (text) => `\x1b[38;2;144;238;144m${text}\x1b[0m`,
  lightBlue: (text) => `\x1b[38;2;173;216;230m${text}\x1b[0m`,
  lightPink: (text) => `\x1b[38;2;255;182;193m${text}\x1b[0m`,
  lightSalmon: (text) => `\x1b[38;2;255;160;122m${text}\x1b[0m`,
  lightCoral: (text) => `\x1b[38;2;240;128;128m${text}\x1b[0m`,
  lightSkyBlue: (text) => `\x1b[38;2;135;206;250m${text}\x1b[0m`,

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

  // Additional gradient effects
  forestGradient: (text) => {
    const chars = text.split("");
    return chars
      .map((char, i) => {
        const hue = Math.floor((i / chars.length) * 60);
        return `\x1b[38;2;${Math.floor(34 + 221 * (hue / 60))};${Math.floor(
          139 + 116 * (1 - hue / 60)
        )};34m${char}\x1b[0m`;
      })
      .join("");
  },
  lavenderGradient: (text) => {
    const chars = text.split("");
    return chars
      .map((char, i) => {
        const hue = Math.floor((i / chars.length) * 60);
        return `\x1b[38;2;${Math.floor(230 - 70 * (hue / 60))};${Math.floor(
          230 - 190 * (hue / 60)
        )};${250}m${char}\x1b[0m`;
      })
      .join("");
  },

  // Neon colors
  neonGreen: (text) => `\x1b[38;2;57;255;20m${text}\x1b[0m`,
  neonPink: (text) => `\x1b[38;2;255;20;147m${text}\x1b[0m`,
  neonBlue: (text) => `\x1b[38;2;31;81;255m${text}\x1b[0m`,
  neonOrange: (text) => `\x1b[38;2;255;159;0m${text}\x1b[0m`,
  neonYellow: (text) => `\x1b[38;2;255;255;0m${text}\x1b[0m`,
  neonPurple: (text) => `\x1b[38;2;177;0;255m${text}\x1b[0m`,
  neonCyan: (text) => `\x1b[38;2;0;255;255m${text}\x1b[0m`,
  neonRed: (text) => `\x1b[38;2;255;0;0m${text}\x1b[0m`,
  neonLime: (text) => `\x1b[38;2;0;255;0m${text}\x1b[0m`,
  neonMagenta: (text) => `\x1b[38;2;255;0;255m${text}\x1b[0m`,
  neonTurquoise: (text) => `\x1b[38;2;0;255;204m${text}\x1b[0m`,
  neonSkyBlue: (text) => `\x1b[38;2;0;191;255m${text}\x1b[0m`,
  neonHotPink: (text) => `\x1b[38;2;255;105;180m${text}\x1b[0m`,
  neonGold: (text) => `\x1b[38;2;255;215;0m${text}\x1b[0m`,
  neonLavender: (text) => `\x1b[38;2;230;230;250m${text}\x1b[0m`,
  neonMint: (text) => `\x1b[38;2;189;252;201m${text}\x1b[0m`,
  neonCoral: (text) => `\x1b[38;2;255;127;80m${text}\x1b[0m`,
  neonAqua: (text) => `\x1b[38;2;127;255;212m${text}\x1b[0m`,
  neonFuchsia: (text) => `\x1b[38;2;255;0;128m${text}\x1b[0m`,
  neonSalmon: (text) => `\x1b[38;2;255;160;122m${text}\x1b[0m`,
  neonPeriwinkle: (text) => `\x1b[38;2;204;204;255m${text}\x1b[0m`,
  neonTangerine: (text) => `\x1b[38;2;255;204;0m${text}\x1b[0m`,
  neonElectricBlue: (text) => `\x1b[38;2;125;249;255m${text}\x1b[0m`,
  neonLimeGreen: (text) => `\x1b[38;2;50;205;50m${text}\x1b[0m`,
  neonRaspberry: (text) => `\x1b[38;2;227;11;93m${text}\x1b[0m`,
  neonIndigo: (text) => `\x1b[38;2;75;0;130m${text}\x1b[0m`,
  neonViolet: (text) => `\x1b[38;2;238;130;238m${text}\x1b[0m`,
  neonPeach: (text) => `\x1b[38;2;255;218;185m${text}\x1b[0m`,
  neonTeal: (text) => `\x1b[38;2;0;128;128m${text}\x1b[0m`,
  neonOlive: (text) => `\x1b[38;2;128;128;0m${text}\x1b[0m`,
  neonMaroon: (text) => `\x1b[38;2;128;0;0m${text}\x1b[0m`,
  neonNavy: (text) => `\x1b[38;2;0;0;128m${text}\x1b[0m`,
  neonPlum: (text) => `\x1b[38;2;221;160;221m${text}\x1b[0m`,

  // Metallic colors
  gold: (text) => `\x1b[38;2;255;215;0m${text}\x1b[0m`,
  silver: (text) => `\x1b[38;2;192;192;192m${text}\x1b[0m`,
  bronze: (text) => `\x1b[38;2;205;127;50m${text}\x1b[0m`,
  copper: (text) => `\x1b[38;2;184;115;51m${text}\x1b[0m`,
  brass: (text) => `\x1b[38;2;181;166;66m${text}\x1b[0m`,
  steel: (text) => `\x1b[38;2;138;149;151m${text}\x1b[0m`,
  titanium: (text) => `\x1b[38;2;135;134;129m${text}\x1b[0m`,
  platinum: (text) => `\x1b[38;2;229;228;226m${text}\x1b[0m`,
  pewter: (text) => `\x1b[38;2;132;135;137m${text}\x1b[0m`,
  gunmetal: (text) => `\x1b[38;2;42;52;57m${text}\x1b[0m`,
  chrome: (text) => `\x1b[38;2;220;220;220m${text}\x1b[0m`,
  nickel: (text) => `\x1b[38;2;184;184;184m${text}\x1b[0m`,
  aluminum: (text) => `\x1b[38;2;211;211;211m${text}\x1b[0m`,
  tin: (text) => `\x1b[38;2;210;210;210m${text}\x1b[0m`,
  zinc: (text) => `\x1b[38;2;235;235;235m${text}\x1b[0m`,
  lead: (text) => `\x1b[38;2;159;159;159m${text}\x1b[0m`,
  iron: (text) => `\x1b[38;2;155;155;155m${text}\x1b[0m`,
  cobalt: (text) => `\x1b[38;2;0;71;171m${text}\x1b[0m`,
  mercury: (text) => `\x1b[38;2;230;230;230m${text}\x1b[0m`,
  palladium: (text) => `\x1b[38;2;197;190;183m${text}\x1b[0m`,
  rhodium: (text) => `\x1b[38;2;244;244;244m${text}\x1b[0m`,
  osmium: (text) => `\x1b[38;2;152;152;152m${text}\x1b[0m`,
  iridium: (text) => `\x1b[38;2;233;233;233m${text}\x1b[0m`,
  ruthenium: (text) => `\x1b[38;2;207;207;207m${text}\x1b[0m`,
  rhenium: (text) => `\x1b[38;2;190;190;190m${text}\x1b[0m`,
  tungsten: (text) => `\x1b[38;2;85;85;85m${text}\x1b[0m`,
  molybdenum: (text) => `\x1b[38;2;170;170;170m${text}\x1b[0m`,
  tantalum: (text) => `\x1b[38;2;180;180;180m${text}\x1b[0m`,
  niobium: (text) => `\x1b[38;2;200;200;200m${text}\x1b[0m`,
  zirconium: (text) => `\x1b[38;2;215;215;215m${text}\x1b[0m`,
  vanadium: (text) => `\x1b[38;2;165;165;165m${text}\x1b[0m`,

  // Color combinations
  christmasTheme: (text) => colors.red(colors.bgGreen(text)),

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
