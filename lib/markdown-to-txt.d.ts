interface IMarkdownToTxtOptions {
    escapeHtml?: boolean;
    gfm?: boolean;
    pedantic?: boolean;
}
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
export declare function markdownToTxt(markdown?: string, options?: IMarkdownToTxtOptions): string;
export default markdownToTxt;
