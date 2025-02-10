import type { Config } from "tailwindcss";

const gridTmplIndexes = [...Array(12).keys()].map((k) => k + 13);
const gridIndexes = [...Array(12).keys()].map((k) => k + 14);

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "1rem",
        base: "1.2rem",
        lg: "1.3rem",
        xl: "1.7rem",
        "2xl": "2.4rem",
      },
      screens: {
        xs: "380px",
      },
      colors: {
        softred: {
          "50": "#fcf5f4",
          "100": "#f9e8e7",
          "200": "#f5d5d3",
          "300": "#eaa9a4",
          "400": "#e28d87",
          "500": "#d36860",
          "600": "#be4d44",
          "700": "#9f3d36",
          "800": "#843630",
          "900": "#6f322d",
          "950": "#3b1714",
        },
        softgreen: {
          "50": "#f2f7f5",
          "100": "#dfece6",
          "200": "#adcec2",
          "300": "#96bfb3",
          "400": "#699e90",
          "500": "#488174",
          "600": "#35665c",
          "700": "#2b514a",
          "800": "#24413c",
          "900": "#1e3632",
          "950": "#101e1c",
        },
        softblue: {
          "50": "#f4f8fa",
          "100": "#e6edf3",
          "200": "#d3dfea",
          "300": "#b6ccdd",
          "400": "#90afca",
          "500": "#7597bc",
          "600": "#6381ad",
          "700": "#57719e",
          "800": "#4b5d82",
          "900": "#404e68",
          "950": "#2a3141",
        },
        softgray: {
          "50": "#f3f8f8",
          "100": "#d7e6e7",
          "200": "#c5dadc",
          "300": "#9dc0c3",
          "400": "#6d9da3",
          "500": "#528188",
          "600": "#476c73",
          "700": "#3e5a60",
          "800": "#384d52",
          "900": "#324147",
          "950": "#1e292e",
        },
        softyellow: {
          "50": "#fff9eb",
          "100": "#feedc7",
          "200": "#fddd97",
          "300": "#fcbf4d",
          "400": "#fba724",
          "500": "#f5830b",
          "600": "#d95f06",
          "700": "#b44009",
          "800": "#92310e",
          "900": "#78290f",
          "950": "#451203",
        },
      },
      gridTemplateColumns: gridTmplIndexes.reduce(
        (acc, num) => ({
          ...acc,
          [`${num}`]: `repeat(${num}, minmax(0, 1fr))`,
        }),
        {},
      ),
      gridTemplateRows: gridTmplIndexes.reduce(
        (acc, num) => ({
          ...acc,
          [`${num}`]: `repeat(${num}, minmax(0, 1fr))`,
        }),
        {},
      ),
      gridColumn: gridTmplIndexes.reduce(
        (acc, num) => ({
          ...acc,
          [`span-${num}`]: `span ${num} / span ${num}`,
        }),
        {},
      ),
      gridRow: gridTmplIndexes.reduce(
        (acc, num) => ({
          ...acc,
          [`span-${num}`]: `span ${num} / span ${num}`,
        }),
        {},
      ),
      gridColumnStart: gridIndexes.reduce(
        (acc, num) => ({
          ...acc,
          [`${num}`]: `${num}`,
        }),
        {},
      ),
      gridRowStart: gridIndexes.reduce(
        (acc, num) => ({
          ...acc,
          [`${num}`]: `${num}`,
        }),
        {},
      ),
      gridColumnEnd: gridIndexes.reduce(
        (acc, num) => ({
          ...acc,
          [`${num}`]: `${num}`,
        }),
        {},
      ),
      gridRowEnd: gridIndexes.reduce(
        (acc, num) => ({
          ...acc,
          [`${num}`]: `${num}`,
        }),
        {},
      ),
    },
  },
  plugins: [],
} satisfies Config;
