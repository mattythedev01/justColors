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

  const justColorsProxy = new Proxy(justColors, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      console.log("Available colors and effects:");
      Object.keys(target).forEach((key) => console.log(`- ${key}`));
      return undefined;
    },
  });

  module.exports = justColorsProxy;
} catch (error) {
  console.error("Error initializing justColors:", error.message);
  module.exports = {};
}
