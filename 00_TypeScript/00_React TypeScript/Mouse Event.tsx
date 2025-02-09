const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked", event);
  };
  
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse entered div", event);
  };
  
  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse left div", event);
  };
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse moved", event.clientX, event.clientY);
  };
  
  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Mouse button pressed down", event);
  };
  
  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Mouse button released", event);
  };
  