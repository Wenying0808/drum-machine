import React from 'react';
import { useState, useEffect} from 'react';
import PowerSwitch from './powerSwitch/powerSwitch';
import VolumeSlider from './volumeSlider/volumeSlider';
import KeyButton from './keyButton/keyButton';

import './App.css';

function App() {

  const keys = [
    {id:'Q', label:'Q', url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    {id:'W', label:'W', url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {id:'E', label:'E', url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
    {id:'A', label:'A', url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {id:'S', label:'S', url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {id:'D', label:'D', url:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {id:'Z', label:'Z', url:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {id:'X', label:'X', url:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {id:'C', label:'C', url:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'},
  ];

  const [powerOff, setPowerOff] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const handlePowerChange = () => {
    setPowerOff(!powerOff);
  };

  const handleVolumeChange = (newValue) => {
    setVolume(newValue/100);
  };

  const playAudio = (audioUrl) => {
    if(!powerOff){
      const audio = new Audio(audioUrl);
      audio.volume = volume;
      audio.play();
    }
    
  };


  useEffect(()=>{
    const handleKeyDown = (event) => {
      if(!powerOff){
        const pressedKey = event.key.toUpperCase();
        const keyToPlay = keys.find((key) => key.label === pressedKey);
        if (keyToPlay) {
          playAudio(keyToPlay.url);
        }
      }
    } 
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  },[powerOff, keys]);


  return (
    <div className="App">
      
      <div className='drum'>
        <PowerSwitch onClick={handlePowerChange} disabled={powerOff}></PowerSwitch>
        <VolumeSlider disabled={powerOff} onChange={handleVolumeChange}></VolumeSlider>
        <div className='keypad'>
          {keys.map(
            (key)=>(<KeyButton key={key.id} label={key.label} disabled={powerOff} onClick={() => playAudio(key.url)}></KeyButton>)
          )}  
        </div>
      </div>
    </div>
  );
}

export default App;
