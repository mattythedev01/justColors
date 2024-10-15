const colors = require("colors");

const specialEffects = {
  rainbow: (text) => colors.rainbow(text),
  zebra: (text) => colors.zebra(text),
  america: (text) => colors.america(text),
  trap: (text) => colors.trap(text),
  random: (text) => colors.random(text),
};

module.exports = specialEffects;
