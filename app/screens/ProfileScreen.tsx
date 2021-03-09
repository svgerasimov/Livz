import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {Screen} from '../components';
import EStyleSheet from 'react-native-extended-stylesheet';
import FastImage from 'react-native-fast-image';
import {rems} from '../config';
import {
  UserIcon,
  CircleIcon,
  RingIcon,
  QuestionIcon,
} from '../components/svg/icons';
import {Button, ProfileAdvertCard} from '../components';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useTypedSelector, useActions} from '../hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileParamList} from '../navigation/ProfileStack';
import {Routes} from '../navigation/routes';
import {launchImageLibrary} from 'react-native-image-picker';

const initialLayout = {width: Dimensions.get('window').width - 40};

type ScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  Routes.PROFILE
>;
type ScreenRouteProp = RouteProp<ProfileParamList, Routes.PROFILE>;

interface ProfileScreenProps {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const {logout, setAvatar} = useActions();
  const [index, setIndex] = React.useState(0);
  const adverts = useTypedSelector((state) => state.advertisements.data);
  const avatar = useTypedSelector((state) => state.user.avatar);
  const [routes] = React.useState([
    {key: 'active', title: 'Активные (4)'},
    {key: 'onModeration', title: 'На модерации (2)'},
    {key: 'blocked', title: 'Заблокированы (1)'},
  ]);

  const Route = () => {
    return (
      <View>
        {/* <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        alwaysBounceVertical={false}> */}
        {Object.keys(adverts).map((id) => (
          <View style={{marginBottom: 20}} key={id}>
            <ProfileAdvertCard id={id} />
          </View>
        ))}
      </View>
      // </ScrollView>
    );
  };

  const renderScene = SceneMap({
    active: Route,
    onModeration: Route,
    blocked: Route,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      pressOpacity={0.9}
      tabStyle={{padding: 0, width: 'auto', marginRight: 21}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={[
            styles.tabbarTitle,
            focused ? styles.activeTabbarTitle : styles.inActiveTabbarTitle,
          ]}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{backgroundColor: 'transparent'}}
      style={{
        backgroundColor: 'transparent',
        // width: ,
      }}
    />
  );

  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        alwaysBounceVertical={false}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 32,
          }}>
          <TouchableOpacity
            onPress={() => {
              launchImageLibrary(
                {
                  mediaType: 'photo',
                  includeBase64: false,
                  maxHeight: 70,
                  maxWidth: 70,
                  quality: 1,
                },
                (response) => {
                  // console.log('response', response);
                  if (response.didCancel) return;
                  setAvatar(response.uri);
                },
              );
            }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 70 / 2,
              borderWidth: 2,
              borderColor: '#D3D8E1',
              justifyContent: 'center',
              alignItems: 'center',
              // overflow: 'hidden',
            }}>
            {!!avatar ? (
              <FastImage
                key={avatar}
                style={{width: 70, height: 70, borderRadius: 70 / 2}}
                resizeMode={FastImage.resizeMode.cover}
                source={{
                  uri: avatar,
                }}
              />
            ) : (
              <UserIcon />
            )}
          </TouchableOpacity>

          <View style={{paddingLeft: 16}}>
            <Text style={{marginBottom: 2, fontSize: 20, color: '#191A1C'}}>
              Владимир
            </Text>
            <Text style={{marginBottom: 3, fontSize: 15, color: '#191A1C'}}>
              +7 (495) 787 41 21
            </Text>
            <Text
              style={{
                color: '#385992',
                textDecorationLine: 'underline',
                marginBottom: 12,
              }}>
              vladimir.velikiy@gmail.com
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Button
                titleStyle={{fontSize: 12}}
                buttonStyle={{width: 141, height: 36}}
                color="dark"
                title="Редактировать"
                onPress={() => {
                  navigation.navigate(Routes.EDIT_PROFILE);
                }}
              />
              <Button
                titleStyle={{fontSize: 12}}
                buttonStyle={{width: 100, height: 36, marginLeft: 10}}
                color="smoke"
                title="Выход"
                onPress={logout}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderRadius: 19,
            borderWidth: 1,
            borderColor: '#E7EAF0',
            marginBottom: 25,
          }}>
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => navigation.navigate(Routes.HELP)}
            style={{
              borderBottomWidth: 1,
              borderColor: '#E7EAF0',
              // height: 55,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
            }}>
            <View style={{marginRight: 13}}>
              <CircleIcon />
            </View>
            <Text style={{fontSize: 15, color: '#4F5154'}}>Помощь</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E7EAF0',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              backgroundColor: '#F4F7FB',
            }}>
            <View style={{marginRight: 13}}>
              <RingIcon />
            </View>
            <Text style={{fontSize: 15, color: '#4F5154'}}>
              Настройка уведомлений
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => navigation.navigate(Routes.ABOUT_APP)}
            style={{
              // borderBottomWidth: 1,
              // borderColor: '#E7EAF0',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
            }}>
            <View style={{marginRight: 13}}>
              <QuestionIcon />
            </View>
            <Text style={{fontSize: 15, color: '#4F5154'}}>О приложении</Text>
          </TouchableOpacity>
        </View>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </ScrollView>
    </Screen>
  );
};

const styles = EStyleSheet.create({
  screen: {
    padding: rems[20],
  },
  tabbarTitle: {
    fontSize: rems[16],
  },
  activeTabbarTitle: {
    color: 'black',
  },
  inActiveTabbarTitle: {
    color: '#979BA2',
  },
});
