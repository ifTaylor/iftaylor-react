import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { RootLayout, Pages } from '../layouts';
import ContactForm from '../components/contact_form';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

function SocialMediaLinks({ handleDownload }) {
  return (
    <Container className="mt-3 flex-center">
      <Row>
        <Col>
        <Button className="blue-button" onClick={handleDownload}><FaDownload className="mr-1" /></Button>
        </Col>
        <Col>
          <a href="https://github.com/iftaylor"><FaGithub className="react-icons" /></a>
        </Col>
        <Col>
          <a href="https://www.linkedin.com/in/ifTaylorthenHire"><FaLinkedin className="react-icons" /></a>
        </Col>
      </Row>
    </Container>
  );
}

function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './TaylorJTurnerResume.pdf';
    link.download = 'TaylorJTurnerResume.pdf';
    link.click();
  };

  return (
    <Container>
      <RootLayout pages={Pages.Resume}>
        <Container className="mt-2 resume-container">
          <Image 
            src="./TaylorJTurnerResume.png" 
            alt="image" 
            style={{ width: '100%', padding: '10px' }} 
          />
        </Container>
        <SocialMediaLinks handleDownload={handleDownload} />
        <ContactForm/>
      </RootLayout>
    </Container>
  );
}

export default ResumePage;