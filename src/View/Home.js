import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Deletecourse} from '../API/Deletecourse';
import {get_allcourse} from '../API/Get_all_course';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import Editcourseaction from '../Redux/Action/Editcourseaction';
import Editcourse from './Editcourse';
export default Home = props => {
  const [data, setData] = useState([]);
  const getdata = async () => {
    const result = await get_allcourse();
    if (result.resultCode == 1) {
      setData(result.data);
    }
  };

  // xóa
  const deletedata = async id => {
    try {
      const result = await Deletecourse(id);
      if (result.resultCode == 1) {
        Alert.alert('xóa thành công');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <View style={{flex: 1}}>
      {/* header */}
      <Header
        title="QUẢN LÝ KHÓA HỌC "
        {...props}
        onClick={() => {
          props.navigation.navigate('Create');
        }}
      />
      <View style={{padding: 15}}>
        <FlatList
          data={data}
          keyExtractor={item => item.course_id}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={{width: '100%'}}
                  onPress={() =>
                    props.navigation.navigate('Manager', {
                      courseId: item.course_id,
                    })
                  }>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#c2c2c2',
                      marginTop: 10,
                      borderRadius: 5,
                      padding: 10,
                    }}>
                    {/* Tựa mục  */}
                    <View
                      style={{
                        width: '95%',
                      }}>
                      <Text numberOfLines={2}>
                        {item.title}
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
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                      }}>
                      <FontAwesome5
                        name="user-tie"
                        size={25}
                        style={{color: '#ffd237', padding: 7}}></FontAwesome5>
                      <View style={{width: '90%'}}>
                        <Text
                          numberOfLines={1}
                          style={{
                            color: '#345173',
                            fontSize: 18,
                            paddingLeft: 15,
                          }}>
                          Giảng viên: {/**/}
                          <Text
                            style={{
                              color: '#0a8dc3',
                              fontSize: 20,
                              fontWeight: 'bold',
                            }}>
                            {item.trainer}
                          </Text>
                        </Text>
                      </View>
                    </View>
                    {/* cán bộ quản lý  */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesome5
                        name="address-card"
                        size={25}
                        style={{color: '#40304d', padding: 7}}></FontAwesome5>
                      <Text
                        style={{
                          color: '#345173',
                          fontSize: 18,
                          paddingLeft: 9,
                        }}>
                        Cán bộ quản lý: {/**/}
                        {item.name}
                        <Text
                          style={{
                            color: '#f0943f',
                            fontSize: 20,
                            fontWeight: 'bold',
                          }}>
                          trinhntk
                        </Text>
                      </Text>
                    </View>
                    {/* Thời gian  */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesome
                        name="calendar-check-o"
                        size={25}
                        style={{color: '#42c8fb', padding: 7}}></FontAwesome>
                      <Text
                        style={{
                          color: '#345173',
                          fontSize: 18,
                          paddingLeft: 14,
                        }}>
                        Thời gian: {/**/}
                        <Text
                          style={{
                            color: '#345173',
                            fontSize: 20,
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
                        style={{color: '#0090d7', padding: 7}}></FontAwesome5>
                      <Text
                        style={{
                          color: '#345173',
                          fontSize: 18,
                          paddingLeft: 18,
                        }}>
                        Tòa nhà: {/**/}
                        <Text
                          style={{
                            color: '#345173',
                            fontSize: 20,
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
                        style={{color: '#ff9126', padding: 7}}></FontAwesome5>
                      <Text
                        style={{
                          color: '#345173',
                          fontSize: 18,
                          paddingLeft: 10,
                        }}>
                        Phòng: {/**/}
                        <Text
                          style={{
                            color: '#345173',
                            fontWeight: 'bold',
                            fontSize: 20,
                          }}>
                          {item.roomName}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <Menu
                  style={{
                    position: 'absolute',
                    right: 1,
                    top: 20,
                    padding: 5,
                  }}>
                  <MenuTrigger>
                    <Entypo name="dots-three-vertical" size={30}></Entypo>
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption
                      onSelect={() => {
                        props.navigation.navigate('Editcourse', {
                          courseId: item.course_id,
                          courseName: item.courseName,
                          trainer: item.trainer,
                          startedDate: item.startedDate,
                          endedDate: item.endedDate,
                          buildingId: item.buildingId,
                          roomId: item.roomId,
                        });
                        console.log(
                          item.startedDate,
                          item.endedDate,
                          '->>>>>>',
                        );
                      }}
                      text="Sửa"
                    />
                    <MenuOption
                      onSelect={() => {
                        deletedata(item.course_id);
                      }}>
                      <Text style={{color: 'red'}}>Xóa</Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
