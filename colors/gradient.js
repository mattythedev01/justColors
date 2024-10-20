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
  rainbowGradient: (text) => {
    const chars = text.split("");
    return chars
      .map((char, i) => {
        const hue = Math.floor((i / chars.length) * 360);
        return `\x1b[38;2;${Math.floor(
          255 * Math.sin((hue * Math.PI) / 180)
        )};${Math.floor(
          255 * Math.sin(((hue + 120) * Math.PI) / 180)
        )};${Math.floor(
          255 * Math.sin(((hue + 240) * Math.PI) / 180)
        )}m${char}\x1b[0m`;
      })
      .join("");
  },
  fireGradient: (text) => {
    const chars = text.split("");
    return chars
      .map((char, i) => {
        const hue = Math.floor((i / chars.length) * 60);
        return `\x1b[38;2;${255};${Math.floor(
          255 * (1 - hue / 60)
        )};${Math.floor((255 * (1 - hue / 60)) / 2)}m${char}\x1b[0m`;
      })
      .join("");
  },
  iceGradient: (text) => {
    const chars = text.split("");
    return chars
      .map((char, i) => {
        const hue = Math.floor((i / chars.length) * 60);
        return `\x1b[38;2;${Math.floor(200 + 55 * (hue / 60))};${Math.floor(
          200 + 55 * (hue / 60)
        )};${255}m${char}\x1b[0m`;
      })
      .join("");
  },
  neonGradient: (text) => {
    const chars = text.split("");
    return chars
      .map((char, i) => {
        const hue = Math.floor((i / chars.length) * 360);
        return `\x1b[38;2;${Math.floor(
          127 + 128 * Math.sin((hue * Math.PI) / 180)
        )};${Math.floor(
          127 + 128 * Math.sin(((hue + 120) * Math.PI) / 180)
        )};${Math.floor(
          127 + 128 * Math.sin(((hue + 240) * Math.PI) / 180)
        )}m${char}\x1b[0m`;
      })
      .join("");
  },
};

module.exports = gradients;
