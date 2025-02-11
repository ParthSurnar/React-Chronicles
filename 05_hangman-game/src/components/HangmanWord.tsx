const HangmanWord = () => {
  const word = "hello";
  const guessedLetters = ["h", "e", "l"];
  return (
    <div className="flex justify-center items-center gap-4 text-8xl font-bold uppercase ">
      {word.split("").map((letter, index) => (
        <div key={index} className="border-b-4 border-black  text-center">
        <span>{guessedLetters.includes(letter) ? letter : "_"} </span>
        </div>
      ))}
    </div>

  )
}

export default HangmanWord
