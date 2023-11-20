import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer>
            <Container>
                <img src="./if_logo_blue.png" alt="Logo" style={{ maxWidth: '150px', maxHeight: '100px' }} />
                <div>&copy; 2023 ifTaylor</div>
            </Container>
        </footer>
    );
};

export default Footer;