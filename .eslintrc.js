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
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "import/prefer-default-export": "off",
    "linebreak-style": ["error", "windows"],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-underscore-dangle": "off",
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "object-curly-newline": ["error", { 
      "ImportDeclaration": { "multiline": true, "minProperties": 6 }  
    }],
    "arrow-parens": ["error", "as-needed"],
  },
};
