// Code for the App component
import { useState } from "react";
import words from "./wordList.json";
import "./App.css";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  console.log({ wordToGuess });

  return (
    <>
      <h1 className="text-2xl ">HangMan Project</h1>
    </>
  );
}

export default App;
