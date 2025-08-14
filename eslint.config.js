// eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
    // ignore files (replaces .eslintignore)
    { ignores: ["node_modules/**", "dist/**", ".next/**", "build/**"] },

    // make react version explicit to remove the warning
    { settings: { react: { version: "detect" } } },

    // base presets
    js.configs.recommended,
    reactPlugin.configs.flat.recommended,

    // app source (type-aware)
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: process.cwd(),
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: { ...globals.browser, ...globals.node },
        },
        // FLAT CONFIG: plugins must be an object, not an array
        plugins: {
            "@typescript-eslint": tsPlugin,
            "react-hooks": reactHooks,
            react: reactPlugin,
        },
        rules: {
            // React 17+ automatic runtime
            "react/react-in-jsx-scope": "off",
            // Use TS-aware unused-vars; disable base rule
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
            // You use TS, not PropTypes
            "react/prop-types": "off",
            // Hooks hygiene
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            // Tone down noisiness
            "@typescript-eslint/no-empty-object-type": "warn",
            "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
        },
    },

    // config/build scripts: no type-aware parsing; give Node globals
    {
        files: ["vite.config.ts", "tailwind.config.ts", "eslint.config.js", "postcss.config.*", "*.cjs", "*.mjs"],
        languageOptions: {
            parserOptions: { project: null },
            globals: { ...globals.node },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-require-imports": "off",
            "react/react-in-jsx-scope": "off",
        },
    },
];
