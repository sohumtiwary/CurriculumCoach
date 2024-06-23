import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Navbar /> {/* Include your Navbar component */}
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">This is the contact us page.</p>
    </main>
  );
};

export default Contact;
