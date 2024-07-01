// components/share/Button.tsx

import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        className="p-2 max-w-52 max-h-36 text-xl font-semibold rounded-full border border-white text-indigo-500 flex items-center justify-center transition duration-300 ease-in-out mx-auto group"
        onClick={onClick}
      >
        <span>{label}</span>
        <span className="ml-2 transform transition-transform duration-300 ease-in-out group-hover:-rotate-45 text-white">→</span>
      </button>
    </div>
  );
};

export default Button;
