# Netsells Stylelint Config

This repository contains the defacto-standard stylelint configuration used on all Netsells projects, both internally and client.

## Usage

Add the config to your project dependencies:

```bash
yarn add netsells/stylelint-config-netsells stylelint 
```

Now extend the config in your project. For example, a `.stylelintrc` file in your project root:

```json
{
  "extends": "stylelint-config-netsells"
}
```

### With webpack

Add the `stylelint-webpack-plugin` to your project:

```bash
yarn add stylelint-webpack-plugin
```

Add the plugin to your webpack config:

```js
const StyleLintPlugin = require('stylelint-webpack-plugin');

...

{
    plugins: [
        new StyleLintPlugin({
            configFile: './.stylelintrc',
            files: './resources/assets/less/**/*.less',
        }),
    ],
},
```

## Rules

### Core

