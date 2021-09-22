import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Screen} from '../components/Screen';
import {PickerSelect, Row, Button, ButtonGroup} from '../components';
import {useActions, useTypedSelector} from '../hooks';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {SearchAdvertsParamList} from '../navigation/SearchAdvertsStack';
import {Routes} from '../navigation/routes';
import {Colors, rems, size} from '../config';
import {withTouchable} from '../HOC';
import {AdvertCard} from '../components/AdvertCard';
import {InputField} from '../components';
import {convertRubToUsd} from '../utility';
import {
  ShareIcon,
  CheckedIcon,
  ArrowLeftIcon,
  HeartIcon,
  MetroIcon,
  PointIcon,
  LadderIcon,
  SquareIcon,
  HouseIcon,
  PhoneIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  BedRoomIcon,
  RestRoomIcon,
  BathIcon,
  ParkingIcon,
  CheckIcon,
  WalletIcon,
  CloseIcon,
} from '../components/svg/icons';
import {Circle} from '../components/Circle';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Accordion from 'react-native-collapsible/Accordion';
import Collapsible from 'react-native-collapsible';
import {SecuritiesOfApartment} from '../data/apartments';
import {premiumAdvertsIdsSelector} from '../state/selectors';
const {width, height} = Dimensions.get('window');
import {Formik, FormikHelpers, Field} from 'formik';
import * as yup from 'yup';
import Modal from 'react-native-modal';

const validationSchema = yup.object().shape({
  name: yup.string().required('Необходимо ввести Ваше имя'),
  phone: yup.string().required('Необходимо ввести номер'),
});

interface FormValues {
  name: string;
  phone: string;
}

const initialValues: FormValues = {
  name: '',
  phone: '',
};

const TouchableHeartIcon = withTouchable(HeartIcon);

type AdvertScreenNavigationProp = StackNavigationProp<
  SearchAdvertsParamList,
  Routes.ADVERT
>;
type AdvertsScreenRouteProp = RouteProp<SearchAdvertsParamList, Routes.ADVERT>;

interface AdvertScreenProps {
  navigation: AdvertScreenNavigationProp;
  route: AdvertsScreenRouteProp;
}

interface ApartmentDescriptionItemProps {
  Icon: React.ComponentType<any>;
  property: string;
  value: number;
}
const ApartmentDescriptionItem: React.FC<ApartmentDescriptionItemProps> = ({
  Icon,
  property,
  value,
}) => (
  <View style={styles.apartmentInfo}>
    <Icon style={styles.apartmentInfoIcon} />
    <View style={styles.apartmentInfoContent}>
      <Text style={styles.apartmentInfoContentProperty}>{property}</Text>
      <Text style={styles.apartmentInfoContentValue}>{value}</Text>
    </View>
  </View>
);

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const AdvertScreen: React.FC<AdvertScreenProps> = ({
  navigation,
  route,
}) => {
  const ref = useRef(null!);
  const premiumOffersRef = useRef(null!);
  const similarAdvertsRef = useRef(null!);
  const {advertId} = route.params;
  const selectedAdvert = useTypedSelector(
    (state) => state.advertisements.advert,
  );
  const metros = useTypedSelector((state) => state.metro.data);
  const premiumAdvertIds = useTypedSelector(premiumAdvertsIdsSelector);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePremiumAdvertIndex, setActivePremiumAdvertIndex] = useState(0);
  const [activeSimilarAdvertIndex, setActiveSimilarAdvertIndex] = useState(0);
  const {UpdateFavorite, fetchSingleAdvert} = useActions();
  const isFavorite = useTypedSelector((state) =>
    state.advertisements.favorite.includes((el) => el.id === advertId),
  );
  const [isMapCollapsed, setMapCollapsed] = useState(false);
  const [isDescriptionCollapsed, seDescriptionCollapsed] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const securitiesOfApartmentKeys: (keyof typeof SecuritiesOfApartment)[] = Object.keys(
    SecuritiesOfApartment,
  ) as (keyof typeof SecuritiesOfApartment)[];

  useEffect(() => {
    fetchSingleAdvert(advertId);
  }, [advertId]);

  console.log(selectedAdvert);

  const imageSource = (photo: any) => {
    if (typeof photo === 'number') {
      return photo;
    }
    return {uri: `https://livz.ru/${photo}`};
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const _renderItem = ({item, index}: any) => {
    return (
      <>
        <ImageBackground
          style={styles.imageBackground}
          source={imageSource(item.imagePublic)}>
          <LinearGradient
            style={{flex: 1}}
            colors={['rgba(26, 28, 31, 0.21)', 'rgba(26, 28, 31, 0.53)']}>
            <ArrowLeftIcon
              style={styles.arrowLeft}
              color={Colors.white}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <View style={[styles.iconsContainer]}>
              <ShareIcon style={styles.share} onPress={() => {}} />
              <TouchableHeartIcon
                color={isFavorite ? Colors.primaryColor : Colors.white}
                // color={isFavorite ? Colors.white : Colors.primaryColor}
                onPress={() => {
                  // isFavorite ? UnlikeAdvert(advertId) : LikeAdvert(advertId);
                  UpdateFavorite(advertId);
                }}
              />
            </View>

            <CheckedIcon
              style={styles.checked}
              width={24}
              height={24}
              onPress={() => {}}
            />
          </LinearGradient>
        </ImageBackground>
      </>
    );
  };

  const renderPremiumAdvert = ({item}: any) => {
    return (
      <View style={{marginRight: 10, marginTop: 0}}>
        <AdvertCard advert={item} />
      </View>
    );
  };

  const renderSimilarAdvert = ({item}: any) => {
    return (
      <View style={{marginRight: 10}}>
        <AdvertCard advert={item} />
      </View>
    );
  };

  if (!selectedAdvert) {
    return <View></View>;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        alwaysBounceVertical={false}>
        <View
          style={{
            alignItems: 'center',
            height: height * 0.3,
          }}>
          <Carousel
            inactiveSlideOpacity={0.9}
            inactiveSlideScale={1}
            loop
            layout={'default'}
            ref={ref}
            data={selectedAdvert.images}
            sliderWidth={width}
            itemWidth={width}
            renderItem={_renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />

          <Pagination
            dotsLength={selectedAdvert.images.length}
            activeDotIndex={activeIndex}
            containerStyle={{
              position: 'absolute',
              bottom: 16,
              paddingBottom: 0,
              paddingTop: 0,
            }}
            dotContainerStyle={{
              paddingHorizontal: 0,
            }}
            dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 0,
              backgroundColor: Colors.primaryColor,
            }}
            inactiveDotStyle={{
              // Define styles for inactive dots here
              backgroundColor: Colors.white,
            }}
            inactiveDotOpacity={0.9}
            inactiveDotScale={0.9}
          />
        </View>
        <View style={styles.contentBlock}>
          <Row
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 12,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#656565',
              }}>
              {selectedAdvert.createdAt}
            </Text>

            <Circle style={{marginHorizontal: 7}} />

            <Text
              style={{
                fontSize: 12,
                color: '#656565',
              }}>
              {`ID${selectedAdvert.id}`}
            </Text>
          </Row>
          <Row>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '400',
                color: '#191A1C',
                marginBottom: 12,
              }}>
              {selectedAdvert.name}
            </Text>
          </Row>
          {/* <Row>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '400',
                color: '#191A1C',
                marginBottom: 12,
              }}>
              {selectedAdvert.developer}
            </Text>
          </Row> */}
          <Row
            style={{
              marginBottom: 12,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 21,
                fontWeight: '400',
                color: '#191A1C',
              }}>
              {selectedAdvert.price} &#8381;
            </Text>
            <Text
              style={{
                marginHorizontal: 9,
                fontSize: 16,
                fontWeight: '400',
                color: '#9A9C9F',
              }}>
              /
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#9A9C9F',
              }}>
              &#36;{convertRubToUsd(selectedAdvert.price).toFixed(2)}
            </Text>
          </Row>

          <Row
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 8,
              }}>
              <MetroIcon />
              <Text style={{marginLeft: 8}}>
                {metros.find((el) => el.id === selectedAdvert.metroId)?.name}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <PointIcon />
              <Text style={{marginLeft: 8}}>
                {selectedAdvert.minutesToMetro} мин. на транспорте
              </Text>
            </View>
          </Row>

          <Row style={{marginBottom: 12}}>
            <Text>{selectedAdvert.address}</Text>
          </Row>

          <Row
            style={{
              flexDirection: 'row',
              marginBottom: 20,
            }}>
            {!!selectedAdvert?.adatributes?.find((a) => a.attributeId === 20)
              ?.value && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <HouseIcon />
                <Text
                  style={{
                    marginLeft: 7,
                  }}>
                  {isJson(
                    selectedAdvert.adatributes.find((a) => a.attributeId === 20)
                      ?.value,
                  )
                    ? JSON.parse(
                        selectedAdvert.adatributes.find(
                          (a) => a.attributeId === 20,
                        )?.value,
                      )
                    : selectedAdvert.adatributes.find(
                        (a) => a.attributeId === 20,
                      )?.value}{' '}
                  комн-кв.
                </Text>
              </View>
            )}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 12,
              }}>
              <SquareIcon />
              <>
                <Text
                  style={{
                    marginLeft: 7,
                  }}>
                  {selectedAdvert.area}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 14}}>м</Text>
                  </View>
                  <View style={{alignItems: 'flex-start'}}>
                    <Text style={{fontSize: 10}}>2</Text>
                  </View>
                </View>
              </>
            </View>
            {!!selectedAdvert.adatributes.find((a) => a.attributeId === 20)
              ?.value ||
              (!!selectedAdvert.adatributes.find((a) => a.attributeId === 11)
                ?.value && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 12,
                  }}>
                  <LadderIcon />
                  <Text
                    style={{
                      marginLeft: 7,
                    }}>
                    {
                      selectedAdvert.adatributes.find(
                        (a) => a.attributeId === 11,
                      ).value
                    }
                    /
                    {
                      selectedAdvert.adatributes.find(
                        (a) => a.attributeId === 12,
                      ).value
                    }{' '}
                    этаж
                  </Text>
                </View>
              ))}
          </Row>

          <Row style={[styles.cardButtonGroup, styles.row]}>
            <Button
              titleStyle={{fontWeight: '700'}}
              color="smoke"
              buttonStyle={{borderRadius: 5, width: 'auto', flex: 1}}
              title="Оставить заявку"
              onPress={() => {}}
            />
            <Button
              leftIcon={<PhoneIcon />}
              buttonStyle={{
                borderRadius: 5,
                width: 'auto',
                flex: 1,
                marginLeft: 12,
              }}
              titleStyle={{fontWeight: '700'}}
              title="Позвонить"
              onPress={() => {}}
            />
          </Row>

          <Row style={[styles.row]}>
            <View style={[styles.tableRow]}>
              {selectedAdvert.adatributes.map((a) =>
                a.attribute?.name ? (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.tableRowPropertyWrapper}>
                      <Text style={styles.tableRowProperty}>
                        {a.attribute?.name}
                      </Text>
                    </View>
                    <View style={styles.tableRowValueWrapper}>
                      <Text style={styles.tableRowValue}>
                        {isJson(a?.value) ? JSON.parse(a?.value) : a?.value}
                      </Text>

                      {a.attribute?.prefix && (
                        <View style={{flexDirection: 'row'}}>
                          <View style={{alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 14}}>
                              {a.attribute?.prefix}
                            </Text>
                          </View>
                        </View>
                      )}
                    </View>
                  </View>
                ) : null,
              )}
            </View>
          </Row>

          <Row style={styles.row}>
            <View style={{marginBottom: 12}}>
              <Collapsible collapsed={isMapCollapsed}>
                <FastImage
                  style={styles.map}
                  source={require('../assets/img/map.png')}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </Collapsible>
            </View>
            <Button
              titleStyle={styles.buttonTitle}
              rightIcon={isMapCollapsed ? <ArrowDownIcon /> : <ArrowUpIcon />}
              type="clear"
              title={`${isMapCollapsed ? `Открыть` : `Скрыть`} карту`}
              onPress={() => {
                setMapCollapsed((prevState) => !prevState);
              }}
            />
          </Row>
          <Row style={styles.row}>
            <Text style={styles.title}>Подробное описание</Text>
            <Text style={styles.content}>{selectedAdvert.description}</Text>
            {/* <Collapsible collapsed={isDescriptionCollapsed}>
              <Text style={styles.content}>
                Расположен в транспортной доступности районе Новой Москвы: 23 км
                от МКАД по Киевскому шоссе или 26 км от МКАД по Боровскому
                шоссе. Участок 1052 сот. На территории, помимо основной Виллы,
                находится дом Шале, дом охраны и прислуги.1
              </Text>
            </Collapsible>
            <Button
              titleStyle={styles.buttonTitle}
              rightIcon={
                isDescriptionCollapsed ? <ArrowDownIcon /> : <ArrowUpIcon />
              }
              type="clear"
              title="Читать полностью"
              onPress={() => {
                seDescriptionCollapsed((prevState) => !prevState);
              }}
            /> */}
          </Row>

          <Row style={styles.row}>
            <Text style={styles.title}>Информация об объекте</Text>
            <View style={styles.apartmentInfoContainer}>
              <ApartmentDescriptionItem
                Icon={RestRoomIcon}
                property="Комнат:"
                value={
                  selectedAdvert.adatributes.find((a) => a.attributeId === 20)
                    ?.value
                }
              />
            </View>
          </Row>
          <View style={[styles.divider, styles.row]} />
          <Row style={styles.row}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {selectedAdvert.adatributes.map((feature) => {
                return (
                  <View
                    style={{
                      width: '50%',
                      marginBottom: 8,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                    key={feature.id}>
                    <CheckIcon style={{marginRight: 8}} />
                    <Text style={{color: '#4D4F54', fontSize: 13}}>
                      {isJson(feature.value)
                        ? JSON.parse(feature.value)
                        : feature.value}
                    </Text>
                  </View>
                );
              })}
            </View>
          </Row>
          <Row style={[styles.row]}>
            <TouchableOpacity
              style={styles.mortgageBrokerButton}
              activeOpacity={0.85}
              onPress={() => {
                toggleModal();
              }}>
              <View style={{marginRight: 16}}>
                <WalletIcon />
              </View>
              <Text
                style={[
                  styles.mortgageBrokerButtonTitle,
                  {flex: 1, flexWrap: 'wrap'},
                ]}>
                Помощь ипотечного брокера
              </Text>
            </TouchableOpacity>
          </Row>
          <Row style={styles.row}>
            <Text style={styles.title}>Премиум предложения</Text>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Carousel
                inactiveSlideOpacity={0.9}
                inactiveSlideScale={1}
                loop
                layout={'default'}
                ref={premiumOffersRef}
                data={selectedAdvert.premiumAds}
                sliderWidth={width}
                itemWidth={width - 20}
                renderItem={renderPremiumAdvert}
                onSnapToItem={(index) => setActivePremiumAdvertIndex(index)}
              />
            </View>
          </Row>
          <Row style={styles.row}>
            <Text style={styles.title}>Похожие предложения</Text>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Carousel
                inactiveSlideOpacity={0.9}
                inactiveSlideScale={1}
                loop
                layout={'default'}
                ref={similarAdvertsRef}
                data={selectedAdvert.similarAds}
                sliderWidth={width}
                itemWidth={width - 20}
                renderItem={renderSimilarAdvert}
                onSnapToItem={(index) => setActiveSimilarAdvertIndex(index)}
              />
            </View>
          </Row>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// borderWidth: 1,
// borderColor: 'pink',

const styles = EStyleSheet.create({
  $textColor: '#393B3F',
  $titleColor: '#000000',
  $descriptionColor: '#1F2022',
  $btnTitle: '#1F4277',
  divider: {
    height: rems[1],
    backgroundColor: '#EAEAEA',
    width: '100%',
  },
  mortgageBrokerButton: {
    borderRadius: 6,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  mortgageBrokerButtonTitle: {
    color: '#191A1C',
    fontWeight: '500',
    fontSize: rems[18],
  },
  title: {
    color: '$titleColor',
    fontSize: rems[19],
    marginBottom: rems[12],
  },
  apartmentInfoIcon: {
    marginRight: rems[15],
  },
  apartmentInfoContent: {},
  apartmentInfoContentProperty: {
    color: '#4D4F54',
    fontWeight: '400',
    fontSize: rems[13],
  },
  apartmentInfoContentValue: {
    color: '#000',
    fontWeight: '700',
    fontSize: rems[13],
  },
  apartmentInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  apartmentInfo: {
    flexDirection: 'row',
    width: '50%',
    marginBottom: rems[16],
    // borderWidth: 1,
    // borderColor: 'pink',
  },
  buttonTitle: {
    color: '$btnTitle',
    fontSize: rems[15],
  },
  row: {
    marginBottom: rems[20],
  },
  map: {
    width: '100%',
    height: 230,
  },
  content: {
    color: '$descriptionColor',
    fontSize: rems[13],
    lineHeight: 20,
  },
  screen: {},
  image: {
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  iconsContainer: {
    position: 'absolute',
    right: rems[16],
    top: rems[16],
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  arrowLeft: {
    position: 'absolute',
    left: rems[16],
    top: rems[16],
  },
  share: {
    marginRight: rems[18],
  },
  checked: {
    position: 'absolute',
    right: rems[16],
    bottom: rems[16],
  },
  contentBlock: {
    padding: rems[20],
  },
  cardButtonGroup: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  tableRowPropertyWrapper: {
    flex: 1,
    alignItems: 'flex-start',
  },
  tableRowProperty: {
    color: '$textColor',
    fontSize: rems[14],
    fontWeight: '700',
  },
  tableRowValueWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableRowValue: {
    color: '$textColor',
    fontSize: rems[14],
    fontWeight: '400',
  },
  form: {
    // marginVertical: 14,
    marginTop: 10,
  },
  btnContainer: {
    alignItems: 'center',
  },
  input: {
    fontSize: size.regular,
    color: '#B4B6BB',
  },
});
