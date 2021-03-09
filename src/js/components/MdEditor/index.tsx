import React from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "./index.scss";
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt(/* Markdown-it options */);

const MdEditorComponent: React.FC<{
  getMarkDown: (e: string) => void;
  height?: string;
}> = ({ getMarkDown, height = "500px" }) => {
  const handleEditorChange = ({ text }: { text: string }) => {
    getMarkDown(text);
  };
  return (
    <div className="md-editor">
      <MdEditor
        style={{ height }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default MdEditorComponent;
