import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Text,
  IconRegistry,
  List,
  Layout,
  TabView,
  Tab,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Search, TrainingCard } from './components';

const array = new Array(15).fill({ text: 'some item', time: '1:44' });

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView>
          <Layout style={styles.container}>
            <Layout>
              <Search />
            </Layout>
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
          </Layout>
        </SafeAreaView>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;
