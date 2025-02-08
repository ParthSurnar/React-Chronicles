import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <h2>Timer: {seconds}s</h2>;
};

export default Timer;
