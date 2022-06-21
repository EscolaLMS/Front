import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { fixContentForMarkdown } from "../../utils/markdown";
import MarkdownImage from "./MarkdownImage";
import MarkdownTable from "./MarkdownTable";

export const MarkdownReader: React.FC<{
  children?: string;
  remarkPlugins?: React.ComponentProps<typeof ReactMarkdown>["remarkPlugins"];
  rehypePlugins?: React.ComponentProps<typeof ReactMarkdown>["rehypePlugins"];
}> = ({ children = "", remarkPlugins = [], rehypePlugins = [] }) => {
  return (
    <ReactMarkdown
      components={{
        img: ({ node, ...props }) => <MarkdownImage {...props} />,
        table: ({ node, ...props }) => <MarkdownTable {...props} />,
      }}
      remarkPlugins={[remarkGfm, ...remarkPlugins]}
      rehypePlugins={[rehypeRaw, ...rehypePlugins]}
      linkTarget="_blank"
    >
      {fixContentForMarkdown(children)}
    </ReactMarkdown>
  );
};

export default MarkdownReader;
