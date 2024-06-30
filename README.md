# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

![LintingFormatting](https://res.cloudinary.com/practicaldev/image/fetch/s--tNpmYEAU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ln75diaqkaxox9n1yfpb.png)

- Run npm create vite@latest
- Run npm i. Also install rimraf as dev dependency.
- Setup Prettier https://prettier.io/docs/en/install.
- Run npm install --save-dev --save-exact prettier
- Create prettierrc & prettierignore files

- Integrate linter with Prettier https://prettier.io/docs/en/integrating-with-linters
- eslint-config-prettier disables rules which will conflict with prettier
  eslint-plugin-prettier so that all prettier rules work in conjuction with lint rules
- Run npm i -D eslint-config-prettier
- If you run eslint --fix and prettier --write as separate steps, use "plugin:prettier/recommended" in extends of eslintrc.cjs
- In parserOptions add "project": "./tsconfig.json". In rules add 'prettier/prettier': 'warn'
- In include of tsconfig add ".eslintrc.cjs"

- Add airbnb styleguide
- Run npx install-peerdeps --dev eslint-config-airbnb
- Run npm install eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
- Run npm i -D husky lint-staged
- Run npx husky-init
- Add lint-staged to package.json
- Add npm lint-staged to .husky/pre-commit
