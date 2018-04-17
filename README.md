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
            files: './resources/assets/**/*',
        }),
    ],
},
```

### Commands

#### create-rule

This command will create a blank rule template for you.

```
npm run create-rule core/brand-new-rule
```

## Rules

### Core

#### 📍 block-no-empty

Disallow empty blocks.


##### 🧟 Example of incorrect code for this rule:

```css
a {

}

@media print {
    a {

    }
}
```

##### 🦄 Example of correct code for this rule:

```css
a {
    color: #FFFFFF;
}

@media print {
    a {
        color: #FFFFFF;
    }
}
```

---

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

#### 📍 color-hex-length

Forces the length of hex codes used in styles to be long notation rather than short.

##### 🧟 Example of incorrect code for this rule:

```css
a {
    color: #fff;
}

a {
    color: #fffa;
}
```

##### 🦄 Example of correct code for this rule:

```css
a {
    color: #ffffff;
}

a {
    color: #ffffaa;
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

#### 📍 color-no-invalid-hex

Disallow invalid hex colors.


##### 🧟 Example of incorrect code for this rule:

```css
a { 
    color: #00; 
}

a {
    color: #fff1az; 
}

a { 
    color: #12345aa; 
}
```

##### 🦄 Example of correct code for this rule:

```css
a { 
    color: #000000; 
}

a { 
    color: #fff1a0; 
}

a { 
    color: #123450aa; 
}
```

---

#### 📍 declaration-block-no-duplicate-properties
    
Disallow duplicate properties within declaration blocks.
This rule ignores variables ($sass, @less, --custom-property).

##### 🧟 Example of incorrect code for this rule:

```css
a { 
    color: #FFFFFF;
    color: #000000; 
}
a { 
    color: #FFFFFF;
    background: #000000; 
    color: #000000;
}
```

##### 🦄 Example of correct code for this rule:

```css
a { 
    color: #FFFFFF;
}
a { 
    color: #FFFFFF; 
    background: #000000;
}
```

---

#### 📍 declaration-block-no-shorthand-property-overrides

Prevents shorthand properties overriding longhand ones. 


##### 🧟 Example of incorrect code for this rule:

```css
a {
    padding-left: 10px;
    padding: 20px;
}

a {
    transition-property: opacity;
    transition: opacity 1s linear;
}

a {
    -webkit-transition-property: opacity;
    -webkit-transition: opacity 1s linear;
}


a {
    border-top-width: 1px;
    top: 0;
    bottom: 3px;
    border: 2px solid blue;
}
```

##### 🦄 Example of correct code for this rule:

```css
a {
    padding: 10px;
    padding-left: 20px;
}

a {
    transition-property: opacity;
    -webkit-transition: opacity 1s linear;
}

/* the following examples are to be viewed as a single instance*/
a {
    transition-property: opacity;
}
a {
    transition: opacity 1s linear;
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

#### 📍 indentation
    
Always indent at-rules, rules, comments, declarations, inside parentheses and multi-line values by 4 spaces.

##### 🧟 Example of incorrect code for this rule:

```css
@media print {
a {
color: #000000;
}

@media print {
    a,
     b {
        color: #000000;
    }
}

a {
/* blergh */
    color: #000000;
}

a {
    color: rgb(
    255,
    255,
    255
    );
    top: 0;
}
```

##### 🦄 Example of correct code for this rule:

```css
@media print {
    a {
        color: #000000;
    }
}

@media print {
    a,
    b {
        color: #000000;
    }
}

a {
    /* blergh */
    color: #000000;
}

a {
    color: rgb(
        255,
        255,
        255
    );
    top: 0;
}
```

---

#### 📍 length-zero-no-unit

Zero lengths should not have units.

##### 🧟 Example of incorrect code for this rule:

```css
.my-element {
    top: 0px;
    left: 0px;
}
```

##### 🦄 Example of correct code for this rule:

```css
.my-element {
    top: 0;
    left: 0;
}
```

---

#### 📍 media-feature-colon-space-after

Require a single space after the colon in media features.


##### 🧟 Example of incorrect code for this rule:

```css
@media (max-width:600px) {

}

@media (max-width :600px) {

}
```

##### 🦄 Example of correct code for this rule:

```css
@media (max-width: 600px) {

}

@media (max-width : 600px) {

}
```

---

#### 📍 no-extra-semicolons

Disallow extra semicolons.


##### 🧟 Example of incorrect code for this rule:

```css
a {
  color: #000000;;
}

a {
  ;color: #ffffff;
}

a {
  color: #ffffff;
  ;
}
```

##### 🦄 Example of correct code for this rule:

```css
a {
    color: #ffffff;
}

```

---

#### 📍 number-leading-zero
    
Requires a leading zero on fractional values that are less than one.

##### 🧟 Example of incorrect code for this rule:

```css
a {
    line-height: .5px;
}

a {
    transform: translate(2px, .4px);
}
```

##### 🦄 Example of correct code for this rule:

```css
a {
    line-height: 0.5px;
}

a {
    transform: translate(2px, 0.4px);
}
```

---

#### 📍 property-case
    
Specify lowercase for properties.

##### 🧟 Example of incorrect code for this rule:

```css
a {
    Width: 1px
}

a {
    WIDTH: 1px
}

a {
    border-Radius: 5px;
}

a {
    -WEBKIT-animation-duration: 3s;
}

@media screen and (orientation: landscape) {
    WiDtH: 500px;
}

```

##### 🦄 Example of correct code for this rule:

```css
a {
    width: 1px
}

a {
    border-radius: 5px;
}

a {
    -webkit-animation-duration: 3s;
}

@media screen and (orientation: landscape) {
    width: 500px;
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

#### 📍 shorthand-property-no-redundant-values
    
Disallow redundant values in shorthand properties.

##### 🧟 Example of incorrect code for this rule:

```css
a { 
    margin: 1px 1px; 
}

a { 
    margin: 1px 1px 1px 1px; 
}

a { 
    padding: 1px 2px 1px; 
}

a { 
    border-radius: 1px 2px 1px 2px; 
}

```

##### 🦄 Example of correct code for this rule:

```css
a { 
    margin: 1px;
}

a { 
    margin: 1px 1px 1px 2px;
}

a { 
    padding: 1px 1em 1pt 1pc;
}

a { 
    border-radius: 10px / 5px;
}

```

---

#### 📍 unit-no-unknown

Prevents unknown units being used.

##### 🧟 Example of incorrect code for this rule:

```css
.my-element {
    width: 90xp;
}

.other-element {
    border-radius: 40pixels;
}
```

---


