import React from 'react';
import { Text, StyleService, Layout } from '@ui-kitten/components';
import { Icon } from '../../Icon';
import { IconType, IconSize } from '../../../constants';

export const CardDescription = ({ item }) => (
  <Layout
    style={{
      flexDirection: 'row',
      backgroundColor: 'transparent',
    }}>
    <Icon type={IconType.Clock} fill='#C4C4C4' size={IconSize.Small} />
    <Text style={styles.description}>{item.time}</Text>
  </Layout>
);

const styles = StyleService.create({
  description: {
    color: '#C4C4C4',
    fontSize: 18,
    position: 'relative',
    top: -1,
  },
});
