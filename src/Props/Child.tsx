import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const Child: React.FC<ChildProps> = ({ color, children, onClick }) => {
  return (
    <div>
      {color} {children}
      <button onClick={onClick}>Button</button>
    </div>
  );
};

export default Child;
