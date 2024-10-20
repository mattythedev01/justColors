const styles = require("colors");

const stylesFunctions = {
  // Styles
  bold: (text) => styles.bold(text),
  dim: (text) => styles.dim(text),
  italic: (text) => styles.italic(text),
  underline: (text) => styles.underline(text),
  inverse: (text) => styles.inverse(text),
  hidden: (text) => styles.hidden(text),
  strikethrough: (text) => styles.strikethrough(text),
  // Additional styles
  blink: (text) => styles.blink(text),
  overline: (text) => `\x1b[53m${text}\x1b[0m`,
  doubleUnderline: (text) => `\x1b[21m${text}\x1b[0m`,
  // New styles
  fraktur: (text) => `\x1b[20m${text}\x1b[0m`,
  framed: (text) => `\x1b[51m${text}\x1b[0m`,
  encircled: (text) => `\x1b[52m${text}\x1b[0m`,
  superscript: (text) => `\x1b[73m${text}\x1b[0m`,
  subscript: (text) => `\x1b[74m${text}\x1b[0m`,
  rapidBlink: (text) => `\x1b[6m${text}\x1b[0m`,
  reverseVideo: (text) => `\x1b[7m${text}\x1b[0m`,
  conceal: (text) => `\x1b[8m${text}\x1b[0m`,
  crossed: (text) => `\x1b[9m${text}\x1b[0m`,
  primaryFont: (text) => `\x1b[10m${text}\x1b[0m`,
  alternateFont1: (text) => `\x1b[11m${text}\x1b[0m`,
  alternateFont2: (text) => `\x1b[12m${text}\x1b[0m`,
  alternateFont3: (text) => `\x1b[13m${text}\x1b[0m`,
  alternateFont4: (text) => `\x1b[14m${text}\x1b[0m`,
  alternateFont5: (text) => `\x1b[15m${text}\x1b[0m`,
  alternateFont6: (text) => `\x1b[16m${text}\x1b[0m`,
  alternateFont7: (text) => `\x1b[17m${text}\x1b[0m`,
  alternateFont8: (text) => `\x1b[18m${text}\x1b[0m`,
  alternateFont9: (text) => `\x1b[19m${text}\x1b[0m`,
  blackletter: (text) => `\x1b[20m${text}\x1b[0m`,
  doubleStruck: (text) => `\x1b[21m${text}\x1b[0m`,
  proportionalSpacing: (text) => `\x1b[26m${text}\x1b[0m`,
  ideogram: (text) => `\x1b[60m${text}\x1b[0m`,
  ideogramUnderline: (text) => `\x1b[61m${text}\x1b[0m`,
  ideogramDoubleUnderline: (text) => `\x1b[62m${text}\x1b[0m`,
  ideogramOverline: (text) => `\x1b[63m${text}\x1b[0m`,
  ideogramDoubleOverline: (text) => `\x1b[64m${text}\x1b[0m`,
  ideogramStressMarking: (text) => `\x1b[65m${text}\x1b[0m`,
  reveal: (text) => `\x1b[28m${text}\x1b[0m`,
  notItalic: (text) => `\x1b[23m${text}\x1b[0m`,
  notUnderlined: (text) => `\x1b[24m${text}\x1b[0m`,
  notBlinking: (text) => `\x1b[25m${text}\x1b[0m`,
  notReversed: (text) => `\x1b[27m${text}\x1b[0m`,
  notConcealed: (text) => `\x1b[28m${text}\x1b[0m`,
  notStrikethrough: (text) => `\x1b[29m${text}\x1b[0m`,
  notOverlined: (text) => `\x1b[55m${text}\x1b[0m`,
  notIdeogram: (text) => `\x1b[65m${text}\x1b[0m`,
  notDoubleUnderline: (text) => `\x1b[29m${text}\x1b[0m`,
  // Additional new styles
  shadow: (text) => `\x1b[30;1m${text}\x1b[0m`,
  outline: (text) => `\x1b[31;1m${text}\x1b[0m`,
  emboss: (text) => `\x1b[1;30;47m${text}\x1b[0m`,
  engrave: (text) => `\x1b[1;37;40m${text}\x1b[0m`,
  wavyUnderline: (text) => `\x1b[4:3m${text}\x1b[0m`,
  dottedUnderline: (text) => `\x1b[4:4m${text}\x1b[0m`,
  dashedUnderline: (text) => `\x1b[4:5m${text}\x1b[0m`,
  smallCaps: (text) => `\x1b[58;5;2m${text}\x1b[0m`,
  condensed: (text) => `\x1b[57;5;2m${text}\x1b[0m`,
  expanded: (text) => `\x1b[57;5;3m${text}\x1b[0m`,
  raised: (text) => `\x1b[73m${text}\x1b[0m`,
  depressed: (text) => `\x1b[74m${text}\x1b[0m`,
  sparkle: (text) => `\x1b[6;1;38;5;226m${text}\x1b[0m`,
  rainbow: (text) => {
    const colors = [31, 33, 32, 36, 34, 35];
    return (
      text
        .split("")
        .map((char, i) => `\x1b[${colors[i % colors.length]}m${char}`)
        .join("") + "\x1b[0m"
    );
  },
  gradient: (text) => {
    const colors = [196, 202, 208, 214, 220, 226];
    return (
      text
        .split("")
        .map(
          (char, i) =>
            `\x1b[38;5;${
              colors[Math.floor((i / text.length) * colors.length)]
            }m${char}`
        )
        .join("") + "\x1b[0m"
    );
  },
  glitch: (text) => {
    const glitchChars = "!@#$%^&*()_+-={}[]|;:,.<>?";
    return text
      .split("")
      .map((char) =>
        Math.random() < 0.1
          ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
          : char
      )
      .join("");
  },
};

module.exports = { ...stylesFunctions };
