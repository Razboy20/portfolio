import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig } from "unocss";
import { presetKobalte } from "unocss-preset-primitives";

export default defineConfig({
  rules: [
    [
      "btn-transition",
      { transition: "color 180ms, border-color 150ms, background-color 150ms, box-shadow 150ms, transform 50ms" },
    ],
    [
      "ring-offset-0",
      {
        "--un-ring-offset-width": "0px",
      },
    ],
  ],
  theme: {
    easing: {
      "in-out-expo": "cubic-bezier(.46, 0, .21, 1)",
      "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
    },
    colors: {
      primary: {
        "50": "hsla(53, 100%, 91%, 1)",
        "100": "hsla(52, 20%, 48%, 1)",
        "800": "hsla(45, 100%, 10%, 1)",
        "900": "hsla(46, 100%, 7%, 1)",
      },
      accent: "hsla(48, 100%, 47%, 1)",
      bg: "hsla(45, 98%, 3%, 1)",
    },
  },

  presets: [
    presetUno(),
    presetKobalte(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: {
          name: "Hanken Grotesk",
          weights: ["500", "700"],
        },
        montserrat: {
          name: "Montserrat",
          weights: ["700"],
        },
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
