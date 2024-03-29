import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
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
  CloseIcon,
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
import Modal from 'react-native-modal';
import call from 'react-native-phone-call';

interface AdvertCardProps {
  id: string;
}

const TouchableHeartIcon = withTouchable(HeartIcon);

export const AdvertCard: React.FC<AdvertCardProps> = ({advert}) => {
  const navigation = useNavigation();
  const {UpdateFavorite, AddApplication} = useActions();
  // console.log('advert', advert);
  const isFavorite = useTypedSelector(
    (state) =>
      state.advertisements.data.find((el) => el.id === advert.id)?.isFavorite,
  );
  const userPhone = useTypedSelector((state) => state.user.user.phone);
  const token = useTypedSelector((state) => state.auth.token);
  const metros = useTypedSelector((state) => state.metro.data);

  const imageSource = () => {
    if (advert?.images) {
      if (typeof advert?.images[0]?.imagePublic === 'number') {
        return advert?.images[0]?.imagePublic;
      }
      return {uri: `https://livz.ru/${advert?.images[0]?.imagePublic}`};
    }
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSecondModalVisible, setSecondModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleSecondModal = () => {
    setSecondModalVisible(!isSecondModalVisible);
  };

  const callArgs = {
    number: !!advert?.phone || '89103483747',
    prompt: false,
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate(Routes.SEARCH, {
              screen: Routes.ADVERT,
              params: {advertId: advert.id},
            })
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
                {/* <Text style={{color: 'white', marginLeft: 10}}>
                  {advert?.photos?.length} фото
                </Text> */}
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
                  onPress={() => UpdateFavorite(advert.id)}
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
                  {advert?.name}
                </Text>
                <Text style={{fontSize: 13, color: 'white', marginTop: 3}}>
                  {advert?.developer || 'ЖК ДомИнвест'}
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
            {advert?.price} &#8381;
          </Text>
          <Text
            style={{
              color: '#9A9C9F',
              fontSize: 16,
            }}>
            / &#36;{convertRubToUsd(advert?.price).toFixed(2)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {!!metros.find((el) => el.id == advert?.metroId)?.name && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 8,
              }}>
              <MetroIcon />
              <Text style={{marginLeft: 8}}>
                {metros.find((el) => el.id === advert?.metroId).name}
              </Text>
            </View>
          )}
          {!!advert?.publicTransportTripDuration && (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <PointIcon />
              <Text style={{marginLeft: 8}}>
                {advert?.publicTransportTripDuration} мин. на транспорте
              </Text>
            </View>
          )}
        </View>

        <View style={{marginVertical: 6}}>
          <Text>{advert?.address}</Text>
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
              {advert?.numberOfRooms} комн-кв.
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
                {advert?.area || 30}
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
              {advert?.floor || 4}/{advert?.numberOfFloorsAtBuilding || 15} этаж
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
          onPress={toggleModal}
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
          onPress={() => {
            call(callArgs).catch(console.error);
          }}
        />
      </View>

      <Modal isVisible={isModalVisible && !token}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            overflow: 'hidden',
            // padding: 20,
          }}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              toggleModal();
            }}
            style={{
              zIndex: 99,
              position: 'absolute',
              right: 12,
              top: 12,
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30,
              borderRadius: 15,
              borderColor: '#E5E5E5',
              borderWidth: 1,
            }}>
            <CloseIcon />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 19,
              lineHeight: 27,
              color: 'black',
              // alignSelf: 'center',
              paddingHorizontal: 40,
              paddingVertical: 25,
              textAlign: 'center',
            }}>
            Оставить заявку?
          </Text>

          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={(value) => setName(value)}
            placeholder="Ваше имя"
            textAlign="left"
          />
          <TextInput
            style={styles.textInput}
            value={phone}
            onChangeText={(value) => setPhone(value)}
            placeholder="Введите свой номер"
            textAlign="left"
          />

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => {}}
              onPress={() => {
                toggleModal();
                AddApplication(phone, 'needCall');
                setTimeout(() => {
                  toggleSecondModal();
                }, 500);
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 55,
                flex: 1,
                borderRadius: 50,
                backgroundColor: '#78BA54',
              }}>
              <Text style={{fontSize: 14, color: '#fff'}}>Оставить заявку</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: '#47484B',
              paddingTop: 10,
              textAlign: 'center',
            }}>
            Продолжая, вы подтверждаете согласие с нашей политикой
            конфиденциальности и правилами использования
          </Text>
        </View>
      </Modal>
      <Modal isVisible={isModalVisible && !!token}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            overflow: 'hidden',
            // padding: 20,
          }}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              toggleModal();
            }}
            style={{
              zIndex: 99,
              position: 'absolute',
              right: 12,
              top: 12,
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30,
              borderRadius: 15,
              borderColor: '#E5E5E5',
              borderWidth: 1,
            }}>
            <CloseIcon />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 19,
              lineHeight: 27,
              color: 'black',
              // alignSelf: 'center',
              paddingHorizontal: 40,
              paddingVertical: 25,
              textAlign: 'center',
            }}>
            Оставить заявку на объект?
          </Text>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => {}}
              onPress={() => {
                toggleModal();
                AddApplication(userPhone, 'needCall');
                setTimeout(() => {
                  toggleSecondModal();
                }, 500);
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 58,
                flex: 1,
                borderWidth: 1,
                borderColor: '#EFEFEF',
              }}>
              <Text style={{fontSize: 14, color: '#545454'}}>Да</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => {}}
              onPress={toggleModal}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 58,
                flex: 1,
                borderWidth: 1,
                borderColor: '#EFEFEF',
              }}>
              <Text style={{fontSize: 14, color: '#545454'}}>Нет</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal isVisible={isSecondModalVisible}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            overflow: 'hidden',
            padding: 20,
          }}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              toggleSecondModal();
            }}
            style={{
              zIndex: 99,
              position: 'absolute',
              right: 12,
              top: 12,
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30,
              borderRadius: 15,
              borderColor: '#E5E5E5',
              borderWidth: 1,
            }}>
            <CloseIcon />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 19,
              lineHeight: 27,
              color: 'black',
              // alignSelf: 'center',
              // paddingHorizontal: 40,
              // paddingVertical: 12,
              paddingBottom: 10,
              textAlign: 'center',
            }}>
            Спасибо!
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 27,
              color: '#545454',
              // alignSelf: 'center',
              // paddingHorizontal: 40,
              // paddingVertical: 12,
              textAlign: 'center',
            }}>
            Ваша заявка принята!
          </Text>
        </View>
      </Modal>
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
