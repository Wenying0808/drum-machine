import React, { useEffect, useState, useCallback } from 'react';
import './keyButton.css'

const KeyButton = ({label, url, disabled, onClick}) => {

    const [pressed, setPressed] = useState(false);

    const playAudio = useCallback(() => {
        if (url) {
            const audio = new Audio(url);
            audio.play();
            console.log('audio should be played');
          }
    },[url]);

    const handleClick = useCallback(() => {
        if (!disabled && onClick) {
          onClick();
          playAudio();
        }
    },[disabled, onClick, playAudio]);

    
    
    
    
    useEffect( () => {
        const handleKeyDown = (event) => {
            if (event.key.toUpperCase() === label && !disabled){
                setPressed(true);
                handleClick();
                console.log('keydown', event.key);
            }
            
        };
    
        const handleKeyUp = () => {
            setPressed(false);
            console.log('keyup');
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        //unmount to prevent memory leak
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };

    },[label, disabled, handleClick]);
      
    return(
        <div 
            className={`keybutton ${disabled ? 'disabled' : 'enabled' } ${pressed ? 'active' : ''}`}
            onClick={handleClick}
            
        >
            <audio className="clip" src={url} />
            {label}
        </div>
    );
};

export default KeyButton;