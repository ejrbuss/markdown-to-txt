import marked, { Renderer } from 'marked';

/* Using lodash escape implementation: https://github.com/lodash/lodash/blob/master/escape.js */
const htmlEscapes: { [chr: string]: string } = {
    '&': '&amp',
    '<': '&lt',
    '>': '&gt',
    '"': '&quot',
    "'": '&#39',
};
  
const reUnescapedHtml    = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

const escapeHtml = (string: string): string => {
    if (string && reHasUnescapedHtml.test(string)) {
        return string.replace(reUnescapedHtml, (chr) => htmlEscapes[chr]);
    } else {
        return string;
    }
};

interface IMarkdownToTxtOptions {
    escapeHtml?: boolean;
    gfm?: boolean,
    pedantic?: boolean,
}

const blockFn   = (block: string) => block + '\n';
const inlineFn  = (text: string) => text;
const newlineFn = () => '\n';
const emptyFn   = () => '';

const renderer: Renderer = {
    // Block elements
    code:       blockFn,
    blockquote: blockFn,
    html:       emptyFn,
    heading:    blockFn,
    hr:         emptyFn,
    list:       blockFn,
    listitem:   (text) => blockFn(text),
    paragraph:  blockFn,
    table:      (header, body) => blockFn(header) + blockFn(body),
    tablerow:   blockFn,
    tablecell:  blockFn,
    // Inline elements
    strong:   inlineFn,
    em:       inlineFn,
    codespan: inlineFn,
    br:       newlineFn,
    del:      inlineFn,
    link:     (_0, _1, text) => inlineFn(text),
    image:    (_0, _2, text) => inlineFn(text),
    text:     inlineFn,
};

/**
 * Converts markdown to plaintext. Accepts an option object with the following
 * fields:
 * 
 *  - escapeHtml (default: true) Escapes HTML in the final string
 *  - gfp (default: true) Uses github flavor markdown (passed through to marked)
 *  - pedantic (default: false) Conform to markdown.pl (passed through to marked)
 * 
 * @param markdown the markdown to convert
 * @param options  the options to apply
 * @returns the unmarked string (plain text)
 */
export default function markdownToTxt(markdown?: string, options: IMarkdownToTxtOptions = {
    escapeHtml: true,
    gfm:        true,
    pedantic:   false,
}): string {
    if (markdown) {
        const unmarked = marked(markdown, { 
            gfm: options.gfm,
            pedantic: options.pedantic,
            renderer: renderer,
        });

        if (options.escapeHtml) {
            return escapeHtml(unmarked);
        }
        return unmarked;
    }
    return '';
}