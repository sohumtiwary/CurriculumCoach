import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import './globals.css';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-home-background bg-cover bg-center">
      <Navbar /> {/* Include your Navbar component */}

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-24 bg-opacity-75 bg-black">
        <h1 className="text-4xl font-bold">Welcome to Coach Curriculum!</h1>
        <div className="mt-4 text-lg text-center">
          <p>Just one step away from your individualized education plans</p>
          <Link href="/form">
          <div
              style={{ backgroundColor: '#bc4749', color: 'white' }}
              className="font-bold py-2 px-4 rounded mt-4 cursor-pointer custom-hover"
            >
              Click me!
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
