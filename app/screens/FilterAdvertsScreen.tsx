import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Text, View, TextInput, ScrollView} from 'react-native';
import {Screen} from '../components/Screen';
import {PickerSelect, Row, Button, ButtonGroup, CheckBox} from '../components';
import {useActions, useTypedSelector} from '../hooks';
import {SearchAdvertsParamList} from '../navigation/SearchAdvertsStack';
import {Routes} from '../navigation/routes';
import {Colors, rems} from '../config';
import {getCities} from '../data/helpers';
import {useSelector} from 'react-redux';
import {SetFilters} from '../state/action-creators/filterActionCreators';
import {SetRecommendations} from '../state/action-creators';

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
  const {fetchAttributes, fetchAdverts, resetFilters} = useActions();
  const state = useTypedSelector((state) => state.filter);
  const filters = useTypedSelector((state) => state.advertisements.filters);
  const filteredAdverts = useTypedSelector(
    (state) => state.advertisements.filteredData,
  );

  const [apartmentType, setApartmentType] = useState(null);
  const [apartmentSorts, setApartmentSorts] = useState(null);
  const [stations, setStations] = useState(1);

  const categories = useSelector((state) => state.advertisements.categories);
  const attributes = useSelector((state) => state.advertisements.attributes);
  const loading = useSelector((state) => state.advertisements.loading);
  const metros = useSelector((state) => state.metro.data);

  const typesOfApartment = [...categories];

  let sortsOfApartment = [];

  useEffect(() => {
    fetchAdverts({category_id: null, attributes: []}, true);
    if (apartmentType) {
      sortsOfApartment = [
        ...categories.find((el) => el.id === apartmentType).children,
      ];
      setApartmentSorts(sortsOfApartment);
    }
  }, [apartmentType]);

  // useEffect(() => {
  //   if (!filters?.category_id) {
  //     fetchAdverts({category_id: null, attributes: []}, true);
  //   }
  // }, [filters?.category_id]);

  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        alwaysBounceVertical={false}>
        <Row style={styles.row}>
          <PickerSelect
            item={apartmentType}
            data={typesOfApartment.map((option) => ({
              label: option.name,
              value: option.id,
            }))}
            label="Вид недвижимости"
            onValueChanged={(value) => {
              setApartmentType(value);
            }}
            placeholder="Выберите вид недвижимости"
          />
        </Row>
        {apartmentType && apartmentSorts && (
          <>
            <Row style={styles.row}>
              <PickerSelect
                item={filters.category_id}
                data={apartmentSorts.map((option) => ({
                  label: option.name,
                  value: option.id,
                }))}
                label="Тип недвижимости"
                onValueChanged={(value) => {
                  fetchAttributes(value);
                  fetchAdverts({...filters, category_id: value}, true);
                }}
                placeholder="Выберите тип недвижимости"
              />
            </Row>
            {attributes && attributes.length !== 0 && !loading ? (
              <>
                <Row style={styles.row}>
                  <Text style={styles.label}>Цена</Text>
                  <View style={styles.container}>
                    <View style={styles.price}>
                      <Text style={styles.textInputLabel}>От</Text>
                      <View style={styles.textInputContainer}>
                        <TextInput
                          style={styles.textInput}
                          value={filters.price_from?.toString()}
                          onChangeText={(value) =>
                            fetchAdverts({...filters, price_from: +value}, true)
                          }
                          placeholder="1 000 000"
                          placeholderTextColor={
                            Colors.textInputPlaceholderColor
                          }
                          textAlign="center"
                        />
                      </View>
                    </View>
                    <View style={styles.price}>
                      <Text style={styles.textInputLabel}>До</Text>
                      <View style={styles.textInputContainer}>
                        <TextInput
                          style={styles.textInput}
                          value={filters.price_to?.toString()}
                          onChangeText={(value) =>
                            fetchAdverts({...filters, price_to: +value}, true)
                          }
                          placeholder="10 000 000"
                          placeholderTextColor={
                            Colors.textInputPlaceholderColor
                          }
                          textAlign="center"
                        />
                      </View>
                    </View>
                  </View>
                </Row>
                <Row style={styles.row}>
                  <PickerSelect
                    item={filters.city}
                    data={getCities().map((option) => ({
                      label: option,
                      value: option,
                    }))}
                    label="Город"
                    onValueChanged={(value) =>
                      fetchAdverts({...filters, city: value}, true)
                    }
                    placeholder="Выберите город..."
                  />
                </Row>
                <Row style={styles.row}>
                  <PickerSelect
                    item={filters?.subwayStation}
                    data={metros.map((option) => ({
                      label: option.name,
                      value: option.id,
                    }))}
                    label="Метро"
                    onValueChanged={(value) => {
                      fetchAdverts({...filters, metro_ids: [value]}, true);
                    }}
                    placeholder="Выберите метро"
                  />
                </Row>

                {attributes.map((attributeEl) => {
                  if (attributeEl.filter) {
                    switch (attributeEl.type) {
                      case 0: {
                        return (
                          <Row style={styles.row}>
                            <PickerSelect
                              item={
                                filters.attributes[
                                  filters.attributes.findIndex(
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
                                let ad = filters;
                                ad.attributes[
                                  ad.attributes.findIndex(
                                    (a) => a.attribute_id === attributeEl.id,
                                  )
                                ] = {
                                  attribute_id: attributeEl.id,
                                  value: value,
                                };
                                fetchAdverts(ad, true);
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
                                  filters.attributes[
                                    filters.attributes.findIndex(
                                      (el) =>
                                        attributeEl.id === el.attribute_id,
                                    )
                                  ]
                                }
                                onChangeText={(value) => {
                                  let ad = filters;
                                  if (
                                    ad.attributes.findIndex(
                                      (a) => a.attribute_id === attributeEl.id,
                                    )
                                  ) {
                                    ad.attributes[
                                      ad.attributes.findIndex(
                                        (a) =>
                                          a.attribute_id === attributeEl.id,
                                      )
                                    ] = {
                                      attribute_id: attributeEl.id,
                                      value: value,
                                    };
                                  } else {
                                    ad.attributes.push({
                                      attribute_id: attributeEl.id,
                                      value: value,
                                    });
                                  }
                                  fetchAdverts(ad, true);
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
                                  filters.attributes[
                                    filters.attributes.findIndex(
                                      (el) =>
                                        attributeEl.id === el.attribute_id,
                                    )
                                  ]
                                }
                                onChangeText={(value) => {
                                  let ad = filters;
                                  ad.attributes[
                                    ad.attributes.findIndex(
                                      (a) => a.attribute_id === attributeEl.id,
                                    )
                                  ] = {
                                    attribute_id: attributeEl.id,
                                    value: value,
                                  };
                                  fetchAdverts(ad, true);
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
                                  filters.attributes[
                                    filters.attributes.findIndex(
                                      (el) =>
                                        attributeEl.id === el.attribute_id,
                                    )
                                  ]
                                }
                                onChangeText={(value) => {
                                  let ad = filters;
                                  ad.attributes[
                                    ad.attributes.findIndex(
                                      (a) => a.attribute_id === attributeEl.id,
                                    )
                                  ] = {
                                    attribute_id: attributeEl.id,
                                    value: value,
                                  };
                                  fetchAdverts(ad, true);
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
                                style={[styles.textInput, {width: '95%'}]}
                                value={
                                  filters.attributes.find(
                                    (el) => attributeEl.id === el.attribute_id,
                                  )?.value
                                }
                                onChangeText={(value) => {
                                  let ad = filters;
                                  ad.attributes[
                                    ad.attributes.findIndex(
                                      (a) => a.attribute_id === attributeEl.id,
                                    )
                                  ] = {
                                    attribute_id: attributeEl.id,
                                    value: value,
                                  };
                                  fetchAdverts(ad, true);
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
                                (el) => el?.value,
                              )}
                              onPress={(value) => {
                                let ad = filters;
                                ad.attributes[
                                  ad.attributes.findIndex(
                                    (a) => a.attribute_id === attributeEl.id,
                                  )
                                ] = {
                                  attribute_id: attributeEl.id,
                                  value: JSON.parse(attributeEl?.values)[value]
                                    ?.value,
                                };
                                if (
                                  ad.attributes.findIndex(
                                    (a) => a.attribute_id === attributeEl.id,
                                  )
                                ) {
                                  ad.attributes[
                                    ad.attributes.findIndex(
                                      (a) => a.attribute_id === attributeEl.id,
                                    )
                                  ] = {
                                    attribute_id: attributeEl.id,
                                    value: JSON.parse(attributeEl?.values)[
                                      value
                                    ]?.value,
                                  };
                                } else {
                                  ad.attributes.push({
                                    attribute_id: attributeEl.id,
                                    value: JSON.parse(attributeEl?.values)[
                                      value
                                    ]?.value,
                                  });
                                }
                                fetchAdverts(ad, true);
                              }}
                              selectedIndex={JSON.parse(
                                attributeEl.values,
                              ).findIndex(
                                (el) =>
                                  filters.attributes[
                                    filters.attributes.findIndex(
                                      (el) =>
                                        attributeEl.id === el.attribute_id,
                                    )
                                  ]?.value === el?.value,
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
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 5,
                              }}>
                              {JSON.parse(attributeEl.values).map((el, i) => (
                                <CheckBox
                                  style={{flex: 1}}
                                  selected={
                                    filters.attributes.find(
                                      (attribute) =>
                                        attributeEl.id ===
                                        attribute.attribute_id,
                                    )?.value[i] === el.value
                                  }
                                  onPress={() => {
                                    const newValue = attributes[i];
                                    console.log(newValue);
                                    newValue[i] = filters.attributes.find(
                                      (attribute) =>
                                        attributeEl.id ===
                                        attribute.attribute_id,
                                    )?.value[i]
                                      ? null
                                      : el.value;
                                    let ad = filters;
                                    ad.attributes[
                                      ad.attributes.findIndex(
                                        (a) =>
                                          a.attribute_id === attributeEl.id,
                                      )
                                    ] = {
                                      attribute_id: attributeEl.id,
                                      value: newValue,
                                    };
                                    fetchAdverts(ad, true);
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
                                  filters.attributes[
                                    filters.attributes.findIndex(
                                      (el) =>
                                        attributeEl.id === el.attribute_id,
                                    )
                                  ].value[0]
                                }
                                onChangeText={(value) => {
                                  let ad = filters;
                                  ad.attributes[
                                    ad.attributes.findIndex(
                                      (a) => a.attribute_id === attributeEl.id,
                                    )
                                  ] = {
                                    attribute_id: attributeEl.id,
                                    value: [
                                      value,
                                      filters.attributes[
                                        filters.attributes.findIndex(
                                          (el) =>
                                            attributeEl.id === el.attribute_id,
                                        )
                                      ].value[1],
                                    ],
                                  };
                                  fetchAdverts(ad, true);
                                }}
                                placeholder={attributeEl.name}
                                textAlign="left"
                              />
                              <TextInput
                                style={styles.textInput}
                                value={
                                  filters.attributes[
                                    filters.attributes.findIndex(
                                      (el) =>
                                        attributeEl.id === el.attribute_id,
                                    )
                                  ].value[1]
                                }
                                onChangeText={(value) => {
                                  let ad = filters;
                                  ad.attributes[
                                    ad.attributes.findIndex(
                                      (a) => a.attribute_id === attributeEl.id,
                                    )
                                  ] = {
                                    attribute_id: attributeEl.id,
                                    value: [
                                      filters.attributes[
                                        filters.attributes.findIndex(
                                          (el) =>
                                            attributeEl.id === el.attribute_id,
                                        )
                                      ].value[0],
                                      value,
                                    ],
                                  };
                                  fetchAdverts(ad, true);
                                }}
                                placeholder={attributeEl.name}
                                textAlign="left"
                              />
                            </View>
                          </Row>
                        );
                      }
                    }
                  }
                })}
              </>
            ) : null}
          </>
        )}
      </ScrollView>

      <Row>
        <Button
          color="dark"
          buttonStyle={styles.btnStyle}
          onPress={() => {
            SetRecommendations(filters, true);
            navigation.navigate({
              name: Routes.SEARCH_ADVERTS_LIST_MODE,
              params: {isFilter: true},
              key: Routes.SEARCH,
            });
          }}
          title="Применить фильтры"
        />
      </Row>
      <Row>
        <Button
          buttonStyle={[styles.btnStyle, {backgroundColor: '#EFF2F5'}]}
          onPress={() => {
            resetFilters();
          }}
          title="Сбросить фильтры"
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
    flexDirection: 'row',
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
