import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image'; // Using next/image for optimized image loading

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Include your Navbar component */}
      <main className="flex-1 flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">A job is worth doing together</h1>
        <p className="text-center text-lg mb-16">
          Meet the dedicated team behind Curriculum Coach.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/images/team/huy-duong.jpeg" // Replace with the correct path to the image
                alt="Huy Duong"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl font-semibold">Huy Duong</h2>
            <p>Founder</p>
            <a href="https://www.linkedin.com/in/huy-n-duong/" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/linkedin-icon.svg" alt="LinkedIn" className="mt-2 w-6 h-6" />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/images/team/david-song.jpeg" // Replace with the correct path to the image
                alt="David Song"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl font-semibold">David Song</h2>
            <p>Founder</p>
            <a href="https://www.linkedin.com/in/davidthesong/" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/linkedin-icon.svg" alt="LinkedIn" className="mt-2 w-6 h-6" />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/images/team/sohum-tiwary.jpeg" // Replace with the correct path to the image
                alt="Sohum Tiwary"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl font-semibold">Sohum Tiwary</h2>
            <p>Founder</p>
            <a href="https://www.linkedin.com/in/sohum-tiwary/" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/linkedin-icon.svg" alt="LinkedIn" className="mt-2 w-6 h-6" />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/images/team/jonathan-wu.jpeg" // Replace with the correct path to the image
                alt="Jonathan Wu"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl font-semibold">Jonathan Wu</h2>
            <p>Founder</p>
            <a href="https://www.linkedin.com/in/wujonathane/" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/linkedin-icon.svg" alt="LinkedIn" className="mt-2 w-6 h-6" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
