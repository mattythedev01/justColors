const colors = require("colors");

const pastelColors = {
  pastelRed: (text) => colors.red(colors.dim(text)),
  pastelGreen: (text) => colors.green(colors.dim(text)),
  pastelBlue: (text) => colors.blue(colors.dim(text)),
  pastelYellow: (text) => colors.yellow(colors.dim(text)),
  pastelMagenta: (text) => colors.magenta(colors.dim(text)),
  pastelCyan: (text) => colors.cyan(colors.dim(text)),
};

module.exports = pastelColors;
