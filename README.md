# markdown-to-txt

Converts markdown to plain text. Uses [marked](https://www.npmjs.com/package/marked) to correctly parse and produce a clean version of the text. This correctly handles markdown elements like code blocks, unlike similar libraries. TypeScript declarations are provided out of the box.

## Installation

To install

```
npm install markdown-to-txt
```

# Usage

`markdown-to-txt` exports a single function for conversion. Call it like so

```js
const { markdownToTxt } = require('markdown-to-txt');

markdownToTxt('Some *quoted* `*code*`'); // "Some quoted *code*"
```

Or in TypeScript/ES modules

```ts
import markdownToTxt from 'markdown-to-txt';

markdownToTxt('Some *quoted* `*code*`'); // "Some quoted *code*"
```

`markdownToTxt` accepts [MarkedOptions](https://marked.js.org/using_advanced#options)
as its second argument.

**NOTE:** The output of markdownToTxt is **not** sanitized. The output may contain
valid HTML, JavaScript, etc. Be sure to sanitize if the output is intended for
web use.

## Changelog

 - **2.0.0**
	- Options argument for `markdownToTxt` changed to align with latest version of marked.
	- `escapeHtml` option removed

## Contact

Feel free to send be bug reports or feature requests. If you are interested in my other work, checkout my [website](https://ejrbuss.net).

Email root@ejrbuss.net
