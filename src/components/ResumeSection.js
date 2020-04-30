import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../styles/Resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// TODO: Download pdf
export default class ResumeSection extends React.Component {
	handleDownload = () => {
		console.log("hello");
	};

	// TODO: Might have to make it the width of the container
	render() {
		return (
			<div className="container">
				<div className="content">
					<h3>My Resume</h3>
					<div className="border" />
					<div className="horizontal">
						<div className="button space-right" onClick={this.handleDownload}>
							Download
						</div>
						<div className="button">Home</div>
					</div>
					<Document file="/resume.pdf">
						<Page pageNumber={1} />
					</Document>
				</div>
			</div>
		);
	}
}
