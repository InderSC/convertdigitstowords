# convertdigitstowords
Module to convert numbers (from 1-1000) to words up to two decimal places

# Install

```js
npm i convertdigitstowords
```

# Example

```js
0.12     ->  twelve cents
6       ->  six dollars
902     ->  nine hundred and two dollars
120.62  -> one hundred twenty dollars and sixty two cents
```

# Usage

```js
const numToWords = require('convertdigitstowords');
console.log(numToWords.convertDigitsToWords(902)); //nine hundred and two dollars
```

_Note: This module only supports digits between 1 to 1000 

# Usage
The unit test script has also been added called test.js. For testing directly inside node module go inside converdigitstowords folder andrun <pre>node test</pre>
