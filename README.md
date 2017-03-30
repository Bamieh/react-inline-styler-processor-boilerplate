# React Inline Styler Processor Boilerplate

A boilerplate for creating React Inline Styler Processors.

The boilerplate provides the following:

- easy way to write your processor.
- configured babel to build the processor in es5 for backward compatibility.
- configured build process, and prepublish to npm.
- configured unit testing with mocha.


```
git clone https://github.com/Bamieh/react-inline-styler-processor-boilerplate.git
cd react-inline-styler-processor-boilerplate
npm install

```


## Creating a processor

Creating a processor is simple, the processor is just a function that accepts 1 style object at a time, and the provided configs from the `Provider` of react inline styler.

The function returns a processed styles object

## Example

In this example we will create a processor that turns font sizes from `pixels` to `rems`.

```
import invariant from 'invariant';

export default function processor(styleObject, configs) {
  const basePixelFontSize = configs.basePixelFontSize;

  invariant(typeof basePixelFontSize === "undefined", 
    'please pass "basePixelFontSize" to the react-inline-styler` +
    `Provider in order for pixelsToRem processor to work.`)


  return Object.entries(styleObject).map(styleAttribute => {
    const [attributeKey, attributeValue] = styleAttribute;
    if(/fontSize/.test(attributeKey)) {
      styleAttribute[attributeKey] = `${attributeValue/basePixelFontSize}rem`;
    }

    return styleAttribute;
  })
}

```


## Testing

The boilerplate uses mocha for unit testing, run `npm test` to run the tests. The test files are located in the `test` directory, the `setup.js` file is used to setup mocha if needed. 



## Todo

With the following todo list in mind, feel free to help with the following:

- coverage test
- example folder
- run tests before build