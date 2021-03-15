module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', {
     'endOfLine': 'auto',
     'bracketSpacing': true,
     'jsxSingleQuote': true,
   }],
   'jsx-quotes': ["error", "prefer-single"],
   'react-native/no-inline-styles': 0,
  },
};
