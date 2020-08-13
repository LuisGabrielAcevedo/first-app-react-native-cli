import React from 'react';
import {Container, Content, Text, Grid, Button} from 'native-base';
import styles from './login.styles';
import {Image} from 'react-native';
import {asyncStorageSetItem} from '../../utils/asyncStorage';
const GOOGLE_IMAGE = require('../../assets/images/google.png');
import genericStyles from '../../styles';

const Login = (props) => {
  const {navigation} = props;
  const handleLogin = async () => {
    await asyncStorageSetItem('@movies-user', {
      name: 'Luis Gabriel Acevedo',
      email: 'luis@gmail.com',
    });
    await asyncStorageSetItem('@movies-token', 'ahhgsg7266532a');
    navigation.navigate('home');
  };

  return (
    <Container>
      <Content
        contentContainerStyle={[genericStyles.centeredContent, styles.content]}>
        <Grid style={[genericStyles.centeredGrid, styles.grid]}>
          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.subtitle}>Inicia sesión para continuar.</Text>
          <Button style={styles.button} light onPress={handleLogin}>
            <Image style={styles.googleIcon} source={GOOGLE_IMAGE} />
            <Text>Google</Text>
          </Button>
        </Grid>
      </Content>
    </Container>
  );
};

export default Login;
