import React from "react";

type HangmanDrawingProps = {
  incorrectGuesses: number; // Track only wrong guesses
};

const bodyParts = [
 
  <div key="head" className="h-[50px] w-[50px] rounded-full border-[10px] absolute top-[50px] right-[-20px]" />, // Head
  <div key="body" className="h-[100px] w-[10px] bg-black absolute top-[100px] right-0" />, // Body
  <div key="rightArm" className="h-[10px] w-[100px] bg-black absolute top-[120px] right-[-90px] rotate-[-30deg]" />, // Right Arm
  <div key="leftArm" className="h-[10px] w-[100px] bg-black absolute top-[120px] right-0 rotate-[30deg]" />, // Left Arm
  <div key="rightLeg" className="h-[10px] w-[100px] bg-black absolute top-[230px] right-[-70px] rotate-[60deg]" />, // Right Leg
  <div key="leftLeg" className="h-[10px] w-[100px] bg-black absolute top-[230px] right-[-20px] rotate-[-60deg]" />, // Left Leg
];

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ incorrectGuesses }) => {
  return (
    <div className="relative">
      {/* Hangman Stand */}
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[50px] w-[10px] bg-black ml-[120px] absolute top-0 right-0" />
      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />

      {/* Reveal body parts gradually based on incorrect guesses */}
      {bodyParts.slice(0, incorrectGuesses)}
    </div>
  );
};

export default HangmanDrawing;
