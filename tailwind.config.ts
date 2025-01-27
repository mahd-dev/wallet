
import daisyui from "daisyui";
import konstaConfig from "konsta/config";
import type { Config } from "tailwindcss";

export default konstaConfig({
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        dark: {
          ...daisyui.config?.theme?.dark,
        },
      },
      {
        light: {
          ...daisyui.config?.theme?.light,
        },
      },
    ],
    darkTheme: "dark",
    base: false,
    logs: false,
    rtl: true,
  },

  theme: {
    extend: {},
    fontFamily: {
      ios: "Tajawal-Medium",
      material: "Tajawal-Medium",
    },
  },

  konsta: {
    colors: {
      // primary: "#FF0000",
      primary: "#EA983E",
      secondary: "#88AD48"
    },
  },

  darkMode: "class",
  plugins: [daisyui],
}) satisfies Config;
