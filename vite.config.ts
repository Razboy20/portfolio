// import devtools from "solid-devtools/vite";
import vercel from "solid-start-vercel";
import solid from "solid-start/vite";
import UnoCSS from "unocss/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import solidStyled from "vite-plugin-solid-styled";

export default defineConfig(() => {
  return {
    plugins: [
      // devtools({
      //   autoname: true,
      //   locator: {
      //     targetIDE: "vscode",
      //   },
      // }),
      solid({ ssr: true, adapter: vercel({}) }),
      Icons({ compiler: "solid" }),
      UnoCSS(),
      solidStyled({
        prefix: "ss",
        filter: {
          include: "src/**/*.{ts,js,tsx,jsx}",
          exclude: "node_modules/**/*.{ts,js,tsx,jsx}",
        },
      }),
    ],
    ssr: {
      external: ["@prisma/client"],
      noExternal: ["@kobalte/core"],
    },
  };
});
