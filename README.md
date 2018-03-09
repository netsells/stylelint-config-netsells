![Netsells Logo](https://www.dropbox.com/s/4jmsg7xvcfnyfbk/logo_name_300.png?raw=1)

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

#### 📍 color-hex-case

Sets the case of hex values to lowercase.

##### 🧟 Example of incorrect code for this rule:

```css
a {
    color: #FFF;
}

a {
    color: #FF0000;
}
```

##### 🦄 Example of correct code for this rule:

```css
a {
    color: #fff;
}

a {
    color: #ff0000;
}
```

---

#### 📍 color-named

Colors must never be named.

##### 🧟 Example of incorrect code for this rule:

```css
a { 
    color: black; 
}

a {
    color: white; 
}
```

##### 🦄 Example of correct code for this rule:

```css
a { 
    color: #000; 
}

a {
    color: $blue; 
}
```

---

#### 📍 declaration-no-important

Disallow !important within declarations.

##### 🧟 Example of incorrect code for this rule:

```css
a {
    color: #FFFFFF !important;
}

a {
    color: #FFFFFF!important;
}

a {
    color: #FFFFFF ! important;
}
```

##### 🦄 Example of correct code for this rule:

```css
a {
    color: #FFFFFF;
}

```

---

#### 📍 property-no-unknown

Prevents unknown properties being used.

##### 🧟 Example of incorrect code for this rule:

```css
a {
    colr: blue;
}

a {
    my-property: 1;
}
```

---


