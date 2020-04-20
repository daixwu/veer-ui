module.exports = {
  "root": true,
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceMap": "module",
    "ecmaVersion": 7
  },
  "env": {
    "node": true,
    "browser": true
  },
  "extends": [
    "plugin:vue/essential",
    "standard"
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "space-before-function-paren": "off", // 关闭函数函数声明在小括号前必须加空格的规则
    "no-trailing-spaces": "off", // 关闭禁用行尾空格
    "eol-last": "off", // 关闭要求或禁止文件末尾存在空行
    "comma-dangle": "warn", // 出现拖尾逗号仅反馈警告，而不是报错
    "no-async-promise-executor": "off",
    "no-misleading-character-class": "off",
    "no-useless-catch": "off"
  }
}
