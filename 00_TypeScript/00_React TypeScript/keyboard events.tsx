const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("Key pressed:", event.key);
  };
  
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("Key released:", event.key);
  };
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("Key pressed (deprecated in modern browsers)", event.key);
  };
  