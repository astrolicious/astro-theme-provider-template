# My Astro Theme!

This is my awesome Astro theme created using [`astro-theme-provider`](https://github.com/BryceRussell/astro-theme-provider)!

### Install

1. Create an empty Astro project:

```sh
npm create astro@latest mywebsite --template empty -y
```

2. Add the theme to your project:

```sh
npm run astro add my-theme
```

### Configure

```ts
import { defineConfig } from "astro/config";
import MyTheme from "my-theme";

export default defineConfig({
  integrations: [
    MyTheme({
      config: {
        title: "Hey!",
        description: "This is my website!",
      },
    }),
  ],
});

```