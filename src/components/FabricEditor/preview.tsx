import React from 'react';
import { jsPDF } from 'jspdf';
import 'svg2pdf.js';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { fabric } from 'fabric';

import './index.css';

// TODO: create a package for this to minimize front bundle size

export const FabricPreview: React.FC<{
  onRendered: () => void;
  initialValue: any;
  width?: number;
  height?: number;
}> = ({ initialValue, width = 842, height = 592, onRendered }) => {
  const { onReady } = useFabricJSEditor();

  const onCanvasReady = (canvas: fabric.Canvas) => {
    if (initialValue) {
      try {
        const data = initialValue;

        canvas.loadFromJSON(data, () => {
          const svgDef = canvas.toSVG();
          const doc = new jsPDF('l', 'px', [width, height]);

          const parser = new DOMParser();
          const element = parser.parseFromString(svgDef, 'image/svg+xml');

          doc.svg(element.documentElement).then(() => {
            doc.save('myPDF.pdf');
            onRendered();
          });
        });
      } catch (err) {
        // this is not a json
      }
    }
    onReady(canvas);
  };

  return (
    <div className="fakeA4" style={{ width, height }}>
      <FabricJSCanvas className="fakeA4-canvas" onReady={onCanvasReady} />
    </div>
  );
};

export default FabricPreview;
