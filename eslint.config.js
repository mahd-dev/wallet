import pluginJs from "@eslint/js";
import jsx11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tailwindcss from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

const files = ["app/**/*.{js,mjs,cjs,ts,jsx,tsx}"];

export default [
  {
    files,
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      ...reactHooks.configs.recommended.rules,
    },
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  jsx11y.flatConfigs.recommended,
  ...tailwindcss.configs["flat/recommended"],
  {
    rules: {
      // "@typescript-eslint/consistent-type-imports": ["error", {
      //   prefer: "type-imports",
      //   disallowTypeAnnotations: false,
      //   fixStyle: "separate-type-imports"
      // }],

      // Import rules
      "no-duplicate-imports": "off", // We handle this via consistent-type-imports
      "no-use-before-define": "error",
      "prefer-const": "error",
      "prefer-template": "warn",
      eqeqeq: ["error", "smart"],

      // Code style (that doesn't conflict with Prettier)
      // "curly": ["error", "all"],
      "no-multi-assign": "error",
      "no-unneeded-ternary": "error",

      // Accessibility rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/role-has-required-aria-props": "error",

      // React specific rules
      "react/prop-types": "off", // TypeScript handles prop types
      "react/react-in-jsx-scope": "off", // Not needed in modern React
      "react/jsx-no-undef": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/no-unescaped-entities": "error",
      "react/no-unknown-property": "error",

      "no-nested-ternary": "off",
      "no-unused-vars": "off",

      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      "tailwindcss/no-custom-classname": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
