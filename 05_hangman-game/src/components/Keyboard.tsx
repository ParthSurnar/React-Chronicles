import React from "react";

type KeyboardProps = {
  guessedLetters: string[];
  onKeyPress: (key: string) => void;
  disabled: boolean; // Ensure this is required
};


const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Keyboard: React.FC<KeyboardProps> = ({ guessedLetters, onKeyPress, disabled }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] w-full max-w-[800px] mx-auto gap-2 p-4">
      {keys.map((key) => {
        const isGuessed = guessedLetters.includes(key.toLowerCase());
        const isIncorrect = isGuessed && !disabled;

        return (
          <button
            key={key}
            onClick={() => onKeyPress(key.toLowerCase())}
            disabled={isGuessed || disabled}
            className={`py-3 rounded uppercase cursor-pointer 
              h-full flex items-center justify-center shadow-md transition-transform active:scale-95
              ${isGuessed ? "bg-gray-500 text-white cursor-not-allowed" : "bg-gray-300 text-gray-800"}
              ${isIncorrect ? "bg-red-500 text-white" : ""}
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
