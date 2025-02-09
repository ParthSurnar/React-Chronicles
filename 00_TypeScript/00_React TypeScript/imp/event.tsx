const Button = () => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("Button clicked!", event);
    };
  
    return <button onClick={handleClick}>Click me</button>;
  };
  
  export default Button;
  