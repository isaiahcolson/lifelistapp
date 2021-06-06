import React from 'react';
import {Image, Pressable, Text} from 'react-native';

import theme from '../../styles/theme.style';
import FormStyles from '../../styles/FormStyles';

const RightIconButton = ({buttonIcon, buttonStyle, buttonTitle, ...props}) => {
  return (
    <Pressable {...props} style={FormStyles.inlineIcon}>
      <Text style={[FormStyles.inlineButton, {color: theme.blue_jay_black}]}>
        {buttonTitle}
      </Text>

      <Image
        source={buttonIcon}
        resizeMode="contain"
        style={{
          width: theme.font_size_7,
          height: theme.font_size_7,
          marginRight: theme.spacing_2,
        }}
      />
    </Pressable>
  );
};

export default RightIconButton;
