import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const HomeIcon: React.FC<IconProps> = ({color = 'white'}) => (
  <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
    <Path
      d="M16.0609 6.6923V16.6154H3.93891V6.6923H2.54023V17.3077C2.54023 17.6901 2.85332 18 3.23957 18H16.7602C17.1466 18 17.4595 17.6903 17.4595 17.3077V6.6923H16.0609Z"
      fill={color}
    />
    <Path
      d="M10.4657 0.175841C10.2006 -0.0586135 9.79965 -0.0586135 9.53438 0.175841L0 8.5989L0.931289 9.63204L9.99988 1.62023L19.0689 9.63208L20 8.5989L10.4657 0.175841Z"
      fill={color}
    />
  </Svg>
);
