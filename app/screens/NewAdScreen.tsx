import React, {useState, useEffect} from 'react';
import {Text, View, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import Slider from '@react-native-community/slider';
// import TextInputMask from 'react-native-text-input-mask';
import {
  PickerSelect,
  Screen,
  Row,
  Button,
  Input,
  ButtonGroup,
} from '../components';
import {rems, Colors} from '../config';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useAddAdvertForm, ActionType} from '../hooks/useAddAdvertForm';
import {
  modesToSubwayStation,
  rooms,
  loggia,
  levels,
  terrace,
  windowsFace,
  bathrooms,
  repair,
  parking,
} from '../data/apartments';
import {Circle, CheckBox} from '../components';
import {Cities, subwayStations, allSubwayStations} from '../data/cities';
import {
  SquareMeterIcon,
  InfoIcon,
  PhotoIcon,
  AddIcon,
  FavoritesIcon,
  FlatPlusIcon,
  CloseIcon,
} from '../components/svg/icons';
import Modal from 'react-native-modal';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {evaluate} from 'mathjs';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useActions} from '../hooks';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../navigation/routes';
import {useSelector} from 'react-redux';

export const NewAdScreen = () => {
  const navigation = useNavigation();
  const {state, dispatch} = useAddAdvertForm();
  const {AddAdvert, fetchAttributes} = useActions();
  const [livingArea, setLivingArea] = useState('');
  const [selectedLogiaIndex, setSelectedLogiaIndex] = useState(0);
  const [selectedTerraceIndex, setSelectedTerraceIndex] = useState(0);
  const [selectedLevelsIndex, setSelectedLevelsIndex] = useState(0);
  const [sepBathroomsIndex, setSepBathroomsIndex] = useState(0);
  const [joinedBathroomsIndex, setJoinedSepBathroomsIndex] = useState(0);
  const [sliderValues, setSliderValues] = useState({
    minInterest: 0,
    maxInterest: 10,
    interest: 0,
  });
  const [stations, setStations] = useState(1);

  const [isModalVisible, setModalVisible] = useState(false);

  const [apartmentType, setApartmentType] = useState(null);
  const [apartmentSorts, setApartmentSorts] = useState(null);

  const categories = useSelector((state) => state.advertisements.categories);
  const attributes = useSelector((state) => state.advertisements.attributes);
  const loading = useSelector((state) => state.advertisements.loading);
  const accountType = useSelector((state) => state.advertisements.accountType);
  const metros = useSelector((state) => state.metro.data);

  const [newAd, setNewAd] = useState({});
  const [isVisibleAboutAd, setIsVisibleAboutAd] = useState(false);

  console.log(newAd, 'new ad');

  const typesOfApartment = [...categories];

  let sortsOfApartment = [];

  useEffect(() => {
    if (apartmentType) {
      sortsOfApartment = [
        ...categories.find((el) => el.id === apartmentType).children,
      ];
      setApartmentSorts(sortsOfApartment);
    }
  }, [apartmentType]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectTerraceHandler = (selectedIndex: number) => {
    setSelectedTerraceIndex(selectedIndex);
    dispatch({
      type: ActionType.SET_TERACE,
      payload: terrace[selectedIndex],
    });
  };
  const selectLogiaHandler = (selectedIndex: number) => {
    setSelectedLogiaIndex(selectedIndex);
    dispatch({
      type: ActionType.SET_LOGIA,
      payload: loggia[selectedIndex],
    });
  };
  const selectLevelsHandler = (selectedIndex: number) => {
    setSelectedLevelsIndex(selectedIndex);
    dispatch({
      type: ActionType.SET_LEVELS,
      payload: levels[selectedIndex],
    });
  };
  const selectSepBathroomsHandler = (selectedIndex: number) => {
    setSepBathroomsIndex(selectedIndex);
    dispatch({
      type: ActionType.SET_SEPARATE_BATHROOMS,
      payload: bathrooms[selectedIndex],
    });
  };
  const selectJoinedBathroomsHandler = (selectedIndex: number) => {
    setJoinedSepBathroomsIndex(selectedIndex);
    dispatch({
      type: ActionType.SET_JOINED_BATHROOMS,
      payload: bathrooms[selectedIndex],
    });
  };

  const _renderPhoto = ({item}: any) => (
    <FastImage
      key={item}
      style={{width: 105, height: 80, marginLeft: 8}}
      resizeMode={FastImage.resizeMode.cover}
      source={{
        uri: item,
      }}
    />
  );

  const _renderProfit = () => {
    // (+state.price * (sliderValues.interest / 100)).toFixed(2)

    if (!!state.price) {
      return (
        +state.price +
        Number((+state.price * (sliderValues.interest / 100)).toFixed(2))
      );
    }
    return 0;
  };

  useEffect(() => {
    if (attributes && attributes.length !== 0) {
      let attributesArray = [];
      attributes.forEach((attributeEl) => {
        attributesArray = [
          ...attributesArray,
          {attribute_id: attributeEl.id, value: []},
        ];
        switch (attributeEl.type) {
          case 5: {
            attributesArray[
              attributesArray.findIndex(
                (el) => el.attribute_id === attributeEl.id,
              )
            ] = {
              attribute_id: attributeEl.id,
              value: JSON.parse(attributeEl.values)[0].value,
            };
            break;
          }
          case 6: {
            attributesArray[
              attributesArray.findIndex(
                (el) => el.attribute_id === attributeEl.id,
              )
            ] = {
              attribute_id: attributeEl.id,
              value: Array(JSON.parse(attributeEl.values).length),
            };
            break;
          }
        }
      });
      setNewAd({...newAd, attributes: attributesArray});
      setIsVisibleAboutAd(true);
    }
  }, [attributes]);

  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        alwaysBounceVertical={false}>
        <Row style={styles.row}>
          <PickerSelect
            item={state.type}
            data={typesOfApartment.map((option) => ({
              label: option.name,
              value: option.id,
            }))}
            label="Тип недвижимости"
            onValueChanged={(value) => {
              setApartmentType(value);
            }}
            placeholder="Выберите тип недвижимости"
          />
        </Row>
        {apartmentType && apartmentSorts && (
          <>
            <Row style={styles.row}>
              <PickerSelect
                item={state.sort}
                data={apartmentSorts.map((option) => ({
                  label: option.name,
                  value: option.id,
                }))}
                label="Объект недвижимости"
                onValueChanged={(value) => {
                  fetchAttributes(value);
                  setNewAd({
                    category_id: value,
                    ...newAd,
                  });
                }}
                placeholder="Выберите объект недвижимости"
              />
            </Row>
            {attributes &&
            attributes.length !== 0 &&
            isVisibleAboutAd &&
            !loading ? (
              <>
                <Row style={styles.row}>
                  <Text style={styles.label}>Адрес</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={newAd.address}
                      onChangeText={(value) =>
                        setNewAd({
                          ...newAd,
                          address: value,
                        })
                      }
                      placeholder="Введите полный адрес"
                      textAlign="left"
                    />
                  </View>
                </Row>
                <Row style={styles.row}>
                  <FastImage
                    style={styles.mapImage}
                    source={require('../assets/img/map.png')}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </Row>
                {Array.from({length: stations}, (_, i) => {
                  return (
                    <>
                      <Row style={styles.row}>
                        <PickerSelect
                          item={state.subwayStation}
                          data={metros.map((option) => ({
                            label: option.name,
                            value: option.id,
                          }))}
                          label="Метро"
                          onValueChanged={(value) => {
                            dispatch({
                              type: ActionType.SELECT_SUBWAY_STATION,
                              payload: value,
                            });
                          }}
                          placeholder="Выберите метро"
                        />
                      </Row>
                      <Row style={styles.row}>
                        <View style={styles.container}>
                          <View
                            style={{
                              width: '30%',
                              justifyContent: 'space-between',
                            }}>
                            <Text style={[styles.label, {flex: 1}]}>
                              Минут до метро
                            </Text>
                            <View style={[styles.textInputContainer]}>
                              <TextInput
                                style={styles.textInput}
                                value={state.timeToSubwayStation}
                                onChangeText={(value) =>
                                  dispatch({
                                    type: ActionType.SET_TIME_TO_SUBWAY,
                                    payload: value,
                                  })
                                }
                                placeholder="5"
                                // placeholderTextColor="#373A3F"
                                textAlign="left"
                              />
                            </View>
                          </View>

                          <View style={{width: '70%', paddingLeft: 40}}>
                            <PickerSelect
                              item={state.modeToSubwayStation}
                              data={modesToSubwayStation.map((option) => ({
                                label: option,
                                value: option,
                              }))}
                              label="Пешком/Транспорт"
                              onValueChanged={(value) => {
                                dispatch({
                                  type: ActionType.SET_MODE_TO_SUBWAY,
                                  payload: value,
                                });
                              }}
                              placeholder="Выберите способ до метро"
                            />
                          </View>
                        </View>
                      </Row>
                    </>
                  );
                })}
                <Row style={styles.row}>
                  <Button
                    titleStyle={{
                      color: Colors.primaryColor,
                      fontSize: 13,
                      fontWeight: '700',
                    }}
                    buttonStyle={{
                      borderRadius: 5,
                      height: 35,
                      alignSelf: 'center',
                    }}
                    type="outline"
                    color="green"
                    title="Добавить станцию"
                    onPress={() => {
                      setStations((prevState) => prevState + 1);
                    }}
                  />
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>Площадь помещения</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={newAd.area}
                      onChangeText={(value) =>
                        setNewAd({
                          ...newAd,
                          area: value,
                        })
                      }
                      placeholder="Введите площадь помещения"
                      textAlign="left"
                    />
                  </View>
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>Заголовок объявления</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={newAd.name}
                      onChangeText={(value) =>
                        setNewAd({
                          ...newAd,
                          name: value,
                        })
                      }
                      placeholder="Введите заголовок объявления"
                      textAlign="left"
                    />
                  </View>
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>Описание</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={newAd.description}
                      onChangeText={(value) =>
                        setNewAd({
                          ...newAd,
                          description: value,
                        })
                      }
                      placeholder="Введите описание"
                      textAlign="left"
                    />
                  </View>
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>Цена</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={newAd.price}
                      onChangeText={(value) =>
                        setNewAd({
                          ...newAd,
                          price: value,
                        })
                      }
                      placeholder="Введите цену"
                      textAlign="left"
                    />
                  </View>
                </Row>
                {accountType === 'Агент' && (
                  <>
                    <Row style={styles.row}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                        }}>
                        <View
                          style={{
                            width: 21,
                            height: 21,
                            borderRadius: 21 / 2,
                            borderWidth: 1,
                            borderColor: '#DFE3EA',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <InfoIcon hitSlop={5} />
                        </View>
                        <Text
                          style={{
                            color: '#717377',
                            fontSize: 14,
                            paddingLeft: 9,
                          }}>
                          Вознаграждение агенту
                        </Text>
                      </View>
                    </Row>
                    <Row style={styles.row}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#191A1C',
                          marginBottom: 12,
                        }}>
                        Вы можете указать бонус, который хотите получить в
                        случае успешной сделки.
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#67696B',
                        }}>
                        Имейте ввиду чем ниже вы указываете процент, тем выше
                        объект в каталоге.
                      </Text>
                    </Row>
                    <View style={[styles.row, styles.sliderContainer]}>
                      <Slider
                        step={1}
                        style={{width: '100%'}}
                        value={sliderValues.interest}
                        minimumValue={0}
                        maximumValue={10}
                        minimumTrackTintColor={Colors.primaryColor}
                        maximumTrackTintColor="#F0F3F9"
                        onValueChange={(value) => {
                          setSliderValues({
                            ...sliderValues,
                            interest: value,
                          });
                          setNewAd({...newAd, remuniration: value});
                        }}
                      />
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{color: '#6A6D74', fontSize: 12}}>
                          {sliderValues.minInterest} %
                        </Text>
                        <Text style={{fontSize: 15, color: '#373A3F'}}>
                          {sliderValues.interest + '%'}
                        </Text>
                        <Text style={{color: '#6A6D74', fontSize: 12}}>
                          {sliderValues.maxInterest} %
                        </Text>
                      </View>
                    </View>
                    <Row style={styles.row}>
                      <Text style={{marginBottom: 6}}>
                        В случае успешной сделки Вы заработаете:{' '}
                      </Text>
                      <Text
                        style={{
                          color: Colors.primaryColor,
                          fontSize: 19,
                          fontWeight: '700',
                        }}>
                        {_renderProfit()} ₽
                      </Text>
                    </Row>
                  </>
                )}
                <Row style={styles.row}>
                  <Text style={styles.label}>Телефон</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={newAd.phone}
                      onChangeText={(value) =>
                        setNewAd({
                          ...newAd,
                          phone: value,
                        })
                      }
                      placeholder="Введите Телефон"
                      textAlign="left"
                    />
                  </View>
                </Row>

                <Row style={styles.row}>
                  <Text style={styles.title}>Об объекте</Text>
                </Row>
                {attributes.map((attributeEl) => {
                  switch (attributeEl.type) {
                    case 0: {
                      return (
                        <Row style={styles.row}>
                          <PickerSelect
                            item={
                              newAd.attributes[
                                newAd.attributes.findIndex(
                                  (el) => attributeEl.id === el.attribute_id,
                                )
                              ]
                            }
                            data={JSON.parse(attributeEl.values).map(
                              (option) => ({
                                label: option.value,
                                value: option.value,
                              }),
                            )}
                            label={attributeEl.name}
                            onValueChanged={(value) => {
                              let ad = newAd;
                              ad.attributes[
                                ad.attributes.findIndex(
                                  (a) => a.attribute_id === attributeEl.id,
                                )
                              ] = {
                                attribute_id: attributeEl.id,
                                value: value,
                              };
                              setNewAd(ad);
                            }}
                            placeholder={attributeEl.name}
                          />
                        </Row>
                      );
                      break;
                    }
                    case 1: {
                      return (
                        <Row style={styles.row}>
                          <Text style={styles.label}>{attributeEl.name}</Text>
                          <View style={styles.textInputContainer}>
                            <TextInput
                              style={styles.textInput}
                              value={
                                newAd.attributes[
                                  newAd.attributes.findIndex(
                                    (el) => attributeEl.id === el.attribute_id,
                                  )
                                ]
                              }
                              onChangeText={(value) => {
                                let ad = newAd;
                                ad.attributes[
                                  ad.attributes.findIndex(
                                    (a) => a.attribute_id === attributeEl.id,
                                  )
                                ] = {
                                  attribute_id: attributeEl.id,
                                  value: value,
                                };
                                setNewAd(ad);
                              }}
                              placeholder={attributeEl.name}
                              textAlign="left"
                            />
                          </View>
                        </Row>
                      );
                      break;
                    }
                    case 2: {
                      return (
                        <Row style={styles.row}>
                          <Text style={styles.label}>{attributeEl.name}</Text>
                          <View style={styles.textInputContainer}>
                            <TextInput
                              style={styles.textInput}
                              value={
                                newAd.attributes[
                                  newAd.attributes.findIndex(
                                    (el) => attributeEl.id === el.attribute_id,
                                  )
                                ]
                              }
                              onChangeText={(value) => {
                                let ad = newAd;
                                ad.attributes[
                                  ad.attributes.findIndex(
                                    (a) => a.attribute_id === attributeEl.id,
                                  )
                                ] = {
                                  attribute_id: attributeEl.id,
                                  value: value,
                                };
                                setNewAd(ad);
                              }}
                              placeholder={attributeEl.name}
                              textAlign="left"
                              numberOfLines={2}
                            />
                          </View>
                        </Row>
                      );
                    }
                    case 3: {
                      return (
                        <Row style={styles.row}>
                          <Text style={styles.label}>{attributeEl.name}</Text>
                          <View style={styles.textInputContainer}>
                            <TextInput
                              style={styles.textInput}
                              value={
                                newAd.attributes[
                                  newAd.attributes.findIndex(
                                    (el) => attributeEl.id === el.attribute_id,
                                  )
                                ]
                              }
                              onChangeText={(value) => {
                                let ad = newAd;
                                ad.attributes[
                                  ad.attributes.findIndex(
                                    (a) => a.attribute_id === attributeEl.id,
                                  )
                                ] = {
                                  attribute_id: attributeEl.id,
                                  value: value,
                                };
                                setNewAd(ad);
                              }}
                              placeholder={attributeEl.name}
                              textAlign="left"
                              numberOfLines={4}
                            />
                          </View>
                        </Row>
                      );
                    }
                    case 4: {
                      return (
                        <Row style={styles.row}>
                          <Text style={styles.label}>{attributeEl.name}</Text>
                          <View style={styles.textInputContainer}>
                            <TextInput
                              style={styles.textInput}
                              value={
                                newAd.attributes.find(
                                  (el) => attributeEl.id === el.attribute_id,
                                ).value
                              }
                              onChangeText={(value) => {
                                let ad = newAd;
                                ad.attributes[
                                  ad.attributes.findIndex(
                                    (a) => a.attribute_id === attributeEl.id,
                                  )
                                ] = {
                                  attribute_id: attributeEl.id,
                                  value: value,
                                };
                                setNewAd(ad);
                              }}
                              placeholder={attributeEl.name}
                              textAlign="left"
                            />
                            <Text style={styles.label}>
                              {attributeEl.prefix}
                            </Text>
                          </View>
                        </Row>
                      );
                    }
                    case 5: {
                      return (
                        <Row style={styles.row}>
                          <Text style={styles.label}>{attributeEl.name}</Text>
                          <ButtonGroup
                            containerStyle={{borderRadius: 6, marginTop: 8}}
                            buttons={JSON.parse(attributeEl.values).map(
                              (el) => el.value,
                            )}
                            onPress={(value) => {
                              let ad = newAd;
                              ad.attributes[
                                ad.attributes.findIndex(
                                  (a) => a.attribute_id === attributeEl.id,
                                )
                              ] = {
                                attribute_id: attributeEl.id,
                                value: JSON.parse(attributeEl.values)[value]
                                  .value,
                              };
                              console.log(ad, 'ad');
                              console.log(JSON.parse(
                                attributeEl.values,
                              ).findIndex(
                                (el) =>
                                  newAd.attributes[
                                    newAd.attributes.findIndex(
                                      (el) => attributeEl.id === el.attribute_id,
                                    )
                                  ].value === el.value,
                              ))
                              setNewAd(ad);
                            }}
                            selectedIndex={JSON.parse(
                              attributeEl.values,
                            ).findIndex(
                              (el) =>
                                newAd.attributes[
                                  newAd.attributes.findIndex(
                                    (el) => attributeEl.id === el.attribute_id,
                                  )
                                ].value === el.value,
                            )}
                          />
                        </Row>
                      );
                    }
                    case 6: {
                      return (
                        <Row style={styles.row}>
                          <Text style={styles.label}>{attributeEl.name}</Text>
                          <View
                            style={{
                              flexDirection: 'column',
                              marginTop: 5,
                            }}>
                            {JSON.parse(attributeEl.values).map((el, i) => (
                              <CheckBox
                                style={{flex: 1}}
                                selected={
                                  newAd.attributes.find(
                                    (attribute) =>
                                      attributeEl.id === attribute.attribute_id,
                                  ).value[i] === el.value
                                }
                                onPress={() => {
                                  const newValue = newAd.attributes.find(
                                    (attribute) =>
                                      attributeEl.id === attribute.attribute_id,
                                  );
                                  newValue[i] = newAd.attributes.find(
                                    (attribute) =>
                                      attributeEl.id === attribute.attribute_id,
                                  ).value[i]
                                    ? null
                                    : el.value;
                                  let ad = newAd;
                                  ad.attributes[
                                    ad.attributes.findIndex(
                                      (a) => a.attribute_id === attributeEl.id,
                                    )
                                  ] = {
                                    attribute_id: attributeEl.id,
                                    value: newValue,
                                  };
                                  setNewAd(ad);
                                }}
                                text={el.value}
                              />
                            ))}
                          </View>
                        </Row>
                      );
                    }
                    case 7: {
                      return (
                        <Row style={styles.row}>
                          <Text style={styles.label}>{attributeEl.name}</Text>
                          <View style={styles.textInputContainer}>
                            <TextInput
                              style={styles.textInput}
                              value={
                                newAd.attributes[
                                  newAd.attributes.findIndex(
                                    (el) => attributeEl.id === el.attribute_id,
                                  )
                                ].value[0]
                              }
                              onChangeText={(value) => {
                                let ad = newAd;
                                ad.attributes[
                                  ad.attributes.findIndex(
                                    (a) => a.attribute_id === attributeEl.id,
                                  )
                                ] = {
                                  attribute_id: attributeEl.id,
                                  value: [
                                    value,
                                    newAd.attributes[
                                      newAd.attributes.findIndex(
                                        (el) =>
                                          attributeEl.id === el.attribute_id,
                                      )
                                    ].value[1],
                                  ],
                                };
                                setNewAd(ad);
                              }}
                              placeholder={attributeEl.name}
                              textAlign="left"
                            />
                            <TextInput
                              style={styles.textInput}
                              value={
                                newAd.attributes[
                                  newAd.attributes.findIndex(
                                    (el) => attributeEl.id === el.attribute_id,
                                  )
                                ].value[1]
                              }
                              onChangeText={(value) => {
                                let ad = newAd;
                                ad.attributes[
                                  ad.attributes.findIndex(
                                    (a) => a.attribute_id === attributeEl.id,
                                  )
                                ] = {
                                  attribute_id: attributeEl.id,
                                  value: [
                                    newAd.attributes[
                                      newAd.attributes.findIndex(
                                        (el) =>
                                          attributeEl.id === el.attribute_id,
                                      )
                                    ].value[0],
                                    value,
                                  ],
                                };
                                setNewAd(ad);
                              }}
                              placeholder={attributeEl.name}
                              textAlign="left"
                            />
                          </View>
                        </Row>
                      );
                    }
                  }
                })}

                {/* <Row style={styles.row}>
                  <PickerSelect
                    item={state.city}
                    data={Object.values(Cities).map((option) => ({
                      label: option,
                      value: option,
                    }))}
                    label="Город"
                    onValueChanged={(value) => {
                      dispatch({
                        type: ActionType.SELECT_CITY,
                        payload: value,
                      });
                    }}
                    placeholder="Выберите город"
                  />
                </Row>
                <View></View>

               

                <Row style={styles.row}>
                  <Text style={styles.label}>Площадь комнат</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={livingArea}
                      onChangeText={(value) => setLivingArea(value)}
                      placeholder="Пример: 18+14-9"
                      // placeholderTextColor="#373A3F"
                      textAlign="left"
                      onSubmitEditing={() => {
                        const area = evaluate(livingArea).toString();
                        dispatch({
                          type: ActionType.SET_AREA_OF_ROOMS,
                          payload: area,
                        });
                      }}
                    />
                    <SquareMeterIcon />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      marginTop: 8,
                    }}>
                    <View
                      style={{
                        width: 21,
                        height: 21,
                        borderRadius: 21 / 2,
                        borderWidth: 1,
                        borderColor: '#DFE3EA',
                        alignItems: 'center',
                        justifyContent: 'center',

                        // padding: 6,
                      }}>
                      <InfoIcon hitSlop={5} />
                    </View>
                    <Text
                      style={{
                        color: '#717377',
                        fontSize: 12,
                        paddingLeft: 9,
                      }}>
                      + для обозначения смежных комнат - для раздельных комнат
                    </Text>
                  </View>
                </Row>

                <Row style={styles.row}>
                  <Text style={styles.label}>Жилая площадь</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={state.livingArea}
                      onChangeText={(value) =>
                        dispatch({
                          type: ActionType.SET_LIVING_AREA,
                          payload: value,
                        })
                      }
                      placeholder="145"
                      // placeholderTextColor="#373A3F"
                      textAlign="left"
                    />
                    <SquareMeterIcon />
                  </View>
                </Row>

                <Row style={styles.row}>
                  <Text style={styles.label}>Лоджия</Text>
                  <ButtonGroup
                    containerStyle={{borderRadius: 6, marginTop: 8}}
                    buttons={[...loggia]}
                    onPress={selectLogiaHandler}
                    selectedIndex={selectedLogiaIndex}
                  />
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>Уровней в квартире</Text>
                  <ButtonGroup
                    containerStyle={{borderRadius: 6, marginTop: 8}}
                    buttons={[...levels]}
                    onPress={selectLevelsHandler}
                    selectedIndex={selectedLevelsIndex}
                  />
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>Балкон</Text>
                  <ButtonGroup
                    containerStyle={{borderRadius: 6, marginTop: 8}}
                    buttons={[...terrace]}
                    onPress={selectTerraceHandler}
                    selectedIndex={selectedTerraceIndex}
                  />
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>Окна выходят</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 5,
                    }}>
                    <CheckBox
                      style={{flex: 1}}
                      selected={state.windowsFace === 'Во двор'}
                      onPress={() => {
                        dispatch({
                          type: ActionType.SELECT_WINDOWS_FACE,
                          payload: 'Во двор',
                        });
                      }}
                      text="Во двор"
                    />
                    <CheckBox
                      style={{flex: 1}}
                      selected={state.windowsFace === 'На улицу'}
                      onPress={() => {
                        dispatch({
                          type: ActionType.SELECT_WINDOWS_FACE,
                          payload: 'На улицу',
                        });
                      }}
                      text="На улицу"
                    />
                  </View>
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>Раздельные санузлы</Text>
                  <ButtonGroup
                    containerStyle={{borderRadius: 6, marginTop: 8}}
                    buttons={[...bathrooms]}
                    onPress={selectSepBathroomsHandler}
                    selectedIndex={sepBathroomsIndex}
                  />
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>Совмещенные санузлы</Text>
                  <ButtonGroup
                    containerStyle={{borderRadius: 6, marginTop: 8}}
                    buttons={[...bathrooms]}
                    onPress={selectJoinedBathroomsHandler}
                    selectedIndex={joinedBathroomsIndex}
                  />
                </Row>
                <Row style={styles.row}>
                  <PickerSelect
                    item={state.repair}
                    data={[...repair].map((option) => ({
                      label: option,
                      value: option,
                    }))}
                    label="Ремонт"
                    onValueChanged={(value) => {
                      dispatch({
                        type: ActionType.SELECT_REPAIR,
                        payload: value,
                      });
                    }}
                    placeholder="Выберите ремонт..."
                  />
                </Row>
                <Row style={styles.row}>
                  <PickerSelect
                    item={state.parking}
                    data={[...parking].map((option) => ({
                      label: option,
                      value: option,
                    }))}
                    label="Парковка"
                    onValueChanged={(value) => {
                      dispatch({
                        type: ActionType.SELECT_PARKING,
                        payload: value,
                      });
                    }}
                    placeholder="Выберите парковку..."
                  />
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.title}>Фотографии</Text>
                  <View style={{flexDirection: 'row', marginBottom: 14}}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => {
                        launchImageLibrary(
                          {
                            mediaType: 'photo',
                            includeBase64: false,
                            maxHeight: 200,
                            maxWidth: 200,
                            quality: 1,
                          },
                          (response) => {
                            console.log('response', response);
                            if (response.didCancel) return;
                            dispatch({
                              type: ActionType.SELECT_PHOTO,
                              payload: response.uri,
                            });
                          },
                        );
                      }}
                      style={{
                        width: 105,
                        height: 80,
                        backgroundColor: '#F1F4F9',
                        borderWidth: 1,
                        borderColor: '#E0E5EE',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <PhotoIcon />
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 7,
                          right: 7,
                        }}>
                        <Circle
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          size={17}
                          color={Colors.primaryColor}>
                          <FlatPlusIcon />
                        </Circle>
                      </View>
                    </TouchableOpacity>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      alwaysBounceHorizontal={false}
                      bounces={false}
                      keyExtractor={(item, index) => index.toString()}
                      horizontal
                      renderItem={_renderPhoto}
                      data={state.photos}
                    />
                  </View>
                  <Text
                    style={{
                      color: '#707377',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                    }}>
                    Не допускаются к размещению фотографии с водяными знаками,
                    чужих объектов и рекламные баннеры. JPG, PNG или GIF.
                    Максимальный размер файла 10 мб
                  </Text>
                </Row>

                <Row style={styles.row}>
                  <Text style={styles.title}>Об объекте</Text>
                </Row>
                <Row style={styles.row}>
                  <PickerSelect
                    item={state.numberOfRooms}
                    data={rooms.map((option) => ({
                      label: option,
                      value: option,
                    }))}
                    label="Количество комнат"
                    onValueChanged={(value) => {
                      dispatch({
                        type: ActionType.SELECT_NUMBER_OF_ROOMS,
                        payload: value,
                      });
                    }}
                    placeholder="Выберите количество комнат..."
                  />
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>Общая площадь</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={state.totalArea}
                      onChangeText={(value) =>
                        dispatch({
                          type: ActionType.SET_TOTAL_AREA,
                          payload: value,
                        })
                      }
                      placeholder="78"
                      // placeholderTextColor="#373A3F"
                      textAlign="left"
                    />
                    <SquareMeterIcon />
                  </View>
                </Row>

                <Row style={styles.row}>
                  <View style={styles.container}>
                    <View
                      style={{
                        width: '30%',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={[styles.label, {flex: 1}]}>Этаж</Text>
                      <View style={[styles.textInputContainer]}>
                        <TextInput
                          style={styles.textInput}
                          value={state.floor}
                          onChangeText={(value) =>
                            dispatch({
                              type: ActionType.SET_FLOOR,
                              payload: value,
                            })
                          }
                          placeholder="5"
                          // placeholderTextColor="#373A3F"
                          textAlign="left"
                        />
                      </View>
                    </View>

                    <View style={{width: '70%', paddingLeft: 40}}>
                      <Text style={[styles.label, {flex: 1}]}>
                        Всего этажей в доме
                      </Text>
                      <View style={[styles.textInputContainer]}>
                        <TextInput
                          style={styles.textInput}
                          value={state.numberOfFloorsAtBuilding}
                          onChangeText={(value) =>
                            dispatch({
                              type: ActionType.SET_NUMBER_OF_FLOORS_AT_BUILDING,
                              payload: value,
                            })
                          }
                          placeholder="24"
                          // placeholderTextColor="#373A3F"
                          textAlign="left"
                        />
                      </View>
                    </View>
                  </View>
                </Row>

                <Row style={styles.row}>
                  <Text style={styles.title}>Описание</Text>
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>
                    Заголовок объявления (до 70 символов)
                  </Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={state.title}
                      onChangeText={(value) =>
                        dispatch({
                          type: ActionType.SET_TITLE,
                          payload: value,
                        })
                      }
                      placeholder="Таунхаус"
                      // placeholderTextColor="#373A3F"
                      textAlign="left"
                    />
                  </View>
                </Row>
                <Row style={styles.row}>
                  <Text style={styles.label}>
                    Описание объекта (до 3500 символов)
                  </Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={state.description}
                      onChangeText={(value) =>
                        dispatch({
                          type: ActionType.SET_DESCRIPTION,
                          payload: value,
                        })
                      }
                      placeholder="Нажмите для ввода"
                      // placeholderTextColor="#373A3F"
                      textAlign="left"
                    />
                  </View>
                </Row>

                <Row style={styles.row}>
                  <Text style={styles.title}>Цена и условия сделки</Text>
                  <View style={[styles.textInputContainer, {marginBottom: 10}]}>
                    <TextInput
                      style={styles.textInput}
                      value={state.price}
                      onChangeText={(value) => {
                        dispatch({
                          type: ActionType.SET_PRICE,
                          payload: +value,
                        });
                      }}
                      placeholder="100 000"
                      // placeholderTextColor="#373A3F"
                      textAlign="left"
                    />
                    <Text
                      style={{
                        color: '#9198A4',
                        fontSize: 16,
                      }}>
                      руб.
                    </Text>
                  </View>
                  <Text style={{fontSize: 13, color: '#8B8B8B'}}>
                    Отображаемая цена в каталоге: 11 000 000 ₽
                  </Text>
                </Row>

                <Row style={styles.row}>
                  <CheckBox
                    style={{flex: 1, marginBottom: 8}}
                    selected={state.consideringExchange}
                    onPress={() => {
                      dispatch({
                        type: ActionType.SET_CONSIDERING_EXCHANGE,
                        payload: !state.consideringExchange,
                      });
                    }}
                    textStyle={{fontSize: 13}}
                    text="Рассматриваю обмен"
                  />
                  <CheckBox
                    style={{flex: 1, marginBottom: 8}}
                    selected={state.participatingInAuction}
                    onPress={() => {
                      dispatch({
                        type: ActionType.SET_PARTICIPATING_IN_AUCHION,
                        payload: !state.participatingInAuction,
                      });
                    }}
                    textStyle={{fontSize: 13}}
                    text="Участвовать в аукционе"
                  />
                  <CheckBox
                    style={{flex: 1}}
                    selected={state.bargaining}
                    onPress={() => {
                      dispatch({
                        type: ActionType.SET_BARGAINING,
                        payload: !state.bargaining,
                      });
                    }}
                    textStyle={{fontSize: 13}}
                    text="Торг"
                  />
                </Row>

                <Row style={styles.row}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}>
                    <View
                      style={{
                        width: 21,
                        height: 21,
                        borderRadius: 21 / 2,
                        borderWidth: 1,
                        borderColor: '#DFE3EA',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <InfoIcon hitSlop={5} />
                    </View>
                    <Text
                      style={{
                        color: '#717377',
                        fontSize: 14,
                        paddingLeft: 9,
                      }}>
                      Вознаграждение агенту
                    </Text>
                  </View>
                </Row>
                <Row style={styles.row}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#191A1C',
                      marginBottom: 12,
                    }}>
                    Вы можете указать бонус, который хотите получить в случае
                    успешной сделки.
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#67696B',
                    }}>
                    Имейте ввиду чем ниже вы указываете процент, тем выше объект
                    в каталоге.
                  </Text>
                </Row>
                <View style={[styles.row, styles.sliderContainer]}>
                  <Slider
                    step={1}
                    style={{width: '100%'}}
                    value={sliderValues.interest}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor={Colors.primaryColor}
                    maximumTrackTintColor="#F0F3F9"
                    onValueChange={(value) =>
                      setSliderValues({
                        ...sliderValues,
                        interest: value,
                      })
                    }
                  />
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: '#6A6D74', fontSize: 12}}>
                      {sliderValues.minInterest} %
                    </Text>
                    <Text style={{fontSize: 15, color: '#373A3F'}}>
                      {sliderValues.interest + '%'}
                    </Text>
                    <Text style={{color: '#6A6D74', fontSize: 12}}>
                      {sliderValues.maxInterest} %
                    </Text>
                  </View>
                </View>
                <Row style={styles.row}>
                  <Text style={{marginBottom: 6}}>
                    В случае успешной сделки Вы заработаете:{' '}
                  </Text>
                  <Text
                    style={{
                      color: Colors.primaryColor,
                      fontSize: 19,
                      fontWeight: '700',
                    }}>
                    {_renderProfit()} ₽
                  </Text>
                </Row>

                <Row style={styles.row}>
                  <Text style={styles.label}>Телефон</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textInput}
                      value={state.phone}
                      onChangeText={(value) =>
                        dispatch({
                          type: ActionType.SET_PHONE,
                          payload: value,
                        })
                      }
                      placeholder="+7 ( ___ ) ___ - __ - __"
                      // placeholderTextColor="#373A3F"
                      textAlign="left"
                    />
                  </View>
                </Row> */}
                <Row style={styles.row}>
                  <Button
                    buttonStyle={{
                      borderRadius: 6,
                      alignSelf: 'center',
                      marginBottom: 12,
                    }}
                    titleStyle={{fontWeight: '700', fontSize: 13}}
                    title="Опубликовать объявление"
                    // onPress={() => {
                    //   toggleModal();
                    // }}
                    onPress={() => {
                      AddAdvert(newAd);
                      dispatch({
                        type: ActionType.RESET_FORM,
                      });
                      navigation.navigate(Routes.FEED);
                    }}
                  />
                  <Text
                    style={{
                      color: '#707378',
                      fontSize: 12,
                      alignSelf: 'center',
                    }}>
                    Объявление будет опубликовано после модерации
                  </Text>
                </Row>
              </>
            ) : null}
          </>
        )}
      </ScrollView>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  $placeholderColor: '#373A3F',
  $titleColor: '#373A3F',
  sliderContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '$titleColor',
    fontSize: rems[19],
  },
  screen: {
    padding: rems[20],
  },
  row: {
    marginBottom: rems[20],
  },
  label: {
    color: Colors.labelColor,
    fontSize: rems[13],
  },
  textInput: {
    height: 'auto',
    // width: '100%',
    fontSize: rems[16],
    paddingVertical: 10,
  },
  mapImage: {
    width: '100%',
    height: 230,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: 'green',
  },
  textInputLabel: {
    color: Colors.labelColor,
    fontSize: rems[16],
  },
  textInputContainer: {
    borderColor: Colors.inputFieldBorderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // marginHorizontal: rems[20],
  },
});
