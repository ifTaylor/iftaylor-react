import { Container } from 'react-bootstrap';
import { RootLayout, Pages } from '../layouts';
import ContactForm from '../components/contact_form';

function HobbiesPage() {
  return (
    <Container>
      <RootLayout pages={Pages.Hobbies}>
        <ContactForm/>
      </RootLayout>
    </Container>
  );
}

export default HobbiesPage;
