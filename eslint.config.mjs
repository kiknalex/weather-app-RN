import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import reactPerfPlugin from "eslint-plugin-react-perf";
import reactRefresh from "eslint-plugin-react-refresh";
export default [
	eslint.configs.recommended,
	importPlugin.flatConfigs.recommended,
	jsxA11y.flatConfigs.recommended,
	sonarjs.configs.recommended,
	unicorn.configs.recommended,
	reactPerfPlugin.configs.flat.recommended,
	react.configs.flat.recommended,
	reactRefresh.configs.recommended,
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: tsparser,
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
				module: "readonly",
				require: "readonly",
				__dirname: "readonly",
				__DEV__: "readonly",
				NodeJS: "readonly",
				process: "readonly",
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
			"react-native": reactNative,
		},
		settings: {
			react: {
				version: "detect",
			},
			"import/resolver": {
				typescript: {},
			},
		},
		rules: {
			...reactNative.configs.all.rules,
			"unicorn/prevent-abbreviations": "off",
			"react-perf/jsx-no-new-function-as-prop": "off",
			"react/react-in-jsx-scope": "off",
			"no-unused-vars": "off", // ჩვეულებრივი JavaScript-ისთვის
			"@typescript-eslint/no-unused-vars": [
				"error", // TS error
				{
					vars: "all",
					args: "after-used",
					ignoreRestSiblings: true,
					argsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
				},
			],
		},
	},
	{
		ignores: [
			"*eslint.config.mjs",
			"*tailwind.config.js",
			"*metro.config.js",
			"*babel.config.js",
		],
	},
	prettierConfig,
];
