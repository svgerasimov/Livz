import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const CloseIcon: React.FC<IconProps> = ({color = "#8F8F8F"}) => (
    <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <Path d="M8 0.942703L7.0573 0L3.99999 3.05729L0.942703 0L0 0.942703L3.05729 3.99999L0 7.0573L0.942703 8L3.99999 4.94271L7.05728 8L7.99998 7.0573L4.94271 3.99999L8 0.942703Z" fill={color}/>
    </Svg>
);


