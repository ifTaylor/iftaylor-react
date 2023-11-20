import React, { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);


  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!formData.name || !formData.email) {
      setMessage('Name and Number are required fields.');
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch('/api/submit_form', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        setMessage('Email sent, Taylor will get back to you soon!');
      } else {
        setMessage('Error sending email. Please email at resume.tturner@gmail.com');
      }
    } catch (error) {
      setMessage('Network error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="container-padding">
      <div className="contact">
        <Row className="center-container">
          <Col>
            <div>Reach out!</div>
            <div>Email: <a href="mailto:kim@pristinestl.com">resume.tturner@gmail.com</a></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form className="item-padding blue-container" id="contactForm" onSubmit={handleSubmit}>
              <Form.Label>Name:</Form.Label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                placeholder="(Required)"
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Label>Email:</Form.Label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="(Required)"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Label>Phone Number:</Form.Label>
              <input
                type="phone"
                className="form-control"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="message">Message:</label>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </Card.Text>
                </Card.Body>
              </Card>
              {message && (
                <div className={message.includes('Error') ? 'error-message' : 'success-message'}>
                  {message}
                </div>
              )}
              <button type="submit" id="sendButton" className={`btn btn-secondary ${loading ? 'disabled' : ''}`}>
                {loading ? (
                  <span>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...
                  </span>
                ) : (
                  'Send'
                )}
              </button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ContactForm;
