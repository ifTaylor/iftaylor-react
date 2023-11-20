import { Container } from 'react-bootstrap';
import React from 'react';


function PDF() {
  const file = "./TaylorJTurnerResume.pdf";

  return (
    <Container className="flex-center blue-container">
        <iframe src={file} title="PDF Viewer" width="100%" height="1350px" />
    </Container>
  );
}

export default PDF;