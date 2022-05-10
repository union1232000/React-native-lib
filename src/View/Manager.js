import React, {Component, useEffect, useState} from 'react';
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from './Header';
import {get_allclass} from '../API/Get_all_class';
export default Home = props => {
  const [data, setData] = useState([]);
  const getdata = async () => {
    const result = await get_allclass();
    if (result.resultCode == 1) {
      setData(result.data);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    console.log(props.route.params.courseId);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
      }}>
      {/* header */}
      <Header title="QUẢN LÝ BUỔI HỌC" {...props} name={'CreateManager'} />
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.courseId}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#c2c2c2',
                  marginTop: 10,
                  borderRadius: 5,
                }}>
                <Menu
                  style={{
                    position: 'absolute',
                    right: 1,
                    top: 10,
                    padding: 5,
                  }}>
                  <MenuTrigger>
                    <Entypo name="dots-three-vertical" size={30}></Entypo>
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
                    <Text
                      style={{
                        fontSize: 25,
                        color: '#345173',
                        fontWeight: 'bold',
                      }}>
                      {item.courseName}
                    </Text>
                  </Text>
                </View>
                {/* Giảng viên  */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome5
                    name="user-tie "
                    size={30}
                    style={{color: '#ffd237', padding: 5}}></FontAwesome5>
                  <Text>
                    <Text
                      style={{
                        color: '#0a8dc3',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      {item.trainer}
                    </Text>
                  </Text>
                </View>
                {/* cán bộ quản lý  */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome5
                    name="address-card"
                    size={25}
                    style={{color: '#40304d', padding: 5}}></FontAwesome5>
                  <Text>
                    <Text
                      style={{
                        color: '#f0943f',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      trinhntk
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
                    <Text
                      style={{
                        color: '#345173',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      {item.date}
                    </Text>
                  </Text>
                </View>
                {/* Thời gian  */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <AntDesign
                    name="clockcircleo"
                    size={25}
                    style={{color: '#345173', padding: 5}}></AntDesign>
                  <Text>
                    <Text
                      style={{
                        color: '#345173',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      {item.startedTime} - {item.endedTime}
                    </Text>
                  </Text>
                </View>
                {/* Tòa nhà  */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome5
                    name="building"
                    size={25}
                    style={{color: '#0090d7', padding: 5}}></FontAwesome5>
                  <Text>
                    <Text
                      style={{
                        color: '#345173',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      {item.buildingName}
                    </Text>
                  </Text>
                </View>
                {/* Phòng  */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome5
                    name="chalkboard-teacher"
                    size={25}
                    style={{color: '#ff9126', padding: 5}}></FontAwesome5>
                  <Text>
                    <Text
                      style={{
                        color: '#345173',
                        fontWeight: 'bold',
                        fontSize: 15,
                      }}>
                      {item.roomName}
                    </Text>
                  </Text>
                </View>
                {/* wifi */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome5
                    name="wifi"
                    size={25}
                    style={{color: '#34c96b', padding: 5}}></FontAwesome5>
                  <Text>
                    <Text
                      style={{
                        color: '#345173',
                        fontWeight: 'bold',
                        fontSize: 15,
                      }}>
                      {item.wifi}
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
                  <Text style={{fontSize: 20, color: '#d67e3e'}}>
                    {item.code}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};