import { useEffect, useRef } from "react";
import "../styles/snowfall.css";

const Snowfall = () => {
  const snowfallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createSnowflake = () => {
      if (!snowfallRef.current) return;

      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";

      const startPositionX = Math.random() * window.innerWidth;
      const startOpacity = 0.5 + Math.random() * 0.5;
      // const endPositionX = startPositionX + (Math.random() * 200 - 100);
      const animationDuration = 5 + Math.random() * 10;

      snowflake.style.left = `${startPositionX}px`;
      snowflake.style.opacity = startOpacity.toString();
      snowflake.style.animation = `fall ${animationDuration}s linear`;

      snowfallRef.current.appendChild(snowflake);

      setTimeout(() => snowflake.remove(), animationDuration * 1000);
    };

    const interval = setInterval(createSnowflake, 200);
    return () => clearInterval(interval);
  }, []);

  return <div ref={snowfallRef} className="snowfall-container" />;
};

export default Snowfall;
