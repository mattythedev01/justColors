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

  glitch: (text, intensity = 3, duration = 3000) => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        const glitchedText = text
          .split("")
          .map((char) => {
            if (Math.random() < intensity / 10) {
              return glitchChars[
                Math.floor(Math.random() * glitchChars.length)
              ];
            }
            return char;
          })
          .join("");
        process.stdout.write("\r" + glitchedText);
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        process.stdout.write("\r" + text + "\n");
        resolve(text);
      }, duration);
    });
  },

  bounce: (text, duration = 3000) => {
    return new Promise((resolve) => {
      let direction = 1;
      let position = 0;
      const maxPosition = process.stdout.columns - text.length - 1;

      const interval = setInterval(() => {
        process.stdout.write("\r" + " ".repeat(position) + text);
        position += direction;
        if (position <= 0 || position >= maxPosition) {
          direction *= -1;
        }
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        process.stdout.write("\r" + text + "\n");
        resolve(text);
      }, duration);
    });
  },

  matrix: (text, duration = 5000) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+[]{}|;:,.<>?";
    const lines = [];
    const height = process.stdout.rows - 1;
    const width = process.stdout.columns;

    return new Promise((resolve) => {
      for (let i = 0; i < width; i++) {
        lines.push({
          pos: Math.floor(Math.random() * height),
          speed: Math.random() * 0.5 + 0.5,
          chars: "",
        });
      }

      const interval = setInterval(() => {
        let output = "";
        for (let i = 0; i < height; i++) {
          for (let j = 0; j < width; j++) {
            if (i === lines[j].pos) {
              output +=
                "\x1b[32m" +
                chars[Math.floor(Math.random() * chars.length)] +
                "\x1b[0m";
            } else if (
              i < lines[j].pos &&
              i >= lines[j].pos - lines[j].chars.length
            ) {
              output +=
                "\x1b[32m" + lines[j].chars[lines[j].pos - i - 1] + "\x1b[0m";
            } else {
              output += " ";
            }
          }
          output += "\n";
        }
        process.stdout.write("\x1b[H" + output);

        lines.forEach((line) => {
          line.pos += line.speed;
          if (line.pos > height + line.chars.length) {
            line.pos = 0;
            line.chars = "";
          }
          if (Math.random() < 0.1) {
            line.chars += chars[Math.floor(Math.random() * chars.length)];
          }
        });
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
        process.stdout.write("\x1b[H\x1b[2J");
        console.log(text);
        resolve(text);
      }, duration);
    });
  },
};

module.exports = newEffects;
