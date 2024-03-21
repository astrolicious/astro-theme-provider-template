# Astro Theme Template

This is a template repo for creating theme integrations for Astro with [`astro-theme-provider`](https://github.com/BryceRussell/astro-theme-provider)

## How to Author a Theme

1. **Clone the repo and install dependencies**:

> **Important**: This repo uses ***pnpm*** workspaces, you must use ***pnpm*** as your package manager

```
git clone https://github.com/BryceRussell/astro-theme-template.git mycooltheme
cd mycooltheme
pnpm i
```
   
2. **Start the playground**:

When authoring a theme, the playground always has to be running in order to generate the types for your theme

```
cd playground
pnpm dev
```

3. **Change the theme name**: The default name inside this repo is `my-theme`, it is reccomended to use find and replace to replace all occurences of `my-theme` inside the repo with the name of your own theme. If you can't find and replace, you can manually change the name inside the following files:
   - `package/package.json`
   - `playground/package.json` (Reinstall dependencies inside playground after renaming)
   - Update imports inside the `/package/src` folder
4. **Update `package.json`**: Add `homepage` and `repository` properties to your theme package (`package/package.json`), you should see warnings in the console that explains this further. While you are there, add or modify any other properties you may want like `description`, `keywords`, `license`, `author`, etc. [Configuring `package.json`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)
5. **Explore**! Authoring a theme using `astro-theme-provider` is similar to creating a normal Astro project. Explore the repo and [check out the docs](https://astro-theme-provider.netlify.app/) to learn more about how to author a theme.

