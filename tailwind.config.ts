import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        amsterdam: ['var(--font-amsterdam-two)'],
        capt: ['var(--font-glacial)'],
        glacial: ['var(--font-glacial)']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    "themes": {
      "light": {
        "colors": {
          "default": {
            "50": "#e9eae8",
            "100": "#cbcdc7",
            "200": "#acb0a6",
            "300": "#8d9385",
            "400": "#6f7664",
            "500": "#505943",
            "600": "#424937",
            "700": "#343a2c",
            "800": "#262a20",
            "900": "#181b14",
            "foreground": "#fff",
            "DEFAULT": "#505943"
          },
          "primary": {
            "50": "#eeeeea",
            "100": "#d7d7cc",
            "200": "#c0bfae",
            "300": "#a9a791",
            "400": "#919073",
            "500": "#7a7855",
            "600": "#656346",
            "700": "#4f4e37",
            "800": "#3a3928",
            "900": "#25241a",
            "foreground": "#000",
            "DEFAULT": "#7a7855"
          },
          "secondary": {
            "50": "#fbfdee",
            "100": "#f5fad6",
            "200": "#eef6be",
            "300": "#e8f3a6",
            "400": "#e2f08e",
            "500": "#dced76",
            "600": "#b6c461",
            "700": "#8f9a4d",
            "800": "#697138",
            "900": "#424723",
            "foreground": "#000",
            "DEFAULT": "#dced76"
          },
          "success": {
            "50": "#e2f8ec",
            "100": "#b9efd1",
            "200": "#91e5b5",
            "300": "#68dc9a",
            "400": "#40d27f",
            "500": "#17c964",
            "600": "#13a653",
            "700": "#0f8341",
            "800": "#0b5f30",
            "900": "#073c1e",
            "foreground": "#000",
            "DEFAULT": "#17c964"
          },
          "warning": {
            "50": "#fef4e4",
            "100": "#fce4bd",
            "200": "#fad497",
            "300": "#f9c571",
            "400": "#f7b54a",
            "500": "#f5a524",
            "600": "#ca881e",
            "700": "#9f6b17",
            "800": "#744e11",
            "900": "#4a320b",
            "foreground": "#000",
            "DEFAULT": "#f5a524"
          },
          "danger": {
            "50": "#fee1eb",
            "100": "#fbb8cf",
            "200": "#f98eb3",
            "300": "#f76598",
            "400": "#f53b7c",
            "500": "#f31260",
            "600": "#c80f4f",
            "700": "#9e0c3e",
            "800": "#73092e",
            "900": "#49051d",
            "foreground": "#000",
            "DEFAULT": "#f31260"
          },
          "background": "#fbfae4",
          "foreground": {
            "50": "#dfdfdf",
            "100": "#b3b3b3",
            "200": "#868686",
            "300": "#595959",
            "400": "#2d2d2d",
            "500": "#000000",
            "600": "#000000",
            "700": "#000000",
            "800": "#000000",
            "900": "#000000",
            "foreground": "#fff",
            "DEFAULT": "#000000"
          },
          "content1": {
            "DEFAULT": "#7a7855",
            "foreground": "#000"
          },
          "content2": {
            "DEFAULT": "#dced76",
            "foreground": "#000"
          },
          "content3": {
            "DEFAULT": "#fbfae4",
            "foreground": "#000"
          },
          "content4": {
            "DEFAULT": "#1a1a1a",
            "foreground": "#fff"
          },
          "focus": "#dced76",
          "overlay": "#000000",
          "divider": "#7a7855"
        }
      },
      "dark": {
        "colors": {
          "default": {
            "50": "#dfeee6",
            "100": "#b3d7c2",
            "200": "#86bf9f",
            "300": "#59a77b",
            "400": "#2d9058",
            "500": "#007834",
            "600": "#00632b",
            "700": "#004e22",
            "800": "#003919",
            "900": "#002410",
            "foreground": "#fff",
            "DEFAULT": "#007834"
          },
          "primary": {
            "50": "#eeeeea",
            "100": "#d7d7cc",
            "200": "#c0bfae",
            "300": "#a9a791",
            "400": "#919073",
            "500": "#7a7855",
            "600": "#656346",
            "700": "#4f4e37",
            "800": "#3a3928",
            "900": "#25241a",
            "foreground": "#000",
            "DEFAULT": "#7a7855"
          },
          "secondary": {
            "50": "#fbfdee",
            "100": "#f5fad6",
            "200": "#eef6be",
            "300": "#e8f3a6",
            "400": "#e2f08e",
            "500": "#dced76",
            "600": "#b6c461",
            "700": "#8f9a4d",
            "800": "#697138",
            "900": "#424723",
            "foreground": "#000",
            "DEFAULT": "#dced76"
          },
          "success": {
            "50": "#e2f8ec",
            "100": "#b9efd1",
            "200": "#91e5b5",
            "300": "#68dc9a",
            "400": "#40d27f",
            "500": "#17c964",
            "600": "#13a653",
            "700": "#0f8341",
            "800": "#0b5f30",
            "900": "#073c1e",
            "foreground": "#000",
            "DEFAULT": "#17c964"
          },
          "warning": {
            "50": "#fef4e4",
            "100": "#fce4bd",
            "200": "#fad497",
            "300": "#f9c571",
            "400": "#f7b54a",
            "500": "#f5a524",
            "600": "#ca881e",
            "700": "#9f6b17",
            "800": "#744e11",
            "900": "#4a320b",
            "foreground": "#000",
            "DEFAULT": "#f5a524"
          },
          "danger": {
            "50": "#fee1eb",
            "100": "#fbb8cf",
            "200": "#f98eb3",
            "300": "#f76598",
            "400": "#f53b7c",
            "500": "#f31260",
            "600": "#c80f4f",
            "700": "#9e0c3e",
            "800": "#73092e",
            "900": "#49051d",
            "foreground": "#000",
            "DEFAULT": "#f31260"
          },
          "background": "#ffffff",
          "foreground": {
            "50": "#dfdfdf",
            "100": "#b3b3b3",
            "200": "#868686",
            "300": "#595959",
            "400": "#2d2d2d",
            "500": "#000000",
            "600": "#000000",
            "700": "#000000",
            "800": "#000000",
            "900": "#000000",
            "foreground": "#fff",
            "DEFAULT": "#000000"
          },
          "content1": {
            "DEFAULT": "#0b4424",
            "foreground": "#fff"
          },
          "content2": {
            "DEFAULT": "#022210",
            "foreground": "#fff"
          },
          "content3": {
            "DEFAULT": "#141414",
            "foreground": "#fff"
          },
          "content4": {
            "DEFAULT": "#ffffff",
            "foreground": "#000"
          },
          "focus": "#dced76",
          "overlay": "#000000",
          "divider": "#000000"
        }
      }
    },
    "layout": {
      "fontSize": {
        "tiny": "0.75rem",
        "small": "0.875rem",
        "medium": "1rem",
        "large": "1.125rem"
      },
      "lineHeight": {
        "tiny": "1rem",
        "small": "1.25rem",
        "medium": "1.5rem",
        "large": "1.75rem"
      },
      "radius": {
        "small": "0.5rem",
        "medium": "0.75rem",
        "large": "0.875rem"
      },
      "borderWidth": {
        "small": "1px",
        "medium": "2px",
        "large": "3px"
      },
      "disabledOpacity": "0.5",
      "dividerWeight": "1",
      "hoverOpacity": "0.9"
    }
  })],
};
export default config;
