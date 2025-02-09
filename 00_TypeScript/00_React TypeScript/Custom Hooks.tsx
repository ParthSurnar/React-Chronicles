import React, { useState, useEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

// Usage Example
export default function App() {
  const { width, height } = useWindowSize();
  return <p>Window Size: {width} x {height}</p>;
}
