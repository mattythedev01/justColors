const colors = require("colors");

const newEffects = {
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

module.exports = newEffects;
