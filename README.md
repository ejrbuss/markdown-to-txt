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

`markdownToTxt` allows for options object to be passed as a second argument. The following options are available:

| Option | Default | Description |
|-|-|-|
| escapeHtml | `true` | Escapes HTML in the final string |
| gfp | `true` | Uses GitHub flavour markdown (passed through to marked) |
| pedantic | `false` | Conform to markdown<i></i>.pl (passed through to marked) |

## Contact

Feel free to send be bug reports or feature requests. If you are interested in my other work, checkout my [website](https://ejrbuss.net).

Email root@ejrbuss.net