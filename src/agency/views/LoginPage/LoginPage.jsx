import React from 'react';
import {Container, Content, Text, Grid, Button} from 'native-base';
import styles from './LoginPage.styles';
import {Image} from 'react-native';
const GOOGLE_IMAGE = require('../../assets/images/google.png');

export default function LoginPage() {
  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Grid style={styles.grid}>
          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.subtitle}>Inicia sesión para continuar.</Text>
          <Button style={styles.button} light>
            <Image style={styles.googleIcon} source={GOOGLE_IMAGE} />
            <Text>Google</Text>
          </Button>
        </Grid>
      </Content>
    </Container>
  );
}
