import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
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
} from '../components/svg/icons';
import {Button} from '../components/Button';
import {Apartment} from '../data/types';
import {convertRubToUsd} from '../utility';
import {withTouchable} from '../HOC';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {Colors} from '../config';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../navigation/routes';

interface AdvertCardProps {
  id: string;
}

const TouchableHeartIcon = withTouchable(HeartIcon);

export const AdvertCard: React.FC<AdvertCardProps> = ({id}) => {
  const navigation = useNavigation();
  const {LikeAdvert, UnlikeAdvert} = useActions();
  const advert = useTypedSelector((state) => state.advertisements.data[id]);
  console.log('advert', advert);
  const isFavorite = useTypedSelector(
    (state) => state.advertisements.data[advert.id].isFavorite,
  );

  const imageSource = () => {
    if (typeof advert.photos[0] === 'number') {
      return advert.photos[0];
    }
    return {uri: advert.photos[0]};
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate(Routes.ADVERT, {advertId: advert.id})
          }>
          <ImageBackground source={imageSource()} style={styles.image}>
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
                }}>
                <TouchableHeartIcon
                  // color={currentAdvert.isFavorite ? Colors.white : Colors.green}
                  color={isFavorite ? Colors.primaryColor : Colors.white}
                  onPress={() =>
                    isFavorite ? UnlikeAdvert(id) : LikeAdvert(id)
                  }
                />
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
                  {advert.title}
                </Text>
                <Text style={{fontSize: 13, color: 'white', marginTop: 3}}>
                  {advert.developer || 'ЖК ДомИнвест'}
                </Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
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
          }}>
          {!!advert.subwayStation && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 8,
              }}>
              <MetroIcon />
              <Text style={{marginLeft: 8}}>{advert.subwayStation}</Text>
            </View>
          )}
          {!!advert.publicTransportTripDuration && (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <PointIcon />
              <Text style={{marginLeft: 8}}>
                {advert.publicTransportTripDuration} мин. на транспорте
              </Text>
            </View>
          )}
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
                {advert.totalArea || 30}
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
              {advert.floor || 4}/{advert.numberOfFloorsAtBuilding || 15} этаж
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
    // </TouchableOpacity>
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
});
