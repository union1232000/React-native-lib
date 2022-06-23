import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Deleteclass} from '../API/Deleteclass';
import {get_allclassaction} from '../Redux/Action/GetclassAction';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import {Deleteclassaction} from '../Redux/Action/Deleteclassaction';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

export default Home = props => {
  // get all class
  const [courseid, setcourseid] = useState(props.route.params.courseId);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const getallclassstate = useSelector(a => a.Getallclassreducers?.response);
  const getallclassstatus = useSelector(a => a.Getallclassreducers?.loading);

  useEffect(() => {
    dispatch(get_allclassaction(props.route.params.courseId));
  }, [props.route.params.courseId]);

  useEffect(() => {
    if (getallclassstate?.data) {
      const listclass = [];
      getallclassstate.data.map((item, index) => {
        listclass.push(item);
      });
      setData(listclass);
    }
  }, [getallclassstate]);

  // xóa`
  const deleteclassstate = useSelector(b => b.Deleteclassreducers.response);
  const deletedata = async classId => {
    dispatch(Deleteclassaction(classId));
  };
  useEffect(() => {
    if (deleteclassstate?.resultCode == 1) {
      Alert.alert('Xóa buổi học thành công');
      dispatch(get_allclassaction(props.route.params.courseId));
    }
  }, [deleteclassstate]);

  // // call back
  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      dispatch(get_allclassaction(props.route.params.courseId));
    });
    return willFocusSubscription;
  }, []);
  if (getallclassstatus)
    return (
      <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        LOADING.............
      </Text>
    );
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
        isBack={true}
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
              <View >
                <Text
                  style={{
                    color: '#0a8dc3',
                    fontSize: 25,
                    fontWeight: 'bold',
                  }}>
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
                          props.navigation.navigate('Editclass', {
                            classId: item.classId,
                            courseName: item.courseName,
                            trainer: item.trainer,
                            date: item.date,
                            startedTime: item.startedTime,
                            endedTime: item.endedTime,
                            buildingId: item.buildingId,
                            roomId: item.roomId,
                            courseId: item.course_id,
                          });
                        }}
                        text="Sửa"
                      />
                      <MenuOption
                        onSelect={() => {
                          deletedata(item.classId);
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
                      style={{
                        color: '#345173',
                        fontSize: 20,
                        paddingLeft: 12,
                      }}>
                      Giảng viên: {/**/}
                      <Text
                        numberOfLines={1}
                        style={{
                          color: '#0a8dc3',
                          fontSize: 20,
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
                      style={{
                        color: '#345173',
                        fontSize: 20,
                        paddingLeft: 6,
                      }}>
                      Cán bộ quản lý : {/**/}
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
                  {/* Ngày  */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome
                      name="calendar-check-o"
                      size={25}
                      style={{color: '#42c8fb', padding: 5}}></FontAwesome>
                    <Text
                      style={{
                        color: '#345173',
                        fontSize: 20,
                        paddingLeft: 10,
                      }}>
                      Ngày: {/**/}
                      <Text
                        style={{
                          color: '#345173',
                          fontSize: 20,
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
                      style={{color: '#ff0066', padding: 5}}></AntDesign>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: '#345173',
                        fontSize: 20,
                        paddingLeft: 10,
                      }}>
                      Thời gian: {/**/}
                      <Text
                        style={{
                          color: '#ff0066',
                          fontSize: 20,
                          fontWeight: 'bold',
                        }}>
                        {moment(item.startedTime).format('LT')}-
                        {moment(item.endedTime).format('LT')}
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
                      style={{
                        color: '#345173',
                        fontSize: 20,
                        paddingLeft: 14,
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
                      style={{color: '#ff9126', padding: 5}}></FontAwesome5>
                    <Text
                      style={{
                        color: '#345173',
                        fontSize: 20,
                        paddingLeft: 5,
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
                  {/* wifi */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome5
                      name="wifi"
                      size={25}
                      style={{color: '#34c96b', padding: 5}}></FontAwesome5>
                    <Text style={{paddingLeft: 6}}>
                      <Text
                        style={{
                          color: '#345173',
                          fontWeight: 'bold',
                          fontSize: 20,
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
                      padding: 10,
                      right: 0,
                      margin: 10, 
                      backgroundColor: '#e7ebee',
                      borderColor: '#c2c2c2',
                    }}>
                    <Text
                      style={{
                        fontSize: 22,
                        color: '#d67e3e',
                        fontWeight: 'bold',
                      }}>
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
