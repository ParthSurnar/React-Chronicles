const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag started", event);
  };
  
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Allows drop
    console.log("Dragging over element");
  };
  
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("Element dropped", event);
  };
  