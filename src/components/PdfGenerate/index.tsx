import React from "react";
import { jsPDF } from "jspdf";
import "svg2pdf.js";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { fabric } from "fabric";
import { arialBoldFont } from "./fonts/arial/bold";
import { arialNormalFont } from "./fonts/arial/normal";
import { arialItalicFont } from "./fonts/arial/italic";
import { verdanaFont } from "./fonts/verdana/normal";
import { verdanaBoldFont } from "./fonts/verdana/bold";
import { verdanaItalicFont } from "./fonts/verdana/italic";
import { timesNewRomanFont } from "./fonts/timesNewRoman/normal";
import { timesNewRomanBoldFont } from "./fonts/timesNewRoman/bold";
import { timesNewRomanItalicFont } from "./fonts/timesNewRoman/italic";
import { georgiaFont } from "./fonts/georgia/normal";
import { georgiaBoldFont } from "./fonts/georgia/bold";
import { georgiaItalicFont } from "./fonts/georgia/italic";
import { arialBoldItalicFont } from "./fonts/arial/bolditalic";
import { verdanaBoldItalicFont } from "./fonts/verdana/bolditalic";
import { timesNewRomanBoldItalicFont } from "./fonts/timesNewRoman/bolditalic";
import { georgiaBoldItalicFont } from "./fonts/georgia/bolditalic";
import "./index.css";

export const fonts: Record<string, string[]> = {
  arial: ["Arial", "Arial Bold", "Arial Italic", "Arial Bold Italic"],
  verdana: ["Verdana", "Verdana Bold", "Verdana Italic", "Verdana Bold Italic"],
  "times new roman": [
    "Times New Roman",
    "Times New Roman Bold",
    "Times New Roman Italic",
    "Times New Roman Bold Italic",
  ],
  georgia: ["Georgia", "Georgia Bold", "Georgia Italic", "Georgia Bold Italic"],
};

export const setFonts = (doc: any) => {
  // ARIAL
  doc.addFileToVFS("Arial-normal.ttf", arialNormalFont);
  doc.addFont("Arial-normal.ttf", "Arial", "normal");
  doc.addFileToVFS("Arial Bold-normal.ttf", arialBoldFont);
  doc.addFont("Arial Bold-normal.ttf", "Arial Bold", "bold");
  doc.addFileToVFS("Arial Italic-normal.ttf", arialItalicFont);
  doc.addFont("Arial Italic-normal.ttf", "Arial Italic", "italic");
  doc.addFileToVFS("Arial Bold Italic-normal.ttf", arialBoldItalicFont);
  doc.addFont(
    "Arial Bold Italic-normal.ttf",
    "Arial Bold Italic",
    "bolditalic"
  );

  // VERDANA
  doc.addFileToVFS("Verdana-normal.ttf", verdanaFont);
  doc.addFont("Verdana-normal.ttf", "Verdana", "normal");
  doc.addFileToVFS("Verdana Bold-normal.ttf", verdanaBoldFont);
  doc.addFont("Verdana Bold-normal.ttf", "Verdana Bold", "bold");
  doc.addFileToVFS("Verdana Italic-normal.ttf", verdanaItalicFont);
  doc.addFont("Verdana Italic-normal.ttf", "Verdana Italic", "italic");
  doc.addFileToVFS("Verdana Bold Italic-normal.ttf", verdanaBoldItalicFont);
  doc.addFont(
    "Verdana Bold Italic-normal.ttf",
    "Verdana Bold Italic",
    "bolditalic"
  );

  // TIMES NEW ROMAN
  doc.addFileToVFS("Times New Roman-normal.ttf", timesNewRomanFont);
  doc.addFont("Times New Roman-normal.ttf", "Times New Roman", "normal");
  doc.addFileToVFS("Times New Roman Bold-normal.ttf", timesNewRomanBoldFont);
  doc.addFont(
    "Times New Roman Bold-normal.ttf",
    "Times New Roman Bold",
    "bold"
  );
  doc.addFileToVFS(
    "Times New Roman Italic-normal.ttf",
    timesNewRomanItalicFont
  );
  doc.addFont(
    "Times New Roman Italic-normal.ttf",
    "Times New Roman Italic",
    "italic"
  );
  doc.addFileToVFS(
    "Times New Roman Bold Italic-normal.ttf",
    timesNewRomanBoldItalicFont
  );
  doc.addFont(
    "Times New Roman Bold Italic-normal.ttf",
    "Times New Roman Bold Italic",
    "bolditalic"
  );

  //GEORGIA
  doc.addFileToVFS("Georgia-normal.ttf", georgiaFont);
  doc.addFont("Georgia-normal.ttf", "Georgia", "normal");
  doc.addFileToVFS("Georgia Bold-normal.ttf", georgiaBoldFont);
  doc.addFont("Georgia Bold-normal.ttf", "Georgia Bold", "bold");
  doc.addFileToVFS("Georgia Italic-normal.ttf", georgiaItalicFont);
  doc.addFont("Georgia Italic-normal.ttf", "Georgia Italic", "italic");
  doc.addFileToVFS("Georgia Bold Italic-normal.ttf", georgiaBoldItalicFont);
  doc.addFont(
    "Georgia Bold Italic-normal.ttf",
    "Georgia Bold Italic",
    "bolditalic"
  );
};

const fontsManager = (collection: NodeListOf<SVGTextElement>) => {
  let missedFont: string;
  let missedFontSize: string;

  collection.forEach((text: SVGTextElement) => {
    (text.childNodes as NodeListOf<SVGTSpanElement>).forEach(
      (tspan: SVGTSpanElement) => {
        const currFont = tspan.style.fontFamily;
        const currFontSize = tspan.style.fontSize;

        const findedFont = Object.keys(fonts).filter(
          (t) => currFont.replace(/['"]+/g, "").toLowerCase() === t
        )[0];

        if (findedFont) {
          if (
            tspan.style.fontWeight === "bold" &&
            tspan.style.fontStyle === "italic"
          ) {
            tspan.style.fontFamily = `${fonts[findedFont][3]}`;
            missedFont = `${fonts[findedFont][3]}`;
            missedFontSize = currFontSize;
          } else if (tspan.style.fontWeight === "bold") {
            tspan.style.fontFamily = `${fonts[findedFont][1]}`;
            missedFont = `${fonts[findedFont][1]}`;
            missedFontSize = currFontSize;
          } else if (tspan.style.fontStyle === "italic") {
            tspan.style.fontFamily = `${fonts[findedFont][2]}`;
            missedFont = `${fonts[findedFont][2]}`;
            missedFontSize = currFontSize;
          } else {
            tspan.style.fontFamily = `${fonts[findedFont][0]}`;
            missedFont = `${fonts[findedFont][0]}`;
            missedFontSize = currFontSize;
          }
        } else {
          // this is for vars like @VarUserName
          tspan.style.fontFamily = missedFont;
          if (missedFont.includes("Bold Italic")) {
            tspan.style.fontWeight = "bold";
            tspan.style.fontStyle = "italic";
            tspan.style.fontSize = missedFontSize;
          } else if (missedFont.includes("Bold")) {
            tspan.style.fontWeight = "bold";
            tspan.style.fontSize = missedFontSize;
          } else if (missedFont.includes("Italic")) {
            tspan.style.fontStyle = "italic";
            tspan.style.fontSize = missedFontSize;
          } else {
            tspan.style.fontWeight = "normal";
            tspan.style.fontSize = missedFontSize;
          }
        }
      }
    );
  });
};

export const PdfGenerate: React.FC<{
  onRendered: () => void;
  initialValue: Record<string, string>;
  width?: number;
  height?: number;
}> = ({ initialValue, width = 840, height = 592, onRendered }) => {
  const { onReady } = useFabricJSEditor();

  const onCanvasReady = (canvas: fabric.Canvas) => {
    if (initialValue) {
      try {
        const data =
          typeof initialValue === "string"
            ? JSON.parse(initialValue)
            : initialValue;

        canvas.loadFromJSON(data, () => {
          const svgDef = canvas.toSVG();

          const doc = new jsPDF("l", "px", [width, height]);
          setFonts(doc);
          const parser = new DOMParser();
          const element = parser.parseFromString(svgDef, "image/svg+xml");
          const bg = element.documentElement.querySelector("rect");
          const texts = element.documentElement.querySelectorAll("text");

          // hack for background
          // svg2pdf.js don't support % units (for now)

          if (bg) {
            bg.setAttribute("width", width + "px");
            bg.setAttribute("height", height + "px");
          }

          if (texts) {
            fontsManager(texts);
          }
          doc.svg(element.documentElement).then(() => {
            doc.save("myPDF.pdf");
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
    <div className={"fakeA4"} style={{ width, height }}>
      <FabricJSCanvas className="fakeA4-canvas" onReady={onCanvasReady} />
    </div>
  );
};

export default PdfGenerate;
