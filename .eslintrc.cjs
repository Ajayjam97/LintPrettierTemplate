module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    //'eslint:recommended',
    //'plugin:@typescript-eslint/recommended',
    //'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  parserOptions: {
    'project': './tsconfig.eslint.json'
  },
  rules: {
    'prettier/prettier': 'warn',
    'react/button-has-type': 'off',
    "react/react-in-jsx-scope": "off"
  },
  "overrides": [
    {
      "files": ["**/setupTests.ts"],
      "rules": {
        "import/no-extraneous-dependencies": "off"
      }
    }
  ]
}
