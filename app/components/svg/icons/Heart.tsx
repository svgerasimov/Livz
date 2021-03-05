import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';
import {withTouchable} from '../../../HOC';

const Icon: React.FC<IconProps> = ({
  color = 'white',
  width = 18,
  height = 15,
}) => (
  <Svg width={width} height={height} viewBox="0 0 22 19" fill="none">
    <Path
      d="M20.0538 1.85026C18.7815 0.657066 17.0793 0 15.2602 0C13.6941 0 12.2147 0.487128 11.0216 1.38393C9.81135 0.487128 8.33018 0 6.77935 0C4.9518 0 3.24509 0.657348 1.97287 1.85026C0.700606 3.04322 0 4.63992 0 6.34572C0 8.05175 0.700606 9.64822 1.97287 10.8411L10.4405 18.7825C10.5948 18.9275 10.7974 19 11 19C11.2021 19 11.4041 18.9277 11.5587 18.7835L20.0332 10.8599C21.3018 9.6435 22 8.04482 22 6.35809C22 4.65576 21.311 3.05708 20.0538 1.85026ZM18.9087 9.81517L11.0008 17.2089L3.09186 9.79168C2.11875 8.8788 1.58271 7.65493 1.58271 6.34572C1.58271 5.0365 2.11875 3.81264 3.09186 2.89976C4.06523 1.98712 5.3747 1.48439 6.77935 1.48439C8.16161 1.48439 9.47371 1.98933 10.4732 2.90568C10.7829 3.18995 11.2796 3.18745 11.5859 2.89976C12.5593 1.98712 13.864 1.48439 15.2602 1.48439C16.6564 1.48439 17.9611 1.98712 18.9279 2.89379C19.8883 3.81534 20.4172 5.04565 20.4172 6.35809C20.4172 7.65469 19.8791 8.88496 18.9087 9.81517Z"
      fill={color}
    />
  </Svg>
);

export const HeartIcon = Icon;