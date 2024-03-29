module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-unexpected-multiline': 'on', // Desativa o erro "Parsing error: Unexpected token function"
    'no-unused-vars': 'warn', // Aviso em vez de erro para variáveis não utilizadas
  },
};
