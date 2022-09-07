import React, { useState } from 'react';

export const AngryButton = () => {
  const [anger, setAnger] = useState(0);

  const onClick = () => {
    anger < 1 ? setAnger(anger + 0.1) : setAnger(0);
  };

  return (
    <button onClick={onClick} style={{ backgroundColor: `rgba(255,0,0,${anger}` }} className='AngryButton'>
      {anger < 1 && <span>Don't click me too much!</span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
};