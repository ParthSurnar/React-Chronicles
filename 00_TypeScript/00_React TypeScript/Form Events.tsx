const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input changed:", event.target.value);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents page reload
    console.log("Form submitted!");
  };
  
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log("Input focused");
  };
  
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log("Input lost focus");
  };
  