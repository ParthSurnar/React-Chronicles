import { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import "./App.css";

const MAX_INCORRECT_GUESSES = 8; // Hangman has 8 parts → You lose after 8 incorrect guesses

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Correct & incorrect guesses
  const correctGuesses = guessedLetters.filter((letter) => wordToGuess.includes(letter));
  const incorrectGuesses = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

  // Check win/loss conditions
  const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter));
  const isLoser = incorrectGuesses.length >= MAX_INCORRECT_GUESSES; // Lose when full hangman is drawn

  // Handle key press
  const handleKeyPress = (key: string) => {
    if (!guessedLetters.includes(key) && !isWinner && !isLoser) {
      setGuessedLetters([...guessedLetters, key]);
    }
  };

  return (
    <div className="max-w-[800px] flex flex-col items-center mx-auto mt-2 gap-10 w-full">
      <h1 className="text-3xl font-bold">
        {isWinner ? "🎉 You Win!" : isLoser ? "💀 You Lose!" : "Guess the Word"}
      </h1>

      {/* Hangman Drawing - Appears based on incorrect guesses */}
      <HangmanDrawing incorrectGuesses={incorrectGuesses.length} />

      {/* Word Display (Shows guessed letters, incorrect ones fill in) */}
      <HangmanWord word={wordToGuess} guessedLetters={guessedLetters} />

      {/* Keyboard (Disabled if game is over) */}
      <Keyboard guessedLetters={guessedLetters} onKeyPress={handleKeyPress} disabled={isWinner || isLoser} />
    </div>
  );
}

export default App;
