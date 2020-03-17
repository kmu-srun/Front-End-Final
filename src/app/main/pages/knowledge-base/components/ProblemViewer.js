import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// class ProblemViewer extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1
//   };

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   render() {
//     const { pageNumber, numPages } = this.state;

//     return (
//       <div> 
//         <Document
//           file="/assets/PDF/1.pdf"
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     );
//   }
// }

// export default ProblemViewer;

export default class Test extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = document => {
    const { numPages } = document;
    this.setState({
      numPages,
      pageNumber: 1
    });
  };

  changePage = offset =>
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + offset
    }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);

  render() {
    const { numPages, pageNumber } = this.state;

    return (
      <React.Fragment>
        <div className="flex flex-col flex-shrink-0 sm:flex-row items-center justify-between py-24">
          <p className="flex w-full sm:w-320 mb-16 sm:mb-0 mx-16">
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          {/* <ButtonGroup
            className="flex w-full sm:w-320 mx-16"
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          > */}
          <Button disabled={pageNumber <= 1} onClick={this.previousPage} color="primary">
              PREVIOUS
            </Button>
          <Button disabled={pageNumber >= numPages} onClick={this.nextPage} color="primary">
              NEXT
            </Button>
        </div>
        <Document
          file="/assets/PDF/1.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </React.Fragment>
    );
  }
}
