import React, { useState, useEffect } from 'react';

const NetworkBackground = () => {
  const [points, setPoints] = useState([]);
  
  useEffect(() => {
    const generatePoints = () => {
      const newPoints = [];
      for (let i = 0; i < 50; i++) {
        newPoints.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          dx: (Math.random() - 0.5) * 0.2,
          dy: (Math.random() - 0.5) * 0.2
        });
      }
      return newPoints;
    };

    setPoints(generatePoints());

    const animate = () => {
      setPoints(prevPoints =>
        prevPoints.map(point => ({
          ...point,
          x: ((point.x + point.dx + 100) % 100),
          y: ((point.y + point.dy + 100) % 100)
        }))
      );
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg width="100%" height="100%" className="absolute inset-0">
        {points.map((point, i) => (
          <g key={i}>
            <circle
              cx={`${point.x}%`}
              cy={`${point.y}%`}
              r="1"
              fill="white"
            />
            {points.slice(i + 1).map((point2, j) => {
              const distance = Math.hypot(point.x - point2.x, point.y - point2.y);
              return distance < 20 ? (
                <line
                  key={j}
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${point2.x}%`}
                  y2={`${point2.y}%`}
                  stroke="white"
                  strokeWidth="0.2"
                  strokeOpacity={0.2}
                />
              ) : null;
            })}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default NetworkBackground;