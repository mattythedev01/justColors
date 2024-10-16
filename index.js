#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

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
    try {
      const imported = require(module);
      return {
        ...acc,
        ...(Array.isArray(imported)
          ? Object.assign({}, ...imported)
          : imported),
      };
    } catch (error) {
      console.warn(`Failed to load module ${module}: ${error.message}`);
      return acc;
    }
  }, {});

  const {
    neonColors,
    metallicColors,
    colorCombinations,
  } = require("./colors/otherColors");

  const stylesFunctions = require("./colors/styles");

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

  const showColors = (modulePath, title) => {
    console.log(title);
    try {
      const module = require(modulePath);
      Object.entries(module).forEach(([key, value]) => {
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
    } catch (error) {
      console.error(
        `Failed to show colors from ${modulePath}: ${error.message}`
      );
    }
  };

  justColors.showAllColors = () =>
    showColors("./colors/colors", "All available colors from colors.js:");
  justColors.additionalColors = () =>
    showColors(
      "./colors/additionalColors",
      "Additional colors from additionalColors.js:"
    );
  justColors.showEffects = () =>
    showColors("./colors/effects", "All available effects from effects.js:");
  justColors.showGradients = () =>
    showColors(
      "./colors/gradient",
      "All available gradients from gradient.js:"
    );
  justColors.showNewEffects = () =>
    showColors(
      "./colors/newEffects",
      "All available new effects from newEffects.js:"
    );
  justColors.showOtherColors = () =>
    showColors(
      "./colors/otherColors",
      "All available other colors from otherColors.js:"
    );
  justColors.showPastelColors = () =>
    showColors(
      "./colors/pastelColors",
      "All available pastel colors from pastelColors.js:"
    );
  justColors.showSemanticColors = () =>
    showColors(
      "./colors/semanticColors",
      "All available semantic colors from semanticColors.js:"
    );
  justColors.showStyles = () =>
    showColors("./colors/styles", "All available styles from styles.js:");
  justColors.showEmojiDecor = () =>
    showColors(
      "./colors/emojiDecor",
      "All available emoji decorations from emojiDecor.js:"
    );

  const justColorsProxy = new Proxy(justColors, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      justColors.showAllColors();
      return undefined;
    },
  });

  module.exports = new Proxy(
    {
      ...justColorsProxy,
      ...neonColors,
      ...metallicColors,
      ...colorCombinations,
      ...stylesFunctions,
    },
    {
      get(target, prop) {
        if (prop in target) {
          const value = target[prop];
          if (typeof value === "function") {
            return (...args) => value(...args);
          }
          return value;
        }
        justColors.showAllColors();
        return undefined;
      },
      apply(target, thisArg, argumentsList) {
        justColors.showAllColors();
        return undefined;
      },
    }
  );
} catch (error) {
  console.error("Error initializing justColors:", error.message);
  module.exports = {};
}
