import React from "react";

type KeyboardProps = {
  keys?: string[]; //  Optional, will use default inside function
  onKeyPress?: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({
  keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), // Default value
  onKeyPress
}) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] w-full max-w-[800px] mx-auto gap-2 p-4">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => onKeyPress && onKeyPress(key)}
          className="bg-gray-300 text-gray-800 font-bold py-3 rounded uppercase cursor-pointer 
                     active:bg-gray-400 h-full flex items-center justify-center shadow-md 
                     transition-transform active:scale-95"
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
