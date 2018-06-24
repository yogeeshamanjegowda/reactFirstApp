module.exports = {
  "env" : {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "indent": ["warn", 4, {
      "SwitchCase": 1
    }],
    "no-console": ["off"],
    "no-unused-vars": ["warn"],
    "no-undef":  ["warn"],
    "semi": ["warn", "always"]
  }
}