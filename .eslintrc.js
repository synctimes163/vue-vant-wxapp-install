module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //  // 以下为该项目自定义部分
    //  'indent': [2, 4], //缩进风格 - 开启缩进4格
    //  'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格 - 开启
    //  'no-const-assign': 2, //禁止修改const声明的变量 - 开启
    //  'space-before-function-paren': [0, 'always'], //函数定义时括号前面要有空格 - 关闭
    //  'eol-last': 0, //文件以单一的换行符结束 - 关闭
    //  'camelcase': 0, //强制驼峰法命名 - 关闭
    //  'no-undef': 0, //不能有未定义的变量 - 关闭
    //  'no-alert': 0, //禁止使用alert confirm prompt - 关闭
    //  'arrow-parens': 0, //箭头函数用小括号括起来 - 关闭
    "no-unused-vars": 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
