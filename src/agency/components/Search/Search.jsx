import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Form,
  Input,
  Item,
  Icon,
  DatePicker,
  Picker,
  Button,
  Text,
  View,
} from 'native-base';
import styles from './search.style';
import {getLocations} from '../../store/actions/itineraries.actions';

const Search = (props) => {
  const dispatch = useDispatch();

  const some = useSelector((state) => {
    console.log(state);
  });

  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  const [outboundDate, setOutboundDate] = useState();
  const [inboundDate, setInboundDate] = useState();
  const [adults, setAdults] = useState('0');
  const [children, setChildren] = useState('0');

  const handleOriginPlaceChange = (text) => setOriginPlace(text);
  const handleDestinationPlaceChange = (text) => setDestinationPlace(text);
  const handleOutboundDateChange = (date) => setOutboundDate(date);
  const handleInboundDateChange = (date) => setInboundDate(date);
  const handleAdultsChange = (adults) => setAdults(adults);
  const handleChildrenChange = (children) => setChildren(children);

  const isDisabled = () => {
    if (!originPlace || !destinationPlace || !outboundDate || !adults) {
      return true;
    } else {
      return false;
    }
  };

  const handleSearchButtonClick = () => {
    console.log({
      originPlace,
      destinationPlace,
    });
  };

  const handleOriginPlaceKeyPress = ({nativeEvent}) => {
    if (originPlace.length > 2) {
      dispatch(getLocations({query: originPlace}));
    }
  };

  const handleDestinationPlaceKeyPress = ({nativeEvent}) => {
    if (destinationPlace.length > 2) {
      //
    }
  };

  return (
    <Form style={styles.form}>
      <Item>
        <Icon name="ios-home"></Icon>
        <Input
          placeholder="Origen"
          value={originPlace}
          style={styles.input}
          onChangeText={handleOriginPlaceChange}
          onKeyPress={handleOriginPlaceKeyPress}
        />
      </Item>
      <Item>
        <Icon name="ios-airplane"></Icon>
        <Input
          value={destinationPlace}
          style={styles.input}
          placeholder="Destino"
          onChangeText={handleDestinationPlaceChange}
          onKeyPress={handleDestinationPlaceKeyPress}
        />
      </Item>
      <Item style={styles.datesContainer}>
        <Icon name="ios-calendar"></Icon>
        <DatePicker
          placeHolderText="Ida"
          onDateChange={handleOutboundDateChange}
        />
        <Icon name="ios-calendar"></Icon>
        <DatePicker
          placeHolderText="Regreso"
          onDateChange={handleInboundDateChange}
        />
      </Item>
      <Item style={styles.pikersContainer}>
        <Icon name="ios-person"></Icon>
        <Picker selectedValue={adults} onValueChange={handleAdultsChange}>
          <Picker.Item label="Adultos" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
        </Picker>
        <Icon name="ios-person"></Icon>
        <Picker selectedValue={children} onValueChange={handleChildrenChange}>
          <Picker.Item label="Niños" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
        </Picker>
      </Item>
      <View style={styles.searchButtonContainer}>
        <Button
          style={styles.searchButton}
          disabled={isDisabled()}
          onPress={handleSearchButtonClick}>
          <Icon name="ios-search" style={styles.searchIcon}></Icon>
          <Text style={styles.serachButtonLabel}>Buscar</Text>
        </Button>
      </View>
    </Form>
  );
};

export default Search;
