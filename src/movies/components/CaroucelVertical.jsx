import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {BASE_PATH_IMG} from '../utils/constants';
import {Title, Text} from 'react-native-paper';
import {map, size} from 'lodash';
import {getGenreMovieApi} from '../api/movies';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7);

export default function CaroucelVertical(props) {
  const {data, navigation} = props;
  return (
    <Carousel
      layout={'default'}
      data={data}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
      renderItem={(item) => <RenderIten data={item} navigation={navigation} />}
    />
  );
}

function RenderIten(props) {
  const {data, navigation} = props;
  const {title, poster_path, id, genre_ids} = data.item;
  const [genres, setGenres] = useState(null);
  const imageUrl = `${BASE_PATH_IMG}/w500/${poster_path}`;

  useEffect(() => {
    getGenreMovieApi(genre_ids).then((response) => {
      setGenres(response);
    });
  }, []);

  const onNavigation = () => {
    navigation.navigate('movie', {id});
  };

  return (
    <TouchableWithoutFeedback onPress={onNavigation}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <Title style={styles.title}>{title}</Title>
        <View style={styles.genres}>
          {genres &&
            map(genres, (genre, index) => (
              <Text key={index} style={styles.genre}>
                {genre}
                {index !== size(genres) - 1 && ', '}
              </Text>
            ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    textShadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 450,
    borderRadius: 20,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  genres: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
});
