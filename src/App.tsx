/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
  Modal,
} from 'react-native';

import {Button, Card, CreateCard} from './components';

const App = () => {
  const [isStartCreating, setStartCreating] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Card>
            <Text>Looong text</Text>
          </Card>
        </ScrollView>
        <View>
          <Button
            wrapperStyle={styles.buttonWrapper}
            buttonStyle={styles.button}
            text={'+'}
            onPress={() => setStartCreating(true)}
          />
        </View>
        <Modal
          transparent={true}
          visible={isStartCreating}
          animationType="slide"
          onRequestClose={() => setStartCreating(false)}>
          <CreateCard onClose={() => setStartCreating(false)} />
        </Modal>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#242424',
    height: '100%',
    padding: 20,
  },
  buttonWrapper: {
    backgroundColor: '#60a0ff',
    alignItems: 'center',
    width: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 100,
  },
  button: {
    color: '#ffffff',
    fontSize: 40,
    marginTop: -4,
  },
});

export default App;
