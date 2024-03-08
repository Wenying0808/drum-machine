import VolumeSlider from './volumeSlider';

export default {
    title:"Volume Slider",
    component: VolumeSlider,
};

export const Enabled = {
    args:{
        disabled: false,
    }
};

export const Disabled = {
    args:{
        disabled: true,
    }
};