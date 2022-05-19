import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {FlatList, Text, View, Alert} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {Deleteclass} from '../API/Deleteclass';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {get_allclass} from '../API/Get_all_class';
import Header from './Header';
import Editclass from './Editclass';

export default Home = props => {
  const [data, setData] = useState([]);
  const getdata = async () => {
    const result = await get_allclass(props.route.params.courseId);
    if (result.resultCode == 1) {
      setData(result.data);
    }
  };

  // xóa
  const deletedata = async id => {
    const result = await Deleteclass(id);

    if (result.resultCode === 1) {
      getdata();
      console.log(result.resultCode);
    }
  };

  // call back
  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      getdata();
      Deleteclass();
    });
    return willFocusSubscription;
  }, []);
  // lấy courseID
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
      <Header
        title="QUẢN LÝ BUỔI HỌC"
        {...props}
        onClick={() => {
          props.navigation.navigate('CreateManger', {
            courseId: props.route.params.courseId,
          });
        }}
      />
      <View style={{padding: 20}}>
        <FlatList
          data={data}
          keyExtractor={item => item.code}
          renderItem={({item}) => {
            return (
              <View>
                <Text
                  style={{color: '#0a8dc3', fontSize: 25, fontWeight: 'bold'}}>
                  {item.className}
                </Text>
                <View
                  style={{
                    flex: 1,
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#c2c2c2',
                    marginTop: 10,
                    borderRadius: 5,
                    justifyContent: 'flex-start',
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
                      <MenuOption
                        onSelect={() => {
                          let start = item.startedTime.split(':');
                          let end = item.endedTime.split(':');
                          let event = new Date(item.date);
                          let starttime = event.setHours(start[0], start[1]);
                          let endtime = event.setHours(end[0], end[1]);
                          console.log(starttime, endtime, '->>>>>>>');

                          props.navigation.navigate('Editclass', {
                            classId: item.classId,
                            className: item.className,
                            trainer: item.trainer,
                            date: item.date,
                            startedTime: starttime,
                            endedTime: endtime,
                            buildingId: item.buildingId,
                            roomId: item.roomId,
                          });
                          console.log(
                            item.startedTime,
                            item.endedTime,
                            'asdasdasdasda',
                          );
                        }}
                        text="Sửa"
                      />
                      <MenuOption
                        onSelect={() => {
                          deletedata(item.classId);
                          console.log(item.classId);
                        }}>
                        <Text style={{color: 'red'}}>Xóa</Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                  {/* Tựa mục  */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '95%',
                    }}>
                    <Text numberOfLines={2}>
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
                      name="user-tie"
                      size={25}
                      style={{color: '#ffd237', padding: 5}}></FontAwesome5>
                    <Text
                      style={{color: '#345173', fontSize: 18, paddingLeft: 22}}>
                      Giảng viên: {/**/}
                      <Text
                        numberOfLines={1}
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
                    <Text
                      style={{color: '#345173', fontSize: 18, paddingLeft: 18}}>
                      Cán bộ quản lý : {/**/}
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
                    <Text
                      style={{color: '#345173', fontSize: 18, paddingLeft: 22}}>
                      Ngày: {/**/}
                      <Text
                        style={{
                          color: '#345173',
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}>
                        {moment(item.date).format('L')}
                      </Text>
                    </Text>
                  </View>
                  {/* Thời gian  */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign
                      name="clockcircleo"
                      size={25}
                      style={{color: '#345173', padding: 5}}></AntDesign>
                    <Text
                      style={{color: '#345173', fontSize: 18, paddingLeft: 22}}>
                      Thời gian: {/**/}
                      <Text
                        style={{
                          color: '#345173',
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}>
                        {moment(item.startedDate).format('l')}-
                        {moment(item.endedDate).format('l')}
                      </Text>
                    </Text>
                  </View>
                  {/* Tòa nhà  */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome5
                      name="building"
                      size={25}
                      style={{color: '#0090d7', padding: 5}}></FontAwesome5>
                    <Text
                      style={{color: '#345173', fontSize: 18, paddingLeft: 25}}>
                      Tòa nhà: {/**/}
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
                    <Text
                      style={{color: '#345173', fontSize: 18, paddingLeft: 18}}>
                      Phòng: {/**/}
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
                    <Text style={{paddingLeft: 18}}>
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
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
