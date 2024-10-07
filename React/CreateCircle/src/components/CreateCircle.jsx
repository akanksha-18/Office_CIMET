import React, { useState } from 'react';
import './CreateCircle.css'; 

const CircleApp = () => {
  const [circles, setCircles] = useState([]);
  const [undoneCircles, setUndoneCircles] = useState([]);

  const BUTTON_MARGIN = 50; 

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    

    if (!isNearButtons(clientX, clientY)) {
      createCircle(clientX, clientY);
    }
  };

  const createCircle = (x, y) => {
    const size = 15; 
    const newCircle = {
      id: Date.now(),
      x: x - size / 2,
      y: y - size / 2,
      color: getRandomColor(),
    };
    setCircles((prev) => [...prev, newCircle]);
    setUndoneCircles([]);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const isNearButtons = (x, y) => {
    const buttonRects = [
      document.getElementById('undo').getBoundingClientRect(),
      document.getElementById('redo').getBoundingClientRect(),
      document.getElementById('reset').getBoundingClientRect(),
    ];

    return buttonRects.some(rect => (
      x >= rect.left - BUTTON_MARGIN &&
      x <= rect.right + BUTTON_MARGIN &&
      y >= rect.top - BUTTON_MARGIN &&
      y <= rect.bottom + BUTTON_MARGIN
    ));
  };

  const undo = () => {
    if (circles.length > 0) {
      const lastCircle = circles[circles.length - 1];
      setCircles((prev) => prev.slice(0, -1));
      setUndoneCircles((prev) => [...prev, lastCircle]);
    }
  };

  const redo = () => {
    if (undoneCircles.length > 0) {
      const lastUndoneCircle = undoneCircles[undoneCircles.length - 1];
      setCircles((prev) => [...prev, lastUndoneCircle]);
      setUndoneCircles((prev) => prev.slice(0, -1));
    }
  };

  const reset = () => {
    setCircles([]);
    setUndoneCircles([]);
  };

  return (
    <div 
      onClick={handleClick} 
      style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}
    >
      <div className="controls" style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <button id="undo" onClick={undo} disabled={circles.length === 0}>Undo</button>
        <button id="redo" onClick={redo} disabled={undoneCircles.length === 0}>Redo</button>
        <button id="reset" onClick={reset} disabled={circles.length === 0}>Reset</button>
      </div>
      {circles.map(circle => (
        <div
          key={circle.id}
          style={{
            position: 'absolute',
            width: '15px',
            height: '15px',
            backgroundColor: circle.color,
            borderRadius: '50%',
            left: `${circle.x}px`,
            top: `${circle.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default CircleApp;
