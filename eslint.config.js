import globals from 'globals';
import eslintPluginPlaywright from 'eslint-plugin-playwright';

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      playwright: eslintPluginPlaywright,
    },
    rules: {},
  },
];
