import globals from "globals";
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser
    },
    plugins: {
      ts
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2], 
      "no-trailing-spaces": "error", 
      "eol-last": ["error", "always"], 
      "space-before-function-paren": ["error", "always"],
      "comma-spacing": ["error", { "before": false, "after": true }], 
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }]
    }
  },
  js.configs.recommended
];
