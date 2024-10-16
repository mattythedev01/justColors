# @mattythedev01/justcolors Documentation

## Overview

"@mattythedev01/justcolors", is a simple and lightweight color package to log stuff beautifully.

## Features

- Wide range of color options including regular, bright, and pastel colors
- Background color support
- Text styling options (bold, italic, underline, etc.)
- Special effects like rainbow and gradient
- Semantic color functions for success, error, warning, etc.
- Easy-to-use API with simple function calls
- Supports chaining of colors and styles
- Compatible with Node.js environments
- Lightweight and efficient
- No external dependencies

## Installation

`npm install @mattythedev01/justcolors`

## Example Usage

```js
// Example usage of justcolors

const justColors = require("@mattythedev01/justcolors");

// Example usage
console.log(justColors.red("This text is red!"));
console.log(justColors.bgGreen("This text has a green background!"));
console.log(justColors.success("Operation was successful!"));
```

### Wondering how to see every color and effects if it doesn't pop up?

```js
const justColors = require("@mattythedev01/justcolors");

// To show every regular color
justColors.showAllColors();
// To show additional colors
justColors.showAdditionalColors();
// To show effects
justColors.showEffects();
// To show emojiDecor
justColors.showEmojiDecor();
// To show gradients
justColors.showGradients();
// To show new effects
justColors.showNewEffects();
// To show pastel colors
justColors.showPastelColors();
// To show semantic colors
justColors.showSemanticColors();
// To show other colors
justColors.showOtherColors();
// to show styles
justColors.showStyles();
```

Write any one of these lines down in your file, and run the file. Once ran, it'll show you whatever in your terminal.
