import React from 'react';
import { ListItem, StyleService } from '@ui-kitten/components';
import { CardHeader, CardDescription, CardActionButtons } from './components';

const renderHeader = (item: { text: string }) => () => (
  <CardHeader item={item} />
);

const renderDescription = (item) => () => <CardDescription item={item} />;

const renderActionButtons = () => () => <CardActionButtons />;

export const TrainingCard = ({ item, index }) => (
  <ListItem
    key={index}
    style={styles.card}
    title={renderHeader(item)}
    description={renderDescription(item)}
    accessoryRight={renderActionButtons()}
  />
);
const styles = StyleService.create({
  card: {
    padding: 10,
  },
});
