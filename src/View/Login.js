import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../Redux/Action/LoginAction.js';
import {user} from '../Redux/Setting/Token.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default Login = ({navigation}, props) => {
  const loginState = useSelector(a => a.Loginreducers.response);
  const dispatch = useDispatch();

  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [getCheckboxvisible, setCheckboxVisible] = useState(false);
  const [Username, setUsername] = useState('vannvv2@fpt.com.vn');
  const [Password, setPassword] = useState('chuonng1080@');
  const [Login, setLogin] = useState(0);

  const Loginhandler = async () => {
    dispatch(loginAction(Username, Password));
  };
  useEffect(() => {
    if (loginState?.resultCode) {
      if (loginState?.resultCode == 1) {
        user.token = loginState?.data.token;
        console.log(loginState);
        navigation.navigate('DrawerNavigator');
      } else {
        Alert.alert('Tên đăng nhập và mật khẩu không được để trống!');
      }
    }
    return () => {};
  }, [loginState]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 40,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Hình FPT IS */}
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 30,
        }}>
        <Image
          source={require('../Images/logo.png')}
          style={{
            width: '100%',
            height: 75,
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
          style={{height: '6%', marginTop: 8}}
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
              width: '100%',
              height: '100%',
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
              width: '100%',
              height: '100%',
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
              <Feather
                name={'eye'}
                color="#b2bcc6"
                size={25}
                style={{
                  right: 0,
                  position: 'absolute',
                  padding: 10,
                }}></Feather>
            ) : (
              <Feather
                name={'eye-off'}
                color="#b2bcc6"
                size={25}
                style={{
                  right: 0,
                  position: 'absolute',
                  padding: 10,
                }}></Feather>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {/* ghi nhớ đăng nhập */}
      <View
        style={{
          width: '100%',
          alignItems: 'flex-start',
          flexDirection: 'row',
          marginTop: 15,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            setCheckboxVisible(!getCheckboxvisible);
            console.log(getCheckboxvisible);
          }}>
          {getCheckboxvisible ? (
            <Feather name={'circle'} color="#ff9336" size={20}></Feather>
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
      <View style={{width: '100%', padding: 10}}>
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
            padding: 15,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
            ĐĂNG NHẬP
          </Text>
        </TouchableOpacity>
      </View>
      {/* Hình cuối  */}
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <Image
          source={require('../Images/swipe.png')}
          style={{resizeMode: 'contain', height: 150}}></Image>
      </View>
      <Text>Copyright C 2019, FPT Information system </Text>
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
