import React, {
  ReactElement,
  FunctionComponent,
  useState,
  useEffect,
} from "react";

import { Document, Page, pdfjs } from "react-pdf";
import Button from "../../../FormElements/Button/Button";

import "./index.scss";

const PdfViewer: FunctionComponent<{
  url?: string;
  onLoad: () => void;
}> = ({ url, onLoad }): ReactElement => {
  const [allPages, setAllPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    setIsMounted(true);
    onLoad();
    return () => setIsMounted(false);
  }, []);

  if (!url) {
    return <p>Document not found.</p>;
  }

  return (
    <div className="pdf-wrapper">
      {isMounted && url && (
        <Document
          onLoadSuccess={({ numPages }) => setAllPages(numPages)}
          file={url}
        >
          <Page pageNumber={currentPage} />
        </Document>
      )}
      <p>
        Page <strong>{currentPage}</strong> of <strong>{allPages}</strong>
      </p>
      {allPages && allPages > 1 && (
        <div className="pdf-wrapper__buttons">
          {currentPage > 1 && (
            <Button
              className="grey"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              prev
            </Button>
          )}
          {allPages > currentPage && (
            <Button
              className="grey"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              next
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
