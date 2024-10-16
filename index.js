#!/usr/bin/env node

const colorModules = [
  "./colors/colors",
  "./colors/styles",
  "./colors/effects",
  "./colors/pastelColors",
  "./colors/additionalColors",
  "./colors/gradient",
  "./colors/semanticColors",
  "./colors/otherColors",
  "./colors/emojiDecor",
  "./colors/newEffects",
];

try {
  const justColors = colorModules.reduce((acc, module) => {
    const imported = require(module);
    return {
      ...acc,
      ...(Array.isArray(imported) ? Object.assign({}, ...imported) : imported),
    };
  }, {});

  justColors.frame = (text) => {
    if (typeof text !== "string") {
      throw new TypeError("Input must be a string");
    }
    const lines = text.split("\n");
    const width = Math.max(...lines.map((line) => line.length));
    const top = `╔${"═".repeat(width + 2)}╗`;
    const bottom = `╚${"═".repeat(width + 2)}╝`;
    const framedLines = lines.map((line) => `║ ${line.padEnd(width)} ║`);
    return [top, ...framedLines, bottom].join("\n");
  };

  justColors.showAllColors = () => {
    console.log("All available colors from colors.js:");
    const colorsModule = require("./colors/colors");
    Object.entries(colorsModule).forEach(([key, value]) => {
      if (typeof value === "function") {
        console.log(`${key}: ${value(key)}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  };

  justColors.additionalColors = () => {
    console.log("Additional colors from additionalColors.js:");
    const additionalColorsModule = require("./colors/additionalColors");
    Object.entries(additionalColorsModule).forEach(([key, value]) => {
      if (typeof value === "function") {
        console.log(`${key}: ${value(key)}`);
      } else if (typeof value === "object" && value !== null) {
        Object.entries(value).forEach(([subKey, subValue]) => {
          if (typeof subValue === "function") {
            console.log(`${key}.${subKey}: ${subValue(subKey)}`);
          } else {
            console.log(`${key}.${subKey}: ${subValue}`);
          }
        });
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  };

  justColors.showEffects = () => {
    console.log("All available effects from effects.js:");
    const effectsModule = require("./colors/effects");
    Object.entries(effectsModule).forEach(([key, value]) => {
      if (typeof value === "function") {
        console.log(`${key}: ${value(key)}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  };

  justColors.showGradients = () => {
    console.log("All available gradients from gradient.js:");
    const gradientModule = require("./colors/gradient");
    Object.entries(gradientModule).forEach(([key, value]) => {
      if (typeof value === "function") {
        console.log(`${key}: ${value(key)}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  };

  justColors.showNewEffects = () => {
    console.log("All available new effects from newEffects.js:");
    const newEffectsModule = require("./colors/newEffects");
    Object.entries(newEffectsModule).forEach(([key, value]) => {
      if (typeof value === "function") {
        console.log(`${key}: ${value(key)}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  };

  justColors.showOtherColors = () => {
    console.log("All available other colors from otherColors.js:");
    const otherColorsModule = require("./colors/otherColors");
    Object.entries(otherColorsModule).forEach(([key, value]) => {
      if (typeof value === "function") {
        console.log(`${key}: ${value(key)}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  };

  justColors.showPastelColors = () => {
    console.log("All available pastel colors from pastelColors.js:");
    const pastelColorsModule = require("./colors/pastelColors");
    Object.entries(pastelColorsModule).forEach(([key, value]) => {
      if (typeof value === "function") {
        console.log(`${key}: ${value(key)}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  };

  justColors.showSemanticColors = () => {
    console.log("All available semantic colors from semanticColors.js:");
    const semanticColorsModule = require("./colors/semanticColors");
    Object.entries(semanticColorsModule).forEach(([key, value]) => {
      if (typeof value === "function") {
        console.log(`${key}: ${value(key)}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  };

  justColors.showStyles = () => {
    console.log("All available styles from styles.js:");
    const stylesModule = require("./colors/styles");
    Object.entries(stylesModule).forEach(([key, value]) => {
      if (typeof value === "function") {
        console.log(`${key}: ${value(key)}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  };

  justColors.showEmojiDecor = () => {
    console.log("All available emoji decorations from emojiDecor.js:");
    const emojiDecorModule = require("./colors/emojiDecor");
    Object.entries(emojiDecorModule).forEach(([key, value]) => {
      if (typeof value === "function") {
        console.log(`${key}: ${value(key)}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  };

  const justColorsProxy = new Proxy(justColors, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      justColors.showAllColors();
      return undefined;
    },
  });

  module.exports = new Proxy(justColorsProxy, {
    apply(target, thisArg, argumentsList) {
      justColors.showAllColors();
      return undefined;
    },
  });
} catch (error) {
  console.error("Error initializing justColors:", error.message);
  module.exports = {};
}
