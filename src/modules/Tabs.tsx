import React, { useState } from 'react';
import { Text, List, Layout, TabView, Tab } from '@ui-kitten/components';
import { TrainingCard } from '../components';

const array = new Array(15).fill({ text: 'some item', time: '1:44' });

export const Tabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}>
      <Tab title='Тренировки'>
        <Layout>
          <List
            data={array}
            renderItem={(props) => <TrainingCard {...props} />}
          />
        </Layout>
      </Tab>
      <Tab title='Сеты'>
        <Layout>
          <Text category='h5'>Сеты</Text>
        </Layout>
      </Tab>
    </TabView>
  );
};
