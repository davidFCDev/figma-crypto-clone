import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-blue-gradient px-7 py-3 uppercase font-semibold tracking-widest">
      {text}
    </button>
  );
};

export default Button;

