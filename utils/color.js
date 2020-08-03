const { colors } = require("@primer/primitives");
const Color = require("color");

/*
 * Generate color variant by inverting
 * luminance in the  HSL representation
 */
function getVariant(hex, style) {
  if (style === "dark") {
    const c = Color(hex);
    return c
      .hsl()
      .lightness(100 - c.lightness())
      .hex()
      .toLowerCase();
  } else {
    return hex;
  }
}

function getColors(style) {
  if (style === "dark") {
    /* The array of light to dark colors are reversed to auto-generate dark theme */
    const darkColors = {};
    Object.entries(colors).forEach(([name, val]) => {
      if (name === "black") {
        darkColors.white = val;
      } else if (name === "white") {
        darkColors.black = val;
      } else {
        darkColors[name] = [...val].reverse();
      }
    });
    return darkColors;
  } else {
    return colors;
  }
}

module.exports = {
  getColors,
  getVariant,
};
