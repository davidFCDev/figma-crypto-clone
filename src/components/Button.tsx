import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-blue-gradient px-10 py-4 uppercase font-semibold tracking-widest text-sm small:text-base rounded-sm">
      {text}
    </button>
  );
};

export default Button;

