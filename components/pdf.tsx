import { Container } from 'react-bootstrap';
import React from 'react';


function PDF() {
  const file = "./TaylorJTurnerResume.pdf";

  return (
    <Container className="flex-center blue-container">
        <iframe src={file} title="PDF Viewer" className="pdf-iframe" />
    </Container>
  );
}

export default PDF;