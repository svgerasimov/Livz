import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';
import {withTouchable} from '../../../HOC';

const Icon: React.FC<IconProps> = ({color = 'white'}) => (
  <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
    <Path
      d="M13 11.0234C12.0121 11.0234 11.1344 11.5016 10.5874 12.2377L5.8784 9.84061C5.9574 9.57326 6 9.29053 6 8.99805C6 8.6019 5.92203 8.22362 5.78087 7.87734L10.7162 4.92366C11.2669 5.56747 12.0863 5.97656 13 5.97656C14.6542 5.97656 16 4.63602 16 2.98828C16 1.34054 14.6542 0 13 0C11.3458 0 10 1.34054 10 2.98828C10 3.36912 10.072 3.73346 10.203 4.06871L5.25533 7.02977C4.70507 6.40495 3.89803 6.00977 3 6.00977C1.3458 6.00977 0 7.35031 0 8.99805C0 10.6458 1.3458 11.9863 3 11.9863C4.00407 11.9863 4.8944 11.4924 5.43923 10.7357L10.1346 13.1258C10.0471 13.4059 10 13.7034 10 14.0117C10 15.6595 11.3458 17 13 17C14.6542 17 16 15.6595 16 14.0117C16 12.364 14.6542 11.0234 13 11.0234ZM13 0.996094C14.1028 0.996094 15 1.88979 15 2.98828C15 4.08677 14.1028 4.98047 13 4.98047C11.8972 4.98047 11 4.08677 11 2.98828C11 1.88979 11.8972 0.996094 13 0.996094ZM3 10.9902C1.8972 10.9902 1 10.0965 1 8.99805C1 7.89955 1.8972 7.00586 3 7.00586C4.1028 7.00586 5 7.89955 5 8.99805C5 10.0965 4.1028 10.9902 3 10.9902ZM13 16.0039C11.8972 16.0039 11 15.1102 11 14.0117C11 12.9132 11.8972 12.0195 13 12.0195C14.1028 12.0195 15 12.9132 15 14.0117C15 15.1102 14.1028 16.0039 13 16.0039Z"
      fill={color}
    />
  </Svg>
);

export const ShareIcon = withTouchable(Icon);
