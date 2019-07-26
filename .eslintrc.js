module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "max-len": ["error", { "code": 120 }],
    "indent": ["error", 4],
    "import/prefer-default-export": "off",
    "linebreak-style": ["error", "windows"],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-underscore-dangle": "off",
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": "off"
  },
};
