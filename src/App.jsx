import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState(''); 
  const colors = ['green', 'yellow', 'red']; 

  const changeColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  useEffect(() => {
    const interval = setInterval(changeColor, 2000);
    return () => clearInterval(interval);
  }, [color]);

  return (
    <div className='traffic-light'>
      <div className={`top ${color === 'green' ? 'green' : ''}`}></div>
      <div className={`middle ${color === 'yellow' ? 'yellow' : ''}`}></div>
      <div className={`bottom ${color === 'red' ? 'red' : ''}`}></div>
      {color === 'red' && <h1>STOP</h1>}
    </div>
  );
}

export default App;
