import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Curriculum() {
  // @ts-expect-error This does not exist outside of polyfill which this is doing
  if (typeof Promise.withResolvers === "undefined") {
    if (window)
      // @ts-expect-error This does not exist outside of polyfill which this is doing
      window.Promise.withResolvers = () => {
        // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
        // biome-ignore lint/style/useSingleVarDeclarator: <explanation>
        let resolve, reject;
        const promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return { promise, resolve, reject };
      };
  }

  const pdfUrl = "/curriculoTifany.pdf";
  const [numPages, setNumPages] = useState<number | null>(null);
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}
