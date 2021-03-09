import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const QuestionMarkIcon: React.FC<IconProps> = ({color = 'white'}) => (
  <Svg width="6" height="10" viewBox="0 0 6 10" fill="none">
    <Path
      d="M1.80473 6.456C1.75673 6.008 1.77673 5.632 1.86473 5.328C1.95273 5.024 2.07273 4.768 2.22473 4.56C2.38473 4.352 2.56073 4.18 2.75273 4.044C2.94473 3.9 3.12473 3.764 3.29273 3.636C3.46873 3.508 3.61273 3.376 3.72473 3.24C3.84473 3.096 3.90473 2.924 3.90473 2.724C3.90473 2.444 3.82073 2.228 3.65273 2.076C3.49273 1.916 3.19673 1.836 2.76473 1.836C2.62873 1.836 2.47673 1.852 2.30873 1.884C2.14873 1.916 1.98873 1.96 1.82873 2.016C1.66873 2.072 1.51273 2.136 1.36073 2.208C1.21673 2.28 1.09273 2.356 0.988734 2.436L0.340734 1.188C0.668734 0.972 1.04473 0.792 1.46873 0.648C1.90073 0.503999 2.42473 0.431999 3.04073 0.431999C3.84873 0.431999 4.48473 0.615999 4.94873 0.983999C5.42073 1.352 5.65673 1.848 5.65673 2.472C5.65673 2.904 5.59673 3.256 5.47673 3.528C5.36473 3.792 5.21673 4.016 5.03273 4.2C4.85673 4.376 4.66473 4.532 4.45673 4.668C4.25673 4.796 4.06473 4.936 3.88073 5.088C3.70473 5.232 3.55673 5.412 3.43673 5.628C3.32473 5.836 3.26873 6.112 3.26873 6.456H1.80473ZM1.55273 8.184C1.55273 7.888 1.64873 7.656 1.84073 7.488C2.03273 7.32 2.28473 7.236 2.59673 7.236C2.91673 7.236 3.17273 7.32 3.36473 7.488C3.55673 7.656 3.65273 7.888 3.65273 8.184C3.65273 8.464 3.55673 8.692 3.36473 8.868C3.17273 9.044 2.91673 9.132 2.59673 9.132C2.28473 9.132 2.03273 9.044 1.84073 8.868C1.64873 8.692 1.55273 8.464 1.55273 8.184Z"
      fill={color}
    />
  </Svg>
);