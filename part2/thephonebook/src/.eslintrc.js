module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['react-app', 'eslint:recommended'],
  rules: {
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off'
  }
}