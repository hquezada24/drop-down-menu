import globals from "globals";
import pluginJS from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.node }},
  pluginJS.configs.recommended,
];