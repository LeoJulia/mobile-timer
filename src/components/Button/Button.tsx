/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface IButtonProps {
  buttonStyle: any;
  wrapperStyle: any;
  text: string;
}

const Button = ({buttonStyle, wrapperStyle, text}: IButtonProps) => {
  return (
    <TouchableOpacity style={wrapperStyle}>
      <Text style={buttonStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export {Button};
