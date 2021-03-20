import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from '@ui-kitten/components';
import { Icon } from '../Icon';
import { IconType, IconSize } from '../../constants';

const SearchIcon = (props) => (
  <Icon {...props} type={IconType.Search} size={IconSize.Small} />
);

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
