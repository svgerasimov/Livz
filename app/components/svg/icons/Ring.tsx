import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const RingIcon: React.FC<IconProps> = ({color = '#171B22'}) => (
  <Svg width="18" height="24" viewBox="0 0 18 24" fill="none">
    <Path
      d="M17.6284 19.0994C17.5615 19.0536 17.0583 18.6816 16.5543 17.5564C15.6289 15.49 15.4346 12.5792 15.4346 10.5012C15.4346 10.4921 15.4345 10.4832 15.4342 10.4742C15.4241 7.72781 13.8653 5.36034 11.6348 4.29811V2.67356C11.6348 1.19934 10.4998 0 9.10483 0H8.89516C7.50015 0 6.36522 1.19934 6.36522 2.67356V4.29802C4.12719 5.36367 2.56534 7.74323 2.56534 10.5012C2.56534 12.5792 2.37109 15.49 1.44566 17.5564C0.941778 18.6816 0.438518 19.0535 0.371607 19.0994C0.0898311 19.2369 -0.0491018 19.5548 0.0157217 19.8768C0.0811672 20.2021 0.369341 20.4263 0.684039 20.4263H5.56899C5.59627 22.4017 7.1244 24 9.00002 24C10.8756 24 12.4038 22.4017 12.431 20.4263H17.316C17.6306 20.4263 17.9189 20.2021 17.9843 19.8768C18.049 19.5548 17.9102 19.2369 17.6284 19.0994ZM7.69817 2.67356C7.69817 1.97602 8.23515 1.40855 8.89521 1.40855H9.10487C9.76492 1.40855 10.3019 1.97602 10.3019 2.67356V3.84155C9.88124 3.74981 9.44578 3.70153 8.99984 3.70153C8.55403 3.70153 8.1187 3.74977 7.69822 3.84141L7.69817 2.67356ZM9.00002 22.5915C7.85936 22.5915 6.92895 21.625 6.90189 20.4264H11.0981C11.0711 21.625 10.1407 22.5915 9.00002 22.5915ZM11.6836 19.0177C11.6835 19.0177 2.20288 19.0177 2.20288 19.0177C2.31818 18.8282 2.43552 18.6135 2.55215 18.371C3.44537 16.5127 3.89829 13.8649 3.89829 10.5012C3.89829 7.5285 6.18684 5.11008 8.99979 5.11008C11.8128 5.11008 14.1013 7.5285 14.1013 10.5035C14.1013 10.5122 14.1014 10.5208 14.1017 10.5294C14.1043 13.8797 14.5572 16.518 15.4479 18.371C15.5645 18.6136 15.6819 18.8282 15.7972 19.0177H11.6836Z"
      fill={color}
    />
  </Svg>
);
