module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-v-html': 'off',
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: ['plugin:vue/recommended', '@vue/prettier'],
}
