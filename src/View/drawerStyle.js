import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DrawerStyle = ({navigation}, props) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 25,
        }}>
        {/* Thong tin người dùng  */}
        <Image
          source={require('../Images/ic_avatar.png')}
          style={{borderRadius: 200 / 2}}></Image>
        <Text style={{fontSize: 25, color: '#345173', paddingTop: 20}}>
          Nguyễn Võ Vũ Văn
        </Text>
        <Text style={{fontSize: 18, color: '#345173', paddingTop: 5}}>
          Vannvv2@fpt.com.vn
        </Text>
        <Image
          source={require('../Images/stripe.png')}
          style={{
            resizeMode: 'contain',
            width: '40%',
            paddingBottom: 30,
          }}></Image>
        {/* Tạo mới khóa học  */}
        <View
          style={{
            borderBottomWidth: 1,
            width: '100%',
            padding: 10,
            marginTop: 20,
            borderColor: '#c2c2c2',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('Create');
            }}>
            <Entypo
              name="add-to-list"
              size={25}
              style={{marginRight: 10, color: '#345173'}}></Entypo>
            <Text style={{fontSize: 17}}>Tạo mới khóa học </Text>
          </TouchableOpacity>
        </View>
        {/* tạo mới buổi học */}
        <View
          style={{
            borderBottomWidth: 1,
            width: '100%',
            padding: 10,
            borderColor: '#c2c2c2',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('CreateManger');
            }}>
            <AntDesign
              name="addfile"
              size={25}
              style={{marginRight: 10, color: '#345173'}}></AntDesign>
            <Text style={{fontSize: 17}}>Tạo mới buổi học </Text>
          </TouchableOpacity>
        </View>
        {/* Quản lý Buổi học  */}
        <View
          style={{
            borderBottomWidth: 1,
            width: '100%',
            padding: 10,
            borderColor: '#c2c2c2',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('Manager');
            }}>
            <Entypo
              name="text-document"
              size={25}
              style={{marginRight: 10, color: '#345173'}}></Entypo>
            <Text style={{fontSize: 17}}>Quản lý buổi học </Text>
          </TouchableOpacity>
        </View>
        {/* Thông tin ứng dụng  */}
        <View
          style={{
            borderBottomWidth: 1,
            width: '100%',
            padding: 10,
            borderColor: '#c2c2c2',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('Info');
            }}>
            <Entypo
              name="info-with-circle"
              size={25}
              style={{marginRight: 10, color: '#00C2FC'}}></Entypo>
            <Text style={{fontSize: 17}}>Thông tin ứng dụng </Text>
          </TouchableOpacity>
        </View>
        {/* Đăng xuất  */}
        <View
          style={{
            width: '100%',
            padding: 10,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Feather
              name="log-out"
              size={25}
              style={{marginRight: 10, color: '#345173'}}></Feather>
            <Text style={{fontSize: 17}}> Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
export default DrawerStyle;
