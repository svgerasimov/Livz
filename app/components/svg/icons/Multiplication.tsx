import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const MultiplicationIcon: React.FC<IconProps> = ({
  color = '#79BA55',
}) => (
  <Svg width="22" height="23" viewBox="0 0 22 23" fill="none">
    <Path
      d="M11.0312 0.34375C8.88038 0.34375 6.77781 0.981558 4.98943 2.17652C3.20104 3.37148 1.80717 5.06992 0.984065 7.05706C0.160962 9.04421 -0.0543992 11.2308 0.365215 13.3403C0.784829 15.4499 1.82057 17.3876 3.34147 18.9085C4.86236 20.4294 6.8001 21.4652 8.90964 21.8848C11.0192 22.3044 13.2058 22.089 15.1929 21.2659C17.1801 20.4428 18.8785 19.049 20.0735 17.2606C21.2684 15.4722 21.9062 13.3696 21.9062 11.2187C21.9031 8.33547 20.7564 5.57119 18.7176 3.53241C16.6788 1.49363 13.9145 0.346868 11.0312 0.34375ZM14.5557 13.4617C14.6422 13.5453 14.7112 13.6453 14.7587 13.7559C14.8062 13.8664 14.8312 13.9854 14.8323 14.1057C14.8333 14.226 14.8104 14.3454 14.7648 14.4567C14.7193 14.5681 14.652 14.6693 14.5669 14.7544C14.4818 14.8395 14.3806 14.9068 14.2692 14.9523C14.1579 14.9979 14.0385 15.0208 13.9182 15.0198C13.7979 15.0187 13.6789 14.9937 13.5684 14.9462C13.4578 14.8987 13.3578 14.8297 13.2742 14.7431L11.0312 12.5002L8.78828 14.7431C8.70468 14.8297 8.60468 14.8987 8.49412 14.9462C8.38355 14.9937 8.26463 15.0187 8.1443 15.0198C8.02397 15.0208 7.90464 14.9979 7.79326 14.9523C7.68189 14.9068 7.5807 14.8395 7.49561 14.7544C7.41052 14.6693 7.34323 14.5681 7.29766 14.4567C7.2521 14.3454 7.22917 14.226 7.23021 14.1057C7.23126 13.9854 7.25626 13.8664 7.30375 13.7559C7.35125 13.6453 7.42029 13.5453 7.50684 13.4617L9.74981 11.2187L7.50684 8.97578C7.42029 8.89218 7.35125 8.79218 7.30375 8.68161C7.25626 8.57105 7.23126 8.45213 7.23021 8.3318C7.22917 8.21146 7.2521 8.09213 7.29766 7.98076C7.34323 7.86938 7.41052 7.7682 7.49561 7.68311C7.5807 7.59802 7.68189 7.53072 7.79326 7.48516C7.90464 7.43959 8.02397 7.41666 8.1443 7.41771C8.26463 7.41875 8.38355 7.44375 8.49412 7.49125C8.60468 7.53874 8.70468 7.60778 8.78828 7.69434L11.0312 9.93731L13.2742 7.69434C13.3578 7.60778 13.4578 7.53874 13.5684 7.49125C13.6789 7.44375 13.7979 7.41875 13.9182 7.41771C14.0385 7.41666 14.1579 7.43959 14.2692 7.48516C14.3806 7.53072 14.4818 7.59802 14.5669 7.68311C14.652 7.7682 14.7193 7.86938 14.7648 7.98076C14.8104 8.09213 14.8333 8.21146 14.8323 8.3318C14.8312 8.45213 14.8062 8.57105 14.7587 8.68161C14.7112 8.79218 14.6422 8.89218 14.5557 8.97578L12.3127 11.2187L14.5557 13.4617Z"
      fill={color}
    />
  </Svg>
);
