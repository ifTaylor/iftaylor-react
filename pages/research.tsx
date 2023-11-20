import { Container } from 'react-bootstrap';
import { RootLayout, Pages } from '../layouts';
import ContactForm from '../components/contact_form';

function ResearchPage() {
  return (
    <Container>
      <RootLayout pages={Pages.Research}>
        <ContactForm/>
      </RootLayout>
    </Container>
  );
}

export default ResearchPage;
