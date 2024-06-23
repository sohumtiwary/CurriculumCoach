// pages/index.tsx

import React from 'react';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Include your Navbar component */}

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">Welcome to Coach Curriculum!</h1>
         <div className="mt-4 text-lg text-center"> {/* Use a div instead of p */}
            <p>Just one step away from your individualized education plans</p>
        </div>
      </main>

    </div>
  );
};

export default Home;
