import { useEffect, useRef } from "react";
import { onLCP, onINP, onCLS } from "web-vitals";

const usePerformanceMetrics = () => {
  const frameCountRef = useRef(0);
  const startTimeRef = useRef(performance.now());

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }
    const logWebVitals = (metric: { name: string; value: number }) => {
      console.log(`[Web Vitals] ${metric.name}: ${metric.value}`);
    };

    onLCP(logWebVitals);
    onINP(logWebVitals);
    onCLS(logWebVitals);

    const calculateFPS = () => {
      frameCountRef.current++;
      const now = performance.now();

      if (now - startTimeRef.current >= 1000) {
        console.log(`[FPS] Frames Per Second: ${frameCountRef.current}`);
        frameCountRef.current = 0;
        startTimeRef.current = now;
      }

      requestAnimationFrame(calculateFPS);
    };

    calculateFPS();
  }, []);
};

export default usePerformanceMetrics;
