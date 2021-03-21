import React from 'react';
import { Icon, StyleService } from '@ui-kitten/components';
import { IconSize, IconType, Colors } from '../../constants';

interface TIcon {
  [key: string]: any;
  type: IconType;
  size: IconSize;
  color?: Colors;
}

export const IconComponent = ({
  type,
  size,
  color = Colors.lightGray,
  ...props
}: TIcon) => <Icon {...props} name={type} fill={color} style={styles[size]} />;

const styles = StyleService.create({
  big: {
    width: 43,
    height: 43,
  },
  small: {
    width: 24,
    height: 24,
  },
});
