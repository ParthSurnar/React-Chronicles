const InputBox = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input value:", event.target.value);
    };
  
    return <input type="text" onChange={handleChange} />;
  };
  
  export default InputBox;
  