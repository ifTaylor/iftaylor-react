import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, ListGroup } from 'react-bootstrap';
import { RootLayout, Pages } from '../layouts';
import ContactForm from '../components/contact_form';
import PDF from '../components/pdf';

function ResumePage() {
  return (
    <Container>
      <RootLayout pages={Pages.Resume}>
        <PDF/>
        <ContactForm/>
      </RootLayout>
    </Container>
  );
}

export default ResumePage;
