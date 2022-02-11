module.exports = {
  extends: [
    './airbnb.eslint.rules/best-practices',
    './airbnb.eslint.rules/errors',
    './airbnb.eslint.rules/node',
    './airbnb.eslint.rules/style',
    './airbnb.eslint.rules/variables',
    './airbnb.eslint.rules/es6',
    './airbnb.eslint.rules/strict',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};