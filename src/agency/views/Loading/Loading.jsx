import React, {useEffect} from 'react';
import {Spinner, Container, Content, Grid} from 'native-base';
import styles from './loading.styles';
import {asyncStorageGetItem} from '../../utils/asyncStorage';

const Loading = ({navigation}) => {
  useEffect(() => {
    async function redirect() {
      const token = await asyncStorageGetItem('@movies-token');
      let route = 'login';
      if (token) {
        route = 'home';
      }
      navigation.navigate(route);
    }
    redirect();
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

export default Loading;
