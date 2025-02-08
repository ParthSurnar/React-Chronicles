import React from "react";

/* 📌 Defining Props Interface */
interface GreetingProps {
  name: string;
  age?: number; // Optional prop
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      {age && <p>Age: {age}</p>}
    </div>
  );
};

export default Greeting;
