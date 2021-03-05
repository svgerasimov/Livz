import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const OdnoklassnikiIcon: React.FC<IconProps> = ({color = 'white'}) => (
  <Svg width="13" height="20" viewBox="0 0 13 20" fill="none">
    <Path
      d="M6.49993 0C3.93771 0 1.85401 2.24246 1.85401 4.99992C1.85401 7.75738 3.93771 9.99984 6.49993 9.99984C9.06215 9.99984 11.1458 7.75738 11.1458 4.99992C11.1458 2.24246 9.06215 0 6.49993 0ZM6.49993 7.49988C5.21882 7.49988 4.17697 6.37865 4.17697 4.99992C4.17697 3.62119 5.21882 2.49996 6.49993 2.49996C7.78104 2.49996 8.82289 3.62119 8.82289 4.99992C8.82289 6.37865 7.78104 7.49988 6.49993 7.49988Z"
      fill={color}
    />
    <Path
      d="M12.6604 9.8611C12.2063 9.37235 11.4722 9.37235 11.0181 9.8611C8.52787 12.5411 4.47431 12.5411 1.98294 9.8611C1.5288 9.37235 0.794742 9.37235 0.340604 9.8611C-0.113535 10.3498 -0.113535 11.1398 0.340604 11.6298C1.78548 13.1848 3.61714 14.071 5.5057 14.3023L2.19432 17.866C1.74019 18.3547 1.74019 19.1447 2.19432 19.6334C2.64846 20.1222 3.38252 20.1222 3.83666 19.6334L6.49993 16.7672L9.1632 19.6334C9.38969 19.8772 9.68703 19.9997 9.98437 19.9997C10.2817 19.9997 10.579 19.8772 10.8055 19.6334C11.2597 19.1447 11.2597 18.3547 10.8055 17.866L7.49415 14.3023C9.38272 14.071 11.2144 13.1848 12.6593 11.6298C13.1134 11.1411 13.1134 10.3498 12.6604 9.8611Z"
      fill={color}
    />
  </Svg>
);