const gradients = {
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
};

module.exports = gradients;
