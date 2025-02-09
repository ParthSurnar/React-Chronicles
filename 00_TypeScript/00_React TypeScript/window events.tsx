useEffect(() => {
    const handleResize = () => console.log("Window resized:", window.innerWidth);
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  