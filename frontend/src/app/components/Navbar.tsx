import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav style={{ backgroundColor: '#3a6ea5' }} className="text-white w-full p-4 fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <div className="text-white text-xl font-bold cursor-pointer">Home</div>
        </Link>
        <div className="flex space-x-4">
          <Link href="/about" passHref>
            <div className="text-white cursor-pointer">About</div>
          </Link>
          <Link href="/contact" passHref>
            <div className="text-white cursor-pointer">Contact Us</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
