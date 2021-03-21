import React from 'react';
import { Text, StyleService } from '@ui-kitten/components';
import { Colors } from '../../../constants';

export const CardHeader = ({ item }) => (
  <Text style={styles.header}>{item.text}</Text>
);

const styles = StyleService.create({
  header: {
    color: Colors.darkGray,
    fontSize: 24,
  },
});
