import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MarkdownImage from './../MarkdownImage';
import { trimContentForMarkdown } from '../../utils/trim';
import MarkdownTable from './../MarkdownTable';

const ReactMarkdownWithTrim: React.FC<{ children?: string }> = ({ children = '' }) => {
  return (
    <ReactMarkdown
      components={{
        img: ({ node, ...props }) => <MarkdownImage {...props} />,
        table: ({ node, ...props }) => <MarkdownTable {...props} />,
      }}
      remarkPlugins={[remarkGfm]}
      linkTarget="_blank"
    >
      {trimContentForMarkdown(children)}
    </ReactMarkdown>
  );
};

export default ReactMarkdownWithTrim;
