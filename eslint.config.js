import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules({
    ...pluginReactConfig,
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': ['error', {}],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
  }),
];
