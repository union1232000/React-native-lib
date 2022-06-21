import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../Redux/Action/LoginAction.js';
import {user} from '../Redux/Setting/Token.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';
import PushNotification from 'react-native-push-notification';
export default Login = ({navigation}, props) => {
  const loginState = useSelector(a => a.Loginreducers.response);
  const dispatch = useDispatch();
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [getCheckboxvisible, setCheckboxVisible] = useState(false);
  const [Username, setUsername] = useState('vannvv2@fpt.com.vn');
  const [Password, setPassword] = useState('union1232000A@');

  const Loginhandler = async () => {
    dispatch(loginAction(Username, Password));
  };
  useEffect(() => {
    if (loginState?.resultCode) {
      if (loginState?.resultCode == 1) {
        user.token = loginState?.data.token;
        navigation.navigate('DrawerNavigator');
      } else {
        Alert.alert('Thông Báo', loginState.message);
      }
    }
  }, [loginState]);

  const createChanel = () => {
    console.log('channell run ');
    PushNotification.createChannel({
      channelId: 'Test-chanel',
      channelName: 'Test',
    });
  };
  useEffect(() => {
    createChanel();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 40,
        alignItems: 'center',
      }}>
      {/* Hình FPT IS */}
      <KeyboardAvoidingView
        behavior="height"
        style={{
          flex: 1,
          width: '100%',
          paddingVertical: 24,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: Dimensions.get('screen').width * 0.5,
            height: Dimensions.get('screen').height * 0.1,
          }}>
          <Image
            source={require('../Images/logo.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}></Image>
        </View>
        {/* FPT INSIGHT Portal */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#335271', fontSize: 28, fontWeight: '700'}}>
            FIS INSIGHT PORTAL
          </Text>
          <Image
            source={require('../Images/stripe.png')}
            style={{height: '5.5%', marginTop: 10}}
            resizeMode="contain"></Image>
        </View>
        {/* đăng nhập  */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: '#fea026', fontSize: 25, fontWeight: '700'}}>
            ĐĂNG NHẬP HỆ THỐNG{' '}
          </Text>
        </View>
        {/* Tài khoảng mật khẩu  */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              style={{
                borderRadius: 5,
                width: '100%',
                textAlign: 'center',
                paddingLeft: 30,
                paddingRight: 50,
                fontWeight: '600',
                backgroundColor: '#e6eaed',
                fontSize: 20,
              }}
              onChangeText={value => setUsername(value)}
              value={Username}
              placeholderTextColor={'#335271'}
              placeholder="Tài Khoản"></TextInput>
            <FontAwesome
              style={style.icon}
              name={'user'}
              color="#b2bcc6"
              size={25}></FontAwesome>
          </View>
          {/* mật khẩu  */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <TextInput
              style={{
                borderRadius: 5,
                width: '100%',
                textAlign: 'center',
                paddingLeft: 30,
                fontWeight: '600',
                paddingRight: 50,
                backgroundColor: '#e6eaed',
                fontSize: 20,
              }}
              onChangeText={value => setPassword(value)}
              placeholder="Mật khẩu"
              placeholderTextColor={'#335271'}
              value={Password}
              secureTextEntry={getPasswordVisible ? false : true}></TextInput>
            <FontAwesome
              style={style.icon}
              name={'lock'}
              color="#b2bcc6"
              size={25}></FontAwesome>
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => {
                setPasswordVisible(!getPasswordVisible);
              }}>
              {getPasswordVisible ? (
                <FontAwesome5
                  name={'eye'}
                  color="#b2bcc6"
                  size={24}
                  style={{
                    right: 0,
                    position: 'absolute',
                    padding: 10,
                  }}></FontAwesome5>
              ) : (
                <FontAwesome5
                  name={'eye-slash'}
                  color="#b2bcc6"
                  size={24}
                  style={{
                    right: 0,
                    position: 'absolute',
                    padding: 10,
                  }}></FontAwesome5>
              )}
            </TouchableOpacity>
          </View>
        </View>
        {/* ghi nhớ đăng nhập */}
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <TouchableOpacity
            onPress={() => {
              setCheckboxVisible(!getCheckboxvisible);
              console.log(getCheckboxvisible);
            }}>
            {getCheckboxvisible ? (
              <FontAwesome5
                name={'circle'}
                color="#ff9336"
                size={20}></FontAwesome5>
            ) : (
              <AntDesign
                name={'checkcircleo'}
                color="#ff9336"
                size={20}></AntDesign>
            )}
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: '500',
              color: '#ff9336',
              fontSize: 20,
              fontStyle: 'italic',
              marginLeft: 10,
            }}>
            Ghi nhớ đăng nhập
          </Text>
        </View>
        {/* đăng nhập  */}
        <View style={{width: '100%'}}>
          <TouchableOpacity
            onPress={() => {
              Loginhandler();
            }}
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ff9336',
              borderRadius: 5,
              marginTop: 10,
              paddingVertical: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 24, color: 'white'}}>
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
        </View>
        {/* Hình cuối  */}
        <View
          style={{
            marginTop: 10,
            width: Dimensions.get('screen').width * 0.5,
            height: Dimensions.get('screen').height * 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Images/swipe.png')}
            style={{
              resizeMode: 'contain',
              width: '100%',
              height: '100%',
            }}></Image>
        </View>
      </KeyboardAvoidingView>
      <View
        style={{
          paddingVertical: 12,
        }}>
        <Text style={{fontSize: 14}}>
          Copyright © 2019, FPT Information System{' '}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  icon: {
    aspectRatio: 1,
    position: 'absolute',
    left: 0,
    padding: 10,
  },
});
