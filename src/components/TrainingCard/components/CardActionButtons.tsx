import React from 'react';
import { Text, Icon, StyleService } from '@ui-kitten/components';
import { IconType } from '../../../constants';

export const CardActionButtons = () => (
  <Text>
    <Icon
      name={IconType.Settings}
      fill='#DDDDDD'
      style={styles.actionButtons}
    />
    <Icon name={IconType.Play} fill='#DDDDDD' style={styles.actionButtons} />
  </Text>
);

const styles = StyleService.create({
  actionButtons: {
    width: 53,
    height: 53,
  },
});
