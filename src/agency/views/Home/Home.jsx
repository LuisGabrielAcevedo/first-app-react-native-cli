import React, {useEffect, useState} from 'react';
import {Container, Content, Text, Grid} from 'native-base';
import MyHeader from '../../components/Header/Header';
import {asyncStorageGetItem} from '../../utils/asyncStorage';
import Search from '../../components/Search/Search';
import genericStyles from '../../styles';

const Home = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      loadUserInfo();
    }
  }, [user]);

  const loadUserInfo = async () => {
    let userInfo = await asyncStorageGetItem('@movies-user');
    userInfo = JSON.parse(userInfo);
    setUser(userInfo);
  };

  return (
    <Container>
      <MyHeader
        imageUri={
          'https://i1.sndcdn.com/avatars-000336588052-eufyvb-t500x500.jpg'
        }
      />
      <Content contentContainerStyle={genericStyles.centeredContent}>
        <Grid style={genericStyles.centeredGrid}>
          <Search />
        </Grid>
      </Content>
    </Container>
  );
};

export default Home;
