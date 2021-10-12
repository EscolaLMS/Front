/* The markdown generator at multilines generates redundant `\` characters. This method removes them. */
export const trimContentForMarkdown = (content = ''): string => {
  return content
    .replaceAll(/(\\\r\n|\\r\n|\\\n|\\n)/g, '\n') // escaped and non escaped new line
    .split('\n')
    .map((r) => {
      // if row is empty then do nothing
      if (!r.trim().length) return r;

      // remove all artifacts
      const n = r.replace(/\\+/g, '');

      // if, after deleting the artefacts, the row is empty, it was indeed an artefact and we remove it
      return !n.trim().length ? n : r;
    })
    .join('\n');
};
