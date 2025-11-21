import { useEffect, useState, useRef } from "react";

export const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasStarted) return;
    
    setHasStarted(true);
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart, hasStarted]);

  return count;
};
