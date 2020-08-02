import React from 'react';
import styles from './main.styles';
import {Appbar, Button, Card} from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';

const apps = [
  {
    title: 'Movies',
    description: 'Aplicación para buscar películas.',
    path: 'movies',
  },
  {
    title: 'Agency',
    description: 'Aplicación para buscar vuelos.',
    path: 'agency',
  },
];

const Main = (props) => {
  const {navigation} = props;
  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="React Native Demos" />
      </Appbar.Header>
      {apps.map((app, i) => (
        <Card style={styles.card} key={i}>
          <Card.Title
            title={app.title}
            subtitle={app.description}
            right={() => (
              <Button
                mode="outlined"
                onPress={() => navigation.navigate(app.path)}>
                Ver
              </Button>
            )}
          />
        </Card>
      ))}
    </PaperProvider>
  );
};

export default Main;
