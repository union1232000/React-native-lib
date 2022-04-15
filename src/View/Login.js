import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import icon from '../Images/index.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default Login = ({navigation}, props) => {
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [getCheckboxvisible, setCheckboxVisible] = useState(false);
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Login, setLogin] = useState(0);
  const Loginhandler = () => {
    if (Username == 1 && Password == 1) {
      navigation.navigate('DrawerNavigator');
    } else {
      Alert.alert(
        ' Đăng nhập không thành công , vui lòng nhập đầy đủ thông tin',
      );
    }
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: '#f4f8fb',
          paddingHorizontal: 15,
          paddingVertical: 20,
        }}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Hình FPT IS */}
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icon.ic_logojgp}
              style={{
                width: '100%',
                height: 100,
                resizeMode: 'center',
              }}></Image>
          </View>
          {/* FPT INSIGHT Portal */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#335271', fontSize: 28, fontWeight: '500'}}>
              FIS INSIGHT PORTAL
            </Text>
            <Image
              source={require('../Images/stripe.png')}
              style={{height: '7%', marginTop: 8}}
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
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                style={{
                  width: '100%',
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: '#e6eaed',
                }}
                onChangeText={value => setUsername(value)}
                value={Username}
                placeholder="Nhập Tài Khoản"></TextInput>
              <FontAwesome
                style={style.icon}
                name={'user'}
                color="#b2bcc6"
                size={30}></FontAwesome>
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
                  paddingRight: 50,
                  fontWeight: '600',
                  backgroundColor: '#e6eaed',
                }}
                onChangeText={value => setPassword(value)}
                value={Password}
                placeholder="Mật khẩu"
                secureTextEntry={getPasswordVisible ? false : true}></TextInput>
              <FontAwesome
                style={style.icon}
                name={'lock'}
                color="#b2bcc6"
                size={30}></FontAwesome>
              <TouchableOpacity
                style={{alignItems: 'center', justifyContent: 'center'}}
                onPress={() => {
                  setPasswordVisible(!getPasswordVisible);
                }}>
                {getPasswordVisible ? (
                  <Feather
                    name={'eye'}
                    color="#b2bcc6"
                    size={30}
                    style={{
                      right: 0,
                      position: 'absolute',
                      padding: 10,
                    }}></Feather>
                ) : (
                  <Feather
                    name={'eye-off'}
                    color="#b2bcc6"
                    size={30}
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
            }}>
            <TouchableOpacity
              onPress={() => {
                setCheckboxVisible(!getCheckboxvisible);
                console.log(getCheckboxvisible);
              }}>
              {getCheckboxvisible ? (
                <Feather name={'circle'} color="#ff9336" size={20}></Feather>
              ) : (
                <Feather
                  name={'check-circle'}
                  color="#ff9336"
                  size={20}></Feather>
              )}
            </TouchableOpacity>
            <Text style={{fontWeight: '500', color: '#ff9336', fontSize: 15}}>
              {' '}
              Ghi Nhớ Đăng Nhập
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
              <Text style={{fontWeight: '500', fontSize: 25, color: 'white'}}>
                Đăng Nhập
              </Text>
            </TouchableOpacity>
          </View>
          {/* Hình cuối  */}
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../Images/swipe.png')}
              style={{resizeMode: 'contain', height: 150}}></Image>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  icon: {aspectRatio: 1, position: 'absolute', left: 0, padding: 10},
});
