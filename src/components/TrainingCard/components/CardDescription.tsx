import React from 'react';
import { Text, StyleService, Layout } from '@ui-kitten/components';
import { Icon } from '../../Icon';
import { IconType, IconSize, Colors } from '../../../constants';

export const CardDescription = ({ item }) => (
  <Layout
    style={{
      flexDirection: 'row',
      backgroundColor: 'transparent',
    }}>
    <Icon type={IconType.Clock} color={Colors.gray} size={IconSize.Small} />
    <Text style={styles.description}>{item.time}</Text>
  </Layout>
);

const styles = StyleService.create({
  description: {
    color: Colors.gray,
    fontSize: 18,
    position: 'relative',
    top: -1,
  },
});
