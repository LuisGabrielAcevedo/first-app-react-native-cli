import React from 'react';
import {Header, Left, Body, Right, Thumbnail} from 'native-base';
import styles from './header.styles';
import {PRIMARY_DARK} from '../../constants';

const MyHeader = ({imageUri}) => {
  return (
    <Header androidStatusBarColor={PRIMARY_DARK} style={styles.header}>
      <Left />
      <Body />
      <Right>
        <Thumbnail source={{uri: imageUri && imageUri}} small />
      </Right>
    </Header>
  );
};

export default MyHeader;
