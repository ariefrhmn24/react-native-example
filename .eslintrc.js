module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'comma-spacing': ['error', {
      'before': false,
      'after': true }],
     'no-undef': 2,
     'semi': 2,
     'space-before-blocks': 2,
     'space-before-function-paren': 2,
     'space-in-parens': 2,
     'space-infix-ops': 2,
     'space-unary-ops': 2,
     'spaced-comment': 2,
     'rest-spread-spacing': 2,
     'semi-spacing': 2,
     'no-unneeded-ternary': 2,
     'eqeqeq': 2,
     'dot-location': 2,
     'no-extra-bind': 2,
     'keyword-spacing': 2,
     'key-spacing': 2,
     'indent': ['error', 2],
     'func-call-spacing': 2,
     'array-bracket-spacing': 2,
     'block-spacing': 2,
     'brace-style': 2,
     'arrow-body-style': 2,
     'arrow-parens': 2,
     'arrow-spacing': 2,
     'jsx-quotes': ['error', 'prefer-single'],
     'object-curly-spacing': 2,
     'quotes': ['error', 'single'],
     'no-console': 2
  },
  'globals': {
    'fetch': false,
    'GLOBAL': false,
    'it': false,
    'xit': false,
    'expect': false,
    'describe': false,
    'jest': false,
    'require': false,
    'module': false,
    'Promise': false,
    'beforeAll': false,
    'beforeEach': true,
    'window': false,
    'compose': false
  }
}