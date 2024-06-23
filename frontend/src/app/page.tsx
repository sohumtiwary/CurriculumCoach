// /src/app/page.tsx

import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Include your Navbar component */}

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">Welcome to Coach Curriculum!</h1>
        <div className="mt-4 text-lg text-center">
          <p>Just one step away from your individualized education plans</p>
          <Link href="/form">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
              Click me!
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
