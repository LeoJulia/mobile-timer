import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface IButtonProps {
  text: string;
  onPress: () => void;
  buttonStyle?: object;
  wrapperStyle?: object;
}

const Button = ({buttonStyle, wrapperStyle, text, onPress}: IButtonProps) => {
  return (
    <TouchableOpacity style={wrapperStyle} onPress={onPress}>
      <Text style={buttonStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export {Button};
