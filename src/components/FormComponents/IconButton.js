import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import AuthStyles from '../../styles/AuthStyles';

import theme from '../../styles/theme.style';

const IconButton = ({buttonIcon, buttonStyle, buttonTitle, ...props}) => {
  return (
    <Pressable {...props} style={buttonStyle}>
      <Image
        source={buttonIcon}
        resizeMode="contain"
        style={{
          width: theme.font_size_7,
          height: theme.font_size_7,
          marginRight: theme.spacing_2,
        }}
      />
      <Text style={AuthStyles.iconButtonText}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default IconButton;
