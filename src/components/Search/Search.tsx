import React, { useState } from 'react';
import { Input } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const Search = () => {
  const [value, setValue] = useState<string>();

  return (
    <Input
      style={styles.search}
      placeholder='Поиск'
      value={value}
      onChangeText={(newValue: string) => setValue(newValue)}
    />
  );
};

const styles = StyleSheet.create({
  search: {
    alignSelf: 'stretch',
  },
});
