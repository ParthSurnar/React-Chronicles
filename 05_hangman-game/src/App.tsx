// Code for the App component
import { useState } from "react";
import "./App.css";

function App() {

  const [wordToGuess, setWordToGuess] = useState("test");

  return (
    <>
      <h1 className="text-2xl ">HangMan Project</h1>
    </>
  );
}

export default App;
