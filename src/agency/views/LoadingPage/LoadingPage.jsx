import React, {useEffect} from 'react';
import {LOGIN_PAGE} from '../../constants';
import {Spinner, Container, Content, Grid} from 'native-base';
import styles from './LoadingPage.styles';

export default ({navigation}) => {
  useEffect(() => {
    navigation.navigate(LOGIN_PAGE);
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
