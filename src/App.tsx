import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Text,
  IconRegistry,
  List,
  Layout,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Search, TrainingCard } from './components';

const array = new Array(30).fill({ text: 'some item', time: '1:44' });

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView>
          <Layout style={styles.container}>
            <Layout>
              <Search />
            </Layout>
            <Layout>
              <Text category='h1'>Tabs</Text>
            </Layout>
            <List
              data={array}
              renderItem={(props) => <TrainingCard {...props} />}
            />
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
