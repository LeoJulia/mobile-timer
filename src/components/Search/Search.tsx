import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Input } from '@ui-kitten/components';
import { IconType } from '../../constants';

const SearchIcon = (props) => <Icon {...props} name={IconType.Search} />;

export const Search = () => {
  const [value, setValue] = useState<string>();

  return (
    <Input
      style={styles.search}
      placeholder='Поиск'
      value={value}
      accessoryRight={SearchIcon}
      onChangeText={(newValue: string) => setValue(newValue)}
    />
  );
};

const styles = StyleSheet.create({
  search: {
    alignSelf: 'stretch',
  },
});
