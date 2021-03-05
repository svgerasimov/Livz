import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';
import {withTouchable} from '../../../HOC';

const Icon: React.FC<IconProps> = ({color = '#98A1B0'}) => (
  <Svg width="46" height="33" viewBox="0 0 46 33" fill="none">
    <Path
      d="M44.6163 13.2262H6.70805V3.52522C6.70805 3.52193 6.70805 3.51882 6.70805 3.51553C6.70852 2.18187 7.85011 1.09681 9.2532 1.09681C9.84209 1.09158 10.4144 1.28737 10.8714 1.65042C11.3285 2.01348 11.6416 2.52104 11.7568 3.0856L10.1943 3.44433C10.1217 3.45992 10.053 3.48947 9.99214 3.53125C9.93131 3.57304 9.87958 3.62623 9.83996 3.68773C9.80034 3.74923 9.77362 3.81782 9.76136 3.88951C9.74909 3.9612 9.75153 4.03455 9.76853 4.10531C9.78553 4.17607 9.81675 4.24282 9.86037 4.30167C9.90399 4.36053 9.95914 4.41033 10.0226 4.44816C10.0861 4.486 10.1567 4.51112 10.2302 4.52207C10.3037 4.53302 10.3787 4.52957 10.4508 4.51193L12.4142 4.06116C12.4618 4.0564 12.5086 4.04565 12.5534 4.02918L14.503 3.58133C14.5751 3.56528 14.6433 3.53544 14.7036 3.49352C14.7639 3.4516 14.8152 3.39844 14.8543 3.33708C14.8935 3.27573 14.9199 3.20741 14.932 3.13604C14.9441 3.06468 14.9416 2.99169 14.9246 2.92127C14.9077 2.85085 14.8767 2.7844 14.8334 2.72575C14.7901 2.66709 14.7354 2.61739 14.6724 2.5795C14.6093 2.54161 14.5393 2.51628 14.4662 2.50498C14.3931 2.49368 14.3185 2.49662 14.2465 2.51364L12.8499 2.83426C12.6759 2.02924 12.223 1.3076 11.5677 0.791228C10.9124 0.274855 10.0949 -0.00460339 9.2532 5.73683e-05C7.24117 5.73683e-05 5.60302 1.56211 5.58732 3.48774C5.58732 3.49579 5.5861 3.50355 5.5861 3.51169V13.2262H1.38374C0.607723 13.2262 0 14.0342 0 15.0657V15.2787C0 16.0389 0.330789 16.6765 0.815191 16.9604C0.898669 20.2313 1.97037 23.405 3.89532 26.0818C5.85191 28.8259 8.67296 31.1086 12.0542 32.6832C12.5031 32.8903 12.9934 32.9976 13.4899 32.9973L32.6435 33C33.1622 33.0003 33.674 32.8833 34.1388 32.6581C37.4289 31.0526 40.1889 28.7505 42.1206 26.0009C44.0402 23.2681 45.0904 20.1537 45.1711 16.969C45.6634 16.689 46 16.0462 46 15.2787V15.0657C46 14.0342 45.3923 13.2262 44.6163 13.2262ZM44.878 15.0657V15.2787C44.878 15.7247 44.6868 15.9899 44.6095 16.0214H39.0578V14.323H44.6098C44.6869 14.354 44.878 14.6189 44.878 15.0657ZM29.1737 14.323H37.9359V24.1233L29.1737 24.1194V14.323ZM37.9145 25.2201C37.7982 26.0453 37.182 26.6777 36.4396 26.6777H30.6699C29.9264 26.6777 29.3095 26.0433 29.1946 25.2162L37.9145 25.2201ZM1.12195 15.0657C1.12195 14.6178 1.31296 14.3535 1.38982 14.323H28.0518V16.0218H1.3901C1.31306 15.9909 1.12195 15.726 1.12195 15.2792V15.0657ZM41.1957 25.3796C39.3714 27.9764 36.7579 30.1538 33.6378 31.6769C33.3286 31.8262 32.9883 31.9037 32.6435 31.9032L13.4906 31.9005C13.161 31.9011 12.8353 31.8302 12.537 31.693C6.08659 28.6888 2.16172 23.2696 1.942 17.1186H28.0518V24.9393C28.0518 26.5028 29.2263 27.7749 30.6697 27.7749H36.4393C37.883 27.7749 39.0572 26.5028 39.0572 24.9393V17.1186H44.0436C43.9351 20.0284 42.9561 22.8738 41.1957 25.3796Z"
      fill={color}
    />
  </Svg>
);

export const BathIcon = withTouchable(Icon);