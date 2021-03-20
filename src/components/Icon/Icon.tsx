import React from 'react';
import { Icon, StyleService } from '@ui-kitten/components';
import { IconSize, IconType } from '../../constants';

interface TIcon {
  [key: string]: any;
  type: IconType;
  size: IconSize;
  color?: string;
}

export const IconComponent = ({
  type,
  size,
  color = '#DDDDDD',
  ...props
}: TIcon) => <Icon {...props} name={type} fill={color} style={styles[size]} />;

const styles = StyleService.create({
  big: {
    width: 53,
    height: 53,
  },
  small: {
    width: 24,
    height: 24,
  },
});
