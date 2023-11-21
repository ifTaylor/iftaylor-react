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
      <Row>
        <Col>
          <Navbar expand="lg" className="navbar-light">
            <Container>
              <Navbar.Brand href={Pages.Home}>
                <img src="./if_logo_white.png" alt="if Logo" style={{ maxWidth: '250px', maxHeight: '150px' }} />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="navbarNav"
              />
              <Navbar.Collapse id="navbarNav">
                <Nav className="ml-auto" style={{ display: 'flex', flexDirection: 'row' }}>
                  {Object.values(Pages).map((page) => (
                    <Nav.Link
                      key={page}
                      href={page}
                      active={currentPage === page}
                      className={currentPage === page ? "underlined" : ""}
                      style={{ marginRight: '10px' }}
                    >
                      {PageNames[page]}
                    </Nav.Link>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};