import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Text,
  IconRegistry,
  List,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Search, TrainingCard } from './components';

const screenHeight = Dimensions.get('window').height;
const array = new Array(30).fill({ text: 'some item', time: '1:44' });

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView>
          <View style={styles.container}>
            <View>
              <Search />
            </View>
            <View>
              <Text category='h1'>Tabs</Text>
            </View>
            <List
              data={array}
              renderItem={(props) => <TrainingCard {...props} />}
            />
          </View>
        </SafeAreaView>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    flexBasis: screenHeight,
  },
});

export default App;
