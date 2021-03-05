import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import {
  MetroIcon,
  PointIcon,
  LadderIcon,
  SquareIcon,
  HouseIcon,
  PhoneIcon,
  CheckedIcon,
  CameraIcon,
  HeartIcon,
  ThreeDotsIcon,
} from '../components/svg/icons';
import {Button} from './Button';
import {convertRubToUsd} from '../utility';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {rems} from '../config';

interface AdvertCardProps {
  id: string;
}

export const ProfileAdvertCard: React.FC<AdvertCardProps> = ({id}) => {
  const navigation = useNavigation();
  const {LikeAdvert, UnlikeAdvert} = useActions();
  const advert = useTypedSelector((state) => state.advertisements.data[id]);
  const isFavorite = useTypedSelector(
    (state) => state.advertisements.data[advert.id].isFavorite,
  );

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <View>
          <ImageBackground source={advert.photos[0]} style={styles.image}>
            <LinearGradient
              style={{flex: 1}}
              colors={['rgba(26, 28, 31, 0.21)', 'rgba(26, 28, 31, 0.83)']}>
              <View
                style={{
                  position: 'absolute',
                  left: 12,
                  top: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CameraIcon />
                <Text style={{color: 'white', marginLeft: 10}}>
                  {advert.photos.length} фото
                </Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  right: 12,
                  top: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{marginRight: 2}}>
                    <Icon name="ios-eye-outline" color="white" size={18} />
                  </View>
                  <Text
                    style={{color: 'white', fontSize: 11, fontWeight: '700'}}>
                    1 456
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 20,
                  }}>
                  <View style={{marginRight: 2}}>
                    <HeartIcon />
                  </View>
                  <Text
                    style={{color: 'white', fontSize: 11, fontWeight: '700'}}>
                    87
                  </Text>
                </View>

                <View
                  style={{
                    marginLeft: 20,
                  }}>
                  <Menu>
                    <MenuTrigger>
                      <ThreeDotsIcon />
                    </MenuTrigger>
                    <MenuOptions>
                      <MenuOption onSelect={() => {}}>
                        <Text style={styles.menuOptionText}>
                          Удалить объявление
                        </Text>
                      </MenuOption>
                      <View style={styles.divider} />
                      <MenuOption onSelect={() => {}}>
                        <Text style={styles.menuOptionText}>Редактировать</Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                </View>
              </View>

              <View
                style={{
                  position: 'absolute',
                  right: 12,
                  bottom: 12,
                }}>
                <CheckedIcon />
              </View>

              <View style={{position: 'absolute', bottom: 12, left: 12}}>
                <Text style={{fontSize: 16, color: 'white'}}>
                  {advert.name}
                </Text>
                <Text style={{fontSize: 13, color: 'white', marginTop: 3}}>
                  {advert.developer || 'ЖК ДомИнвест'}
                </Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.priceBlock}>
          <Text
            style={{
              fontSize: 21,
            }}>
            {advert.price} &#8381;
          </Text>
          <Text
            style={{
              color: '#9A9C9F',
              fontSize: 16,
            }}>
            / &#36;{convertRubToUsd(advert.price).toFixed(2)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 6,
          }}>
          <Text style={{color: '#4C4C4D', fontSize: 13, fontWeight: '400'}}>
            Ваша ставка:{' '}
          </Text>
          <Text style={{color: '#4C4C4D', fontSize: 13, fontWeight: '700'}}>
            5% / 146 875 ₽
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 8,
            }}>
            <MetroIcon />
            <Text style={{marginLeft: 8}}>{advert.subwayStation}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <PointIcon />
            <Text style={{marginLeft: 8}}>
              {advert.publicTransportTripDuration} мин. на транспорте
            </Text>
          </View>
        </View>

        <View style={{marginVertical: 6}}>
          <Text>{advert.address}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
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
              {advert.numberOfRooms} комн-кв.
            </Text>
          </View>

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
                {advert.totalArea}
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
              {advert.floor}/{advert.numberOfFloorsAtBuilding} этаж
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.cardButtonGroup}>
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
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  priceBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  cardContainer: {
    // marginTop: 24,
  },
  cardImage: {
    height: 181,
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
    overflow: 'hidden',
    borderRadius: 6,
  },
  cardContent: {},
  cardButtonGroup: {
    flexDirection: 'row',
    marginTop: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
  },
  menuOptionText: {
    color: '#353A40',
    paddingVertical: rems[8],
    paddingLeft: rems[14],
    fontSize: rems[11],
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
