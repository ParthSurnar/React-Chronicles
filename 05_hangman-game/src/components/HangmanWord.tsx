import React from "react";

type HangmanWordProps = {
  word: string;
  guessedLetters: string[];
};

const HangmanWord: React.FC<HangmanWordProps> = ({ word, guessedLetters }) => {
  return (
    <div className="flex justify-center items-center gap-4 text-8xl font-bold uppercase">
      {word.split("").map((letter, index) => (
        <div key={index} className="border-b-4 border-black text-center w-16">
          <span className={guessedLetters.includes(letter) ? "visible" : "invisible"}>
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HangmanWord;
