// /src/app/form/page.tsx
"use client"; // This is a client component 

import React from 'react';
import Navbar from '../components/Navbar';
import ContactWithState from '../components/ContactWithState';

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Navbar /> {/* Include your Navbar component */}
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">Let us know if you had any questions or feedback!</p>

      {/* Render the ContactWithState component */}
      <ContactWithState />
    </main>
  );
};

export default Contact;
