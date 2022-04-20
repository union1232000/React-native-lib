import React, {Component, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
export class Studentsitem extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            color: '#c2c2c2',
          }}>
          <Menu
            style={{
              position: 'absolute',
              right: 1,
              top: 10,
              padding: 10,
            }}>
            <MenuTrigger>
              <Entypo name="dots-three-vertical" size={20}></Entypo>
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={() => alert(`Thêm`)} text="Thêm" />
              <MenuOption onSelect={() => alert(`Xóa`)}>
                <Text style={{color: 'red'}}>Xóa</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
          {/* Tựa mục  */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>
              {this.props.items.title}
              <Text
                style={{fontSize: 25, color: '#345173', fontWeight: 'bold'}}>
                Quản lý buổi học
              </Text>
            </Text>
          </View>
          {/* Giảng viên  */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="user"
              size={30}
              style={{color: '#ffd237', padding: 5}}></FontAwesome>
            <Text>
              {this.props.items.id}
              <Text
                style={{color: '#0a8dc3', fontSize: 15, fontWeight: 'bold'}}>
                {' '}
                Phan Nam Dương
              </Text>
            </Text>
          </View>
          {/* cán bộ quản lý  */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="vcard-o"
              size={25}
              style={{color: '#40304d', padding: 5}}></FontAwesome>
            <Text>
              {this.props.items.name}
              <Text
                style={{color: '#f0943f', fontSize: 15, fontWeight: 'bold'}}>
                : trinhntk
              </Text>
            </Text>
          </View>
          {/* Ngày  */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="calendar-check-o"
              size={25}
              style={{color: '#42c8fb', padding: 5}}></FontAwesome>
            <Text>
              {this.props.items.calender}
              <Text
                style={{color: '#345173', fontSize: 15, fontWeight: 'bold'}}>
                : 21/01/2021 - 21/01/2021
              </Text>
            </Text>
          </View>
          {/* Thời gian  */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="clock-o"
              size={25}
              style={{color: '#345173', padding: 5}}></FontAwesome>
            <Text>
              {this.props.items.calenderTime}
              <Text
                style={{color: '#345173', fontSize: 15, fontWeight: 'bold'}}>
                : 20:35 - 20:46
              </Text>
            </Text>
          </View>
          {/* Tòa nhà  */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="building-o"
              size={25}
              style={{color: '#0090d7', padding: 5}}></FontAwesome>
            <Text>
              {this.props.items.building}
              <Text
                style={{color: '#345173', fontSize: 15, fontWeight: 'bold'}}>
                {' '}
                Tân Thuận 3
              </Text>
            </Text>
          </View>
          {/* Phòng  */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="vcard-o"
              size={25}
              style={{color: '#ff9126', padding: 5}}></FontAwesome>
            <Text>
              {this.props.items.room}
              <Text
                style={{color: '#345173', fontWeight: 'bold', fontSize: 15}}>
                {' '}
                Kỳ Hòa - Tầng 1
              </Text>
            </Text>
          </View>
          {/* wifi */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="wifi"
              size={25}
              style={{color: '#34c96b', padding: 5}}></FontAwesome>
            <Text>
              {this.props.items.wifi}
              <Text
                style={{color: '#345173', fontWeight: 'bold', fontSize: 15}}>
                {' '}
                FIS.HCM
              </Text>
            </Text>
          </View>
          {/* Khung cuối  */}
          <View
            style={{
              bottom: 0,
              width: '30%',
              justifyContent: 'center',
              position: 'absolute',
              flexDirection: 'row',
              padding: 15,
              right: 0,
              marginTop: 15,
              borderRadius: 30,
              backgroundColor: '#e7ebee',
              borderColor: '#c2c2c2',
            }}>
            <Text style={{fontSize: 20, color: '#d67e3e'}}>4550</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import Header from './Header';
export default Home = ({navigation}, props) => {
  let DATA = [
    {
      id: 'Giảng Viên: ',
      name: 'Cán bộ quản lý: ',
      calender: 'Ngày: ',
      calenderTime: 'Thời Gian: ',
      building: 'Tòa Nhà: ',
      room: 'Phòng:',
      tittle: '',
      wifi: '',
    },
    ,
  ];
  return (
    <View style={{flex: 1, width: '100%', borderWidth: 2}}>
      {/* header */}
      <Header title="Quản lý buổi học" navigation={navigation} />

      <ScrollView>
        <View style={{padding: 10}}>
          <Text
            style={{
              padding: 5,
              color: '#0a8dc3',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Test Thêm
          </Text>
          {DATA.map((item, index) => (
            <Studentsitem key={index} items={item} index={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
