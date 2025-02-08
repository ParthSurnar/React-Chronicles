import React from "react";

/* 📌 Handling Button Click Event */
const ButtonComponent: React.FC = () => {
  const handleClick = () => {
    alert("Button Clicked! 🚀");
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default ButtonComponent;
