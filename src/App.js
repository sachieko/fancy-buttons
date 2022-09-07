import React, {useState} from 'react';
import './App.css';
import { AngryButton } from './components/AngryButton';
import { CounterButton } from './components/CounterButton';
import { LightSwitchButton } from './components/LightSwitchButton';
import { TextRepeaterButton } from './components/TextRepeaterButton';

function App() {
  const [lights, setLights] = useState(0);
  const lightSwitch = () => {
    lights === 0 ? setLights(1) : setLights(0);
  };

  return (
    <div className={lights === 1 ? "App" : "App dark"}>
      <h1>Fancy Buttons or Something!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton lights={lights} setLights={setLights} onClick={lightSwitch} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
