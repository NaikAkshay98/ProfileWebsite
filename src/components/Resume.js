import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import resumePDF from './AkshayNaik_Resume.pdf'; // Place your resume in the src/assets directory

function Resume() {
  return (
    <div className="resume-page">
      
      <div className="pdf-viewer">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
        <Viewer fileUrl={resumePDF} />
      </Worker>
      </div>
    </div>
  );
}

export default Resume;
