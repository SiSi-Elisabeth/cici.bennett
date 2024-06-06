module.exports = {
  env: {
    node: true,
    browser: false,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: [
    '@typescript-eslint',
  ],
  globals: {

  }
}