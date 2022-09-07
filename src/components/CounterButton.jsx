import React, { useState } from 'react';

export const CounterButton = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={onClick} className='CounterButton'>
      {count === 1 ? <span>You clicked me {count} time!</span> : <span>You clicked me {count} times!</span>}
    </button>
  );
};