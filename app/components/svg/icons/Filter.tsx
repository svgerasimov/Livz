import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../../../utility/types';

export const FilterIcon: React.FC<IconProps> = ({color = 'white'}) => (
  <Svg width="25" height="23" viewBox="0 0 25 23" fill="none">
    <Path
      d="M1.79938 20.1904H15.632C16.0123 21.3199 17.0806 22.1359 18.3367 22.1359C19.5928 22.1359 20.6612 21.3199 21.0415 20.1904L23.2006 20.1904C23.7022 20.1904 24.1088 19.7838 24.1088 19.2822C24.1088 18.7806 23.7022 18.374 23.2006 18.374H21.0414C20.6611 17.2445 19.5928 16.4284 18.3367 16.4284C17.0806 16.4284 16.0122 17.2445 15.6319 18.374L1.79932 18.374C1.29775 18.374 0.891114 18.7806 0.891114 19.2822C0.891114 19.7838 1.29775 20.1904 1.79938 20.1904ZM18.3367 18.2448C18.9087 18.2448 19.3741 18.7102 19.3741 19.2822C19.3741 19.8542 18.9087 20.3195 18.3367 20.3195C17.7647 20.3195 17.2994 19.8542 17.2994 19.2822C17.2994 18.7102 17.7647 18.2448 18.3367 18.2448Z"
      fill={color}
    />
    <Path
      d="M1.79938 12.4081H3.9586C4.3389 13.5376 5.40731 14.3537 6.66335 14.3537C7.9194 14.3537 8.98775 13.5376 9.36804 12.4081L23.2006 12.4081C23.7022 12.4081 24.1088 12.0015 24.1088 11.4999C24.1088 10.9984 23.7022 10.5917 23.2006 10.5917L9.36804 10.5917C8.98775 9.46224 7.91934 8.64618 6.66329 8.64618C5.40725 8.64619 4.33884 9.46224 3.95854 10.5917H1.79932C1.29775 10.5917 0.891115 10.9984 0.891115 11.4999C0.891115 12.0015 1.29775 12.4081 1.79938 12.4081ZM6.66329 10.4626C7.23528 10.4626 7.70064 10.928 7.70064 11.4999C7.70064 12.0719 7.23528 12.5373 6.66329 12.5373C6.0913 12.5373 5.62594 12.0719 5.62594 11.4999C5.62594 10.928 6.0913 10.4626 6.66329 10.4626Z"
      fill={color}
    />
    <Path
      d="M1.79938 4.62585L11.7408 4.62585C12.1211 5.75535 13.1895 6.5714 14.4456 6.5714C15.7017 6.5714 16.77 5.75535 17.1503 4.62585L23.2006 4.62585C23.7022 4.62585 24.1088 4.21921 24.1088 3.71764C24.1088 3.21607 23.7022 2.80944 23.2006 2.80944L17.1503 2.80944C16.77 1.67994 15.7017 0.863891 14.4456 0.863892C13.1895 0.863892 12.1211 1.67994 11.7408 2.80944L1.79932 2.80944C1.29775 2.80944 0.891113 3.21608 0.891113 3.71765C0.891113 4.21922 1.29775 4.62585 1.79938 4.62585ZM14.4456 2.68024C15.0175 2.68024 15.4829 3.1456 15.4829 3.71758C15.4829 4.28957 15.0175 4.75493 14.4456 4.75493C13.8736 4.75493 13.4082 4.28963 13.4082 3.71765C13.4082 3.14566 13.8736 2.68024 14.4456 2.68024Z"
      fill={color}
    />
  </Svg>
);
