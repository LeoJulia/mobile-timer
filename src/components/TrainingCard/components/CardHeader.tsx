import React from 'react';
import { Text, StyleService } from '@ui-kitten/components';

export const CardHeader = ({ item }) => (
  <Text style={styles.header}>{item.text}</Text>
);

const styles = StyleService.create({
  header: {
    color: '#868686',
    fontSize: 24,
  },
});
