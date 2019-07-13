module.exports = {
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    semi: 'error',
    'max-len': ['error', { code: 100 }],
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-before-blocks': 'error',
    'func-names': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2
  }
};
