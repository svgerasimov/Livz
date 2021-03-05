import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Text, View, TextInput} from 'react-native';
import {Screen} from '../components/Screen';
import {PickerSelect, Row, Button, ButtonGroup} from '../components';
import {useActions, useTypedSelector} from '../hooks';
import {typesOfApartment, sortsOfApartment, rooms} from '../data/apartments';
import {SearchAdvertsParamList} from '../navigation/SearchAdvertsStack';
import {Routes} from '../navigation/routes';
import {Colors, rems} from '../config';
import {getFilteredAdverts} from '../state/selectors';
import {getCities, getDistricts, getSubwayStations} from '../data/helpers';

type FilterAdvertsScreenNavigationProp = StackNavigationProp<
  SearchAdvertsParamList,
  Routes.FILTER_ADVERTS
>;
type FilterAdvertsScreenRouteProp = RouteProp<
  SearchAdvertsParamList,
  Routes.FILTER_ADVERTS
>;

interface FilterAdvertsScreenProps {
  navigation: FilterAdvertsScreenNavigationProp;
  route: FilterAdvertsScreenRouteProp;
}

export const FilterAdvertsScreen: React.FC<FilterAdvertsScreenProps> = ({
  navigation,
}) => {
  const [selectedBtnGroupIndex, setSelectedBtnGroupIndex] = useState(0);
  const {
    selectTypeOfApartment,
    selectSortOfApartment,
    selectNumberOfRooms,
    setPriceFrom,
    setPriceTo,
    selectCity,
    selectDistrict,
    selectSubwayStation,
  } = useActions();
  const state = useTypedSelector((state) => state.filter);
  const filteredAdverts = useTypedSelector(getFilteredAdverts);

  const btnGroupPressHandler = (selectedIndex: number) => {
    setSelectedBtnGroupIndex(selectedIndex);
    selectNumberOfRooms(selectedIndex + 1);
  };

  return (
    <Screen style={styles.screen}>
      <Row style={styles.row}>
        <PickerSelect
          item={state.type}
          data={typesOfApartment.map((option) => ({
            label: option,
            value: option,
          }))}
          label="Вид недвижимости"
          onValueChanged={(value) => {
            selectTypeOfApartment(value);
          }}
          placeholder="Выберите вид недвижимости"
        />
      </Row>
      <Row style={styles.row}>
        <PickerSelect
          item={state.sort}
          data={sortsOfApartment.map((option) => ({
            label: option,
            value: option,
          }))}
          label="Тип недвижимости"
          onValueChanged={(value) => {
            selectSortOfApartment(value);
          }}
          placeholder="Выберите тип недвижимости"
        />
      </Row>

      <Row style={styles.row}>
        <Text style={styles.label}>Количество комнат</Text>
        <View style={[styles.container, {marginTop: 8}]}>
          <View style={styles.btnGroupLabelContainer}>
            <Text style={styles.btnGroupLabel}>{state.sort || 'Квартира'}</Text>
          </View>
          <View style={styles.btnGroupContainer}>
            <ButtonGroup
              buttons={[...rooms]}
              onPress={btnGroupPressHandler}
              selectedIndex={selectedBtnGroupIndex}
            />
          </View>
        </View>
      </Row>

      <Row style={styles.row}>
        <Text style={styles.label}>Цена</Text>
        <View style={styles.container}>
          <View style={styles.price}>
            <Text style={styles.textInputLabel}>От</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                value={state.priceFrom?.toString()}
                onChangeText={(value) => setPriceFrom(+value)}
                placeholder="1 000 000"
                placeholderTextColor={Colors.textInputPlaceholderColor}
                textAlign="center"
              />
            </View>
          </View>
          <View style={styles.price}>
            <Text style={styles.textInputLabel}>До</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                value={state.priceTo?.toString()}
                onChangeText={(value) => setPriceTo(+value)}
                placeholder="10 000 000"
                placeholderTextColor={Colors.textInputPlaceholderColor}
                textAlign="center"
              />
            </View>
          </View>
        </View>
      </Row>

      <Row style={styles.row}>
        <PickerSelect
          item={state.city}
          data={getCities().map((option) => ({
            label: option,
            value: option,
          }))}
          label="Город"
          onValueChanged={(value) => selectCity(value)}
          placeholder="Выберите город..."
        />
      </Row>

      <Row style={styles.row}>
        <PickerSelect
          item={state.district}
          data={[...getDistricts(state.city)].map((option) => ({
            label: option,
            value: option,
          }))}
          label="Район"
          onValueChanged={(value) => selectDistrict(value)}
          placeholder="Выберите район..."
        />
      </Row>

      <Row style={[styles.row, {marginBottom: 30}]}>
        <PickerSelect
          item={state.subwayStation}
          data={[...getSubwayStations(state.city)].map((option) => ({
            label: option,
            value: option,
          }))}
          label="Метро"
          onValueChanged={(value) => selectSubwayStation(value)}
          placeholder="Выберите метро..."
        />
      </Row>
      <Row>
        <Button
          color="dark"
          buttonStyle={styles.btnStyle}
          onPress={() => navigation.goBack()}
          title={`Найдено ${Object.keys(filteredAdverts).length} объектов`}
        />
      </Row>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  screen: {
    padding: rems[20],
  },
  label: {
    color: Colors.labelColor,
    fontSize: rems[13],
  },
  row: {
    marginBottom: rems[20],
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  textInputLabel: {
    color: Colors.labelColor,
    fontSize: rems[16],
  },
  textInputContainer: {
    flex: 1,
    marginHorizontal: rems[20],
  },
  textInput: {
    height: rems[40],
    borderColor: Colors.inputFieldBorderColor,
    borderBottomWidth: 1,
    width: '100%',
    fontSize: rems[16],
  },
  btnGroupContainer: {
    flex: 1,
    // borderColor: Colors.darkslategray,
    // borderWidth: 1,
  },
  btnGroupLabelContainer: {
    borderWidth: 1,
    borderColor: Colors.btnGroupBorderColor,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    height: rems[40],
    width: rems[83],
    borderRightWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGroupLabel: {
    color: Colors.black,
    fontSize: rems[13],
  },
  btnStyle: {
    width: '100%',
  },
});
