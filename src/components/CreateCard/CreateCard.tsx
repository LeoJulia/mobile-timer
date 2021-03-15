import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Button as NativeButton,
} from 'react-native';
import {Card, Button} from '../index';

interface ICreateCardProps {
  onClose: () => void;
}

const CreateCard = ({onClose}: ICreateCardProps) => {
  // const []

  return (
    <View style={styles.card}>
      <Card>
        <Button
          text="+"
          onPress={onClose}
          wrapperStyle={styles.buttonWrapper}
          buttonStyle={styles.button}
        />
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            blurOnSubmit={true}
          />
          <TextInput style={styles.textInput} defaultValue="Разминка" />
          <TextInput style={styles.textInput} placeholder="Test" />
          <TextInput style={styles.textInput} placeholder="Test" />
          <NativeButton title="+" onPress={() => {}} />
        </View>
      </Card>
      <Button
        text="✓"
        onPress={onClose}
        wrapperStyle={styles.buttonWrapperAdd}
        buttonStyle={styles.buttonAdd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    justifyContent: 'center',
    height: '100%',
  },
  buttonWrapper: {
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    borderRadius: 100,
  },
  button: {
    color: '#616161',
    fontSize: 40,
    marginTop: -4,
    transform: [{rotate: '45deg'}],
  },
  buttonWrapperAdd: {
    alignItems: 'center',
    backgroundColor: '#62bd62',
    alignSelf: 'flex-end',
    right: 15,
    bottom: 15,
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  buttonAdd: {
    color: '#ffffff',
    fontSize: 30,
  },
  textInput: {
    width: '90%',
    fontSize: 25,
    borderRadius: 15,
    padding: 5,
    paddingStart: 10,
  },
  defaultText: {
    color: '#858585',
    fontSize: 20,
  },
});

export {CreateCard};
