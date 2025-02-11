// Code for the App component
import { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import "./App.css";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <>
      <div className="max-w-[800px] flex flex-col items-center mx-auto mt-2 gap-10 w-full">
  <div className="flex flex-col items-center text-center w-full">
    <div className="text-3xl font-bold mb-2">Lose Win</div>
    <HangmanDrawing />
    <HangmanWord />
    
    {/* Force keyboard to stretch */}
    <div className="w-full">
      <Keyboard />
    </div>
  </div>
</div>

    </>
  );
}

export default App;
