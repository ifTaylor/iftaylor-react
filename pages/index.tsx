import React, { useState, useEffect } from 'react';
import { RootLayout, Pages } from '../layouts';
import ContactForm from '../components/contact_form';
import HeaderMessage from '../components/header_message';

function HomePage() {
  const backgroundImage = "./vector_poles.bmp";

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <HeaderMessage/>
      <RootLayout pages={Pages.Home}>
      </RootLayout>
    </div>
  );
}

export default HomePage;
