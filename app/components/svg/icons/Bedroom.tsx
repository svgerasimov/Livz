import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';
import {withTouchable} from '../../../HOC';

const Icon: React.FC<IconProps> = ({color = '#98A1B0'}) => (
  <Svg width="42" height="33" viewBox="0 0 42 33" fill="none">
    <Path
      d="M39.3743 11.9675H35.067V2.27338C35.0664 1.67065 34.8323 1.09279 34.4162 0.666598C34.0001 0.240403 33.436 0.000671155 32.8475 0H9.1525C8.56405 0.000671155 7.99989 0.240403 7.58379 0.666598C7.16769 1.09279 6.93364 1.67065 6.93299 2.27338V11.9675H2.62568C1.92956 11.9683 1.26217 12.2519 0.769923 12.756C0.277681 13.2602 0.000790832 13.9438 0 14.6568V32.4754C0 32.6145 0.0539633 32.748 0.150018 32.8463C0.246074 32.9447 0.376353 33 0.512195 33C0.648038 33 0.778317 32.9447 0.874372 32.8463C0.970427 32.748 1.02439 32.6145 1.02439 32.4754V25.2478H40.9756V32.4754C40.9756 32.6145 41.0296 32.748 41.1256 32.8463C41.2217 32.9447 41.352 33 41.4878 33C41.6236 33 41.7539 32.9447 41.85 32.8463C41.946 32.748 42 32.6145 42 32.4754V14.6568C41.9992 13.9438 41.7223 13.2602 41.2301 12.756C40.7378 12.2519 40.0704 11.9683 39.3743 11.9675ZM7.95738 2.27338C7.95774 1.94883 8.08377 1.63769 8.30782 1.4082C8.53187 1.17871 8.83564 1.04962 9.1525 1.04925H32.8475C33.1644 1.04962 33.4681 1.17871 33.6922 1.4082C33.9162 1.63769 34.0423 1.94883 34.0426 2.27338V11.9675H32.2796V9.25693C32.2789 8.54383 32.002 7.86013 31.5098 7.35585C31.0175 6.85157 30.3501 6.5679 29.6539 6.56709H24.5085C23.8124 6.5679 23.145 6.85151 22.6528 7.35569C22.1605 7.85988 21.8836 8.54347 21.8829 9.2565V11.9671H20.117V9.2565C20.1162 8.5435 19.8393 7.85994 19.3471 7.35575C18.8549 6.85157 18.1876 6.56795 17.4915 6.56709H12.3461C11.65 6.5679 10.9826 6.85151 10.4904 7.35569C9.99812 7.85988 9.72123 8.54347 9.72044 9.2565V11.9671H7.95738V2.27338ZM22.9074 11.9675V9.25693C22.9078 8.82204 23.0766 8.40506 23.3767 8.09748C23.6769 7.78991 24.084 7.61687 24.5085 7.61634H29.6537C30.0783 7.61683 30.4853 7.78978 30.7855 8.09727C31.0857 8.40475 31.2545 8.82165 31.255 9.2565V11.9671L22.9074 11.9675ZM10.7448 11.9675V9.25693C10.7452 8.82201 10.914 8.405 11.2142 8.09742C11.5144 7.78984 11.9215 7.61683 12.3461 7.61634H17.4915C17.916 7.61683 18.323 7.78978 18.6232 8.09727C18.9234 8.40475 19.0923 8.82165 19.0928 9.2565V11.9671L10.7448 11.9675ZM2.62568 13.0167H39.3743C39.7988 13.0172 40.2059 13.1902 40.5061 13.4976C40.8062 13.8051 40.9751 14.222 40.9756 14.6568V20.8767H1.02439V14.6568C1.02489 14.222 1.19376 13.8051 1.49395 13.4976C1.79415 13.1902 2.20115 13.0172 2.62568 13.0167ZM1.02439 24.1985V21.9259H40.9756V24.1985H1.02439Z"
      fill={color}
    />
  </Svg>
);

export const BedRoomIcon = withTouchable(Icon);