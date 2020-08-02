import React, {useEffect} from 'react';
import {Spinner, Container, Content, Grid} from 'native-base';
import styles from './loading.styles';

export default ({navigation}) => {
  useEffect(() => {
    navigation.navigate('login');
  }, []);

  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Grid style={styles.grid}>
          <Spinner color="red" />
        </Grid>
      </Content>
    </Container>
  );
};
