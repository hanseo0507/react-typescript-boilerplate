module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/recommended",
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "linebreak-style": "off",
    "no-console": "warn",
    "no-shadow": "off",
    "no-unused-vars": "warn",
    "no-use-before-define": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
  },

  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "global-require": "off",
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended", "plugin:import/typescript"],
      rules: {
        "react/prop-types": "off",
        "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "jsx-a11y/no-noninteractive-element-interactions": 0,
      },
    },
  ],
};
