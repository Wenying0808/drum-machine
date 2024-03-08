import * as React from 'react';
import Switch from '@mui/material/Switch';

const PowerSwitch = ({onClick}) => {

    return(
        <Switch 
            defaultChecked 
            onClick={onClick}
            sx={{
                '& .MuiSwitch-thumb': {
                    backgroundColor: '#FFF', // Customize the color of the thumb
                    boxShadow:  '0px 0px 6px rgba(71, 88, 220, 0.30)',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: '#4758DC', // Customize the color of the track when checked
                },
                '& .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: '#97999C', // Customize the color of the track when unchecked
                },
            }}
        >

        </Switch>
    );
};

export default PowerSwitch;