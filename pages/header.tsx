import React, { useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Pages, PageNames } from '../layouts';

interface HeaderProps {
  currentPage: Pages
}

export default function Header(
  {
    currentPage
  }: HeaderProps
) {
  return (
    <Container>
      <Navbar expand="lg" className="navbar-light">
        <Container>
          <Row>
            <Col>
              <Container className="flex-center">
                <Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Brand href={Pages.Home}>
                  <img src="./if_logo_white.png" alt="if Logo" style={{ maxWidth: '250px', maxHeight: '150px' }} />
                </Navbar.Brand>
              </Container>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <Navbar.Collapse id="navbarNav">
                <Nav className="ml-auto">
                  {Object.values(Pages).map((page) => {
                    return (
                      <Nav.Link
                        key={page}
                        href={page}
                        active={currentPage === page}
                        className={currentPage === page ? "underlined" : ""}
                      >
                        {PageNames[page]}
                      </Nav.Link>
                    )
                  })}
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Container>
  );
};
