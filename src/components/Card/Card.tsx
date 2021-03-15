import React from 'react';
import {View, StyleSheet} from 'react-native';

interface ICardProps {
  children: any;
}

const Card = ({children}: ICardProps) => {
  return <View style={styles.cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#eee5d7',
    padding: 10,
    borderRadius: 10,
  },
});

export {Card};
