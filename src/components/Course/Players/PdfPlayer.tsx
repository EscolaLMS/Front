import React, { ReactElement, FunctionComponent, useEffect, useState } from 'react';

import { Document, Page, pdfjs } from 'react-pdf';

const PdfPlayer: FunctionComponent<{
  url: string;
  onLoad?: () => void;
}> = ({ url, onLoad }): ReactElement => {
  const [allPages, setAllPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (currentPage === allPages) {
      onLoad && onLoad();
    }
  }, [allPages, currentPage]);

  if (!url) {
    return <p>Document not found.</p>;
  }

  return (
    <div className="pdf-wrapper">
      {isMounted && url && (
        <Document
          loading="Loading..."
          onLoadSuccess={({ numPages }) => setAllPages(numPages)}
          file={url}
        >
          <Page pageNumber={currentPage} />
        </Document>
      )}

      {allPages && allPages > 1 && (
        <div className="pdf-wrapper__buttons">
          <p>
            <strong>{currentPage}</strong> of <strong>{allPages}</strong>
          </p>
          {currentPage > 1 && (
            <button
              className="default-btn"
              onClick={() => setCurrentPage(currentPage - 1)}
            ></button>
          )}

          {allPages > currentPage && (
            <button
              className="default-btn"
              onClick={() => setCurrentPage(currentPage + 1)}
            ></button>
          )}
        </div>
      )}
    </div>
  );
};

export default PdfPlayer;
