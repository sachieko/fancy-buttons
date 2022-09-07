import React, { useState } from 'react';

export const TextRepeaterButton = () => {
  const [repeats, setRepeats] = useState(1);

  const textArray = [];
  for (let i = 0; i < repeats; i++) {
    textArray.push(<span key = {i}>I like this text <i>🕷️🎃👻</i></span>);
  }

  const onClick = () => {
    setRepeats(repeats +1);
  };


  return (
    <button onClick={onClick} className='TextRepeaterButton'>
      {textArray}
    </button>
  );
};
