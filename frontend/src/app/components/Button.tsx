// components/Button.tsx

import React from 'react';

interface ButtonProps {
  to: string; // URL to navigate to
  text: string; // Text to display on the button
  className?: string; // Optional CSS classes for styling
}

const Button: React.FC<ButtonProps> = ({ to, text, className }) => {
  const handleClick = () => {
    window.location.href = to; // Navigate to the specified URL
  };

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
