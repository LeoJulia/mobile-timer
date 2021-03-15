/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  Input,
} from '@ui-kitten/components';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  const [value, setValue] = useState<string>();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
          <Layout style={styles.container}>
            <Layout>
              <Input
                style={styles.search}
                placeholder='Поиск'
                value={value}
                onChangeText={(newValue: string) => setValue(newValue)}
              />
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
  search: {
    alignSelf: 'stretch',
  },
});

export default App;
