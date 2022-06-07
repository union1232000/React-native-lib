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
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Deletecourse} from '../API/Deletecourse';
import {get_allcourse} from '../API/Get_all_course';
import Header from './Header';
import {get_allcourseaction} from '../Redux/Action/GetallcourseAction';
import {Deletecourseaction} from '../Redux/Action/Deletecourseaction';
import PushNotification from 'react-native-push-notification';
export default Home = props => {
  const dispatch = useDispatch([]);
  const [data, setData] = useState([]);
  const getallcoursestate = useSelector(a => a.Getallcoursereducers.response);

  const handlenofication = item => {
    PushNotification.localNotification({
      channelId: 'Test-chanel',
      title: 'you click on ' + item.courseName,
      message: item.message,
    });
  };

  useEffect(() => {
    if (getallcoursestate?.data) {
      const listcourse = [];
      getallcoursestate.data.map((item, index) => {
        listcourse.push(item);
      });
      setData(listcourse);
    }
  }, [getallcoursestate]);

  // xóa
  const deletecoursestate = useSelector(b => b.Deletecoursereducers.response);
  const deletedata = async course_id => {
    dispatch(Deletecourseaction(course_id));
  };
  useEffect(() => {
    if (deletecoursestate?.resultCode == 1) {
      Alert.alert('Xóa khóa học thành công');
      dispatch(get_allcourseaction());
    }
  }, [deletecoursestate]);

  // call back
  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      dispatch(get_allcourseaction());
    });
    return willFocusSubscription;
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
      <View
        style={{
          paddingHorizontal: 15,
        }}>
        <FlatList
          data={data}
          keyExtractor={item => item.course_id}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#c2c2c2',
                  marginTop: 10,
                  borderRadius: 10,
                }}>
                <TouchableOpacity
                  style={{
                    width: '99%',
                  }}
                  onPress={() =>
                    props.navigation.navigate('Manager', {
                      courseId: item.course_id,
                    })
                  }>
                  <View style={{}}>
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
                            paddingLeft: 9,
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
                          paddingLeft: 3,
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
                          paddingLeft: 5,
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
                          paddingLeft: 10,
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
                          paddingLeft: 4,
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
                <View
                  style={{
                    width: '5%',
                    position: 'relative',
                  }}>
                  <Menu
                    style={{
                      right: 5,
                      top: 5,
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
                        }}
                        text="Sửa"
                      />
                      <MenuOption
                        onSelect={() => {
                          handlenofication(item);
                          deletedata(item.course_id);
                        }}>
                        <Text style={{color: 'red'}}>Xóa</Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
