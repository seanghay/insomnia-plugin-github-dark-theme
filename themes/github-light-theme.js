const { getColors, getVariant } = require("../utils/color");

const style = "light";
const auto = (hex) => getVariant(hex, style);
const pick = (options) => options[style];
const primer = getColors(style);

module.exports = {
  name: "github-light-theme",
  displayName: "Github Light",
  theme: {
    foreground: {
      default: pick({ light: primer.gray[6] }),
    },
    background: {
      default: pick({ light: primer.white }),
      success: pick({ light: primer.blue[5] }),
      notice: pick({ light: primer.orange[6] }),
      warning: pick({ light: primer.orange[7] }),
      danger: pick({ light: primer.red[7] }),
      surprise: pick({ light: primer.red[5] }),
      info: pick({ light: primer.blue[7] }),
    },
    styles: {
      sidebar: {
        background: {
          default: pick({ light: primer.gray[1] }),
        },
        foreground: {
          default: pick({ light: primer.gray[8] }),
        },
        highlight: {
          default: pick({ light: primer.gray[5] }),
        },
      },
      transparentOverlay: {
        background: {
          default: "rgba(240, 240, 240, 0.4)",
        },
        foreground: {
          default: "#555",
        },
      },
      paneHeader: {
        background: {
          default: pick({ light: primer.gray[1] }),
          success: pick({ light: primer.blue[5] })
        },
      },  
    },
  },
};
