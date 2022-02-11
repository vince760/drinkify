module.exports = {
  "globals": {
    "localStorage": true,
    "fetch": true,
    "window": true,
    "navigator": true,
    "FormData": true,
    "document": true,
    "arguments": true
  },
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true,
      "jsx": true
    }
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    // "plugin:react-hooks/recommended",
    "./airbnb.eslint.js"
  ],
  "plugins": [
    "react",
    "spellcheck"
  ],
  "parser": "babel-eslint",
  "rules": {
    "spellcheck/spell-checker": [
      0,
      {
        "comments": false,
        "strings": true,
        "identifiers": false,
        "templates": false,
        "lang": "en_US",
        "skipWords": [
          "dict",
          "aff",
          "hunspellchecker",
          "hunspell",
          "utils",
          "Outlayr"
        ],
        "skipIfMatch": [
          "http://[^s]*",
          "^[-\\w]+\/[-\\w\\.]+$"
        ],
        "skipWordIfMatch": [
          "^foobar.*$"
        ],
        "minLength": 3
      }
    ],
    "newline-per-chained-call": [
      2,
      {
        "ignoreChainWithDepth": 1
      }
    ],
    "react/jsx-newline": [
      2,
      {
        "prevent": false
      }
    ],
    "react/jsx-one-expression-per-line": [
      2,
      {
        "allow": "none"
      }
    ],
    "react/jsx-first-prop-new-line": [
      "error",
      "always"
    ],
    "react/jsx-closing-bracket-location": [
      "error",
      {
        "selfClosing": "tag-aligned",
        "nonEmpty": "tag-aligned"
      }
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ],
    // "multiline-ternary": [
    //   "error",
    //   "always-multiline"
    // ],
    "array-element-newline": [
      "error",
      {
        "minItems": 2
      }
    ],
    "array-bracket-newline": [
      "error",
      {
        "minItems": 2
      }
    ],
    "object-property-newline": [
      "error",
      {
        "allowAllPropertiesOnSameLine": false
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      0,
      "never"
    ],
    "space-before-function-paren": [
      0,
      "never"
    ],
    // "indent": 0,
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "flatTernaryExpressions": true,
        "ignoredNodes": [
          "TemplateLiteral > *"
        ]
      }
    ],
    "jsx-a11y/anchor-is-valid": "off",
    // "aria-props":  [0, "always"],
    "no-script-url": "off",
    "camelcase": [
      "error",
      {
        "properties": "always"
      }
    ],
    "no-redeclare": [
      2,
      {
        "builtinGlobals": true
      }
    ],
    "eqeqeq": [
      2,
      "always"
    ],
    "no-unused-vars": [
      2,
      {
        "vars": "local",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "no-console": [
      0,
      "always"
    ],
    "react/default-props-match-prop-types": [
      2,
      {
        "allowRequiredDefaults": true
      }
    ],
    "react/no-unused-prop-types": [
      2,
      {
        "skipShapeProps": true
      }
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}