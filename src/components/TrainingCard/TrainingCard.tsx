import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Text, Icon } from '@ui-kitten/components';

const renderHeader = (item: { text: string }) => () => (
  <Text category='h2'>{item.text}</Text>
);

const renderDescription = (item) => () => (
  <Text>
    <Icon name='clock-outline' fill='#000' style={styles.icon} />
    {item.time}
  </Text>
);

export const TrainingCard = ({ item, index }) => {
  return (
    <ListItem
      key={index}
      style={styles.card}
      title={renderHeader(item)}
      description={renderDescription(item)}
      //   accessoryRight
    />
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  icon: {
    width: 23,
    height: 23,
  },
});
