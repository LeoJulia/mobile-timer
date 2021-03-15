/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Search } from './components';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
          <Layout style={styles.container}>
            <Layout>
              <Search />
              <Text category='h1'>Tabs</Text>
              <Text category='h1'>List</Text>
            </Layout>
          </Layout>
        </ScrollView>
      </SafeAreaView>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
