module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'eslint-disable import': 0,
    'prefer-default-export': 0,
    'no-nested-ternary': 1,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
  },
};
