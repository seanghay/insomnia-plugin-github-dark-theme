const { getColors, getVariant } = require("../utils/color");

const style = "dark";
const auto = (hex) => getVariant(hex, style);
const pick = (options) => options[style];
const primer = getColors(style);

module.exports = {
  name: "github-dark-theme",
  displayName: "Github Dark",
  theme: {
    foreground: {
      default: pick({ dark: primer.gray[6] }),
    },
    background: {
      default: pick({ dark: primer.white }),
      success: pick({ dark: primer.blue[5] }),
      notice: pick({ dark: primer.orange[6] }),
      warning: pick({ dark: primer.orange[7] }),
      danger: pick({ dark: primer.red[7] }),
      surprise: pick({ dark: primer.red[5] }),
      info: pick({ dark: primer.blue[7] }),
    },
    styles: {
      sidebar: {
        background: {
          default: pick({ dark: primer.gray[1] }),
        },
        foreground: {
          default: pick({ dark: primer.gray[8] }),
        },
        highlight: {
          default: pick({ dark: primer.gray[5] }),
        },
      },
      transparentOverlay: {
        background: {
          default: "rgba(0, 0, 0, 0.6)",
        },
        foreground: {
          default: "#555",
        },
      },
      paneHeader: {
        background: {
          default: pick({ dark: primer.gray[1] }),
          success: pick({ dark: primer.blue[5] })
        },
      },  
    },
  },
};
