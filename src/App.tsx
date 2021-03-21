import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Search } from './components';
import { Tabs } from './modules';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView>
        <Layout style={styles.container}>
          <Layout>
            <Search />
          </Layout>
          <Tabs />
        </Layout>
      </SafeAreaView>
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;
