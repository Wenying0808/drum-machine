import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

const VolumeSlider = ({disabled}) => {
  const [value, setValue] = React.useState(30);
  const isSmallScreen = useMediaQuery('(max-width:800px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: isSmallScreen ? 260 : 280 }}>
      <Stack spacing={2} direction="row" alignItems="center">
        <VolumeDown sx={{color: disabled ? '#8B9ACE': '#4758DC'}}/>
        <Slider 
            aria-label="Volume" 
            value={value} 
            onChange={handleChange} 
            disabled={disabled}
            sx={{
                color: disabled ? 'disabled' : '#4758DC', // Change the color of the slider track
                '& .MuiSlider-thumb': {
                  backgroundColor: disabled ? 'disabled' : '#4758DC', // Change the color of the slider thumb
                },
                '& .MuiSlider-rail': {
                  backgroundColor: disabled ? 'disabled' : 'primary.main', // Change the color of the slider rail
                },
              }}
            />
        <VolumeUp sx={{color: disabled ? '#8B9ACE': '#4758DC'}}/>
      </Stack>
    </Box>
  );
};

export default VolumeSlider;