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
};

const additionalStyles = {
  blink: (text) => styles.blink(text),
  overline: (text) => `\x1b[53m${text}\x1b[0m`,
  doubleUnderline: (text) => `\x1b[21m${text}\x1b[0m`,
};

module.exports = { ...stylesFunctions, ...additionalStyles };
