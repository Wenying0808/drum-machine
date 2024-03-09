import React, { useEffect, useState } from 'react';
import './keyButton.css'

const KeyButton = ({label, url, disabled, onClick}) => {

    const [pressed, setPressed] = useState(false);
    
    
    useEffect( () => {
        const handleKeyDown = (event) => {
            if (event.key.toUpperCase() === label && !disabled){
                setPressed(true);
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

    },[label, disabled]);
  
      
    return(
        <div 
            className={`keybutton ${disabled ? 'disabled' : 'enabled' } ${pressed ? 'active' : ''}`}
            onClick={onClick}   
        >
            {label}
        </div>
    );
};

export default KeyButton;