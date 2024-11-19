import React from "react";
import "./Counter.css";

const Counter: React.FC = () => {
  const handleClick = () => {
    alert("Stored XSS");
  };

  return (
    <button className="counter-button" onClick={handleClick}>
      Click me
    </button>
  );
};

export default Counter;
