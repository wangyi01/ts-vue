/*
 * @Author: wangyi
 * @Date: 2019-11-15 14:51:33
 * @LastEditTime: 2019-11-20 09:43:41
 * @LastEditors: Please set LastEditors
 * @Description: eslint
 * @FilePath: /project/.eslintrc.js
 */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:vue/essential",
  ],
  plugins: ["vue", "@typescript-eslint"],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    // tsconfigRootDir: ".",
    extraFileExtensions: [".vue"],
    // ecmaVersion: 6
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
