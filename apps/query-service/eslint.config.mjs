// @ts-check
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default tseslint.config(
  // 1. Global Ignores: Folders ESLint should completely skip
  {
    ignores: ["dist/", "build/", "node_modules/"],
  },

  // 2. Core Linting Rules: Applied to your source files
  {
    files: ["**/*.{js,ts}"],
    extends: [
      js.configs.recommended, // Recommended JavaScript rules
      ...tseslint.configs.recommended, // Recommended TypeScript rules
    ],
    // This tells ESLint how to find your root directory and tsconfig files
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // Customize your own rules here
      "no-console": "warn", // Warns you if you leave console.logs in code
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Errors on unused vars, unless prefixed with an underscore (like req, _res)
    },
  },
);
