import React, { useState } from 'react';

export const LightSwitchButton = (props) => {

  return (
    <button onClick={props.onClick} className='LightSwitchButton'>
    {props.lights === 1 ? <span><i>💡</i> I'm on!</span> : <span className='off'><i>🕯️</i> I'm off!</span> }
    </button>
  );
};
