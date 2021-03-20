import React from 'react';
import { Text, Icon, StyleService, Layout } from '@ui-kitten/components';

export const CardDescription = ({ item }) => (
  <Layout
    style={{
      flexDirection: 'row',
      backgroundColor: 'transparent',
    }}>
    <Icon name='clock-outline' fill='#C4C4C4' style={styles.icon} />
    <Text style={styles.description}>{item.time}</Text>
  </Layout>
);

const styles = StyleService.create({
  icon: {
    width: 23,
    height: 23,
  },
  description: {
    color: '#C4C4C4',
    fontSize: 18,
    position: 'relative',
    top: -1,
  },
});
