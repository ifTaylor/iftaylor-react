import React, { useState, useEffect } from 'react';
import { RootLayout, Pages } from '../layouts';
import ContactForm from '../components/contact_form';
import HeaderMessage from '../components/header_message';

function HomePage() {
  return (
    <div>
      <HeaderMessage/>
      <RootLayout pages={Pages.Home}>
          <ContactForm/>
      </RootLayout>
    </div>
  );
}

export default HomePage;
