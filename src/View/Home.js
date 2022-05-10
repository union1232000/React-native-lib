import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, FlatList} from 'react-native';
import moment from 'moment';

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Entypo from 'react-native-vector-icons/Entypo';
import {get_allcourse} from '../API/Get_all_course';
import Header from './Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default Home = props => {
  const [data, setData] = useState([]);
  const getdata = async () => {
    const result = await get_allcourse();
    if (result.resultCode == 1) {
      setData(result.data);
    }
    // console.log(result.data);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <View style={{flex: 1, width: '100%'}}>
      {/* header */}
      <Header title="QUẢN LÝ KHÓA HỌC " {...props} name={'Create'} />
      <View style={{}}>
        <FlatList
          data={data}
          keyExtractor={item => item.course_id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('Manager', {
                    courseId: item.course_id,
                  })
                }>
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
                      padding: 15,
                    }}>
                    <MenuTrigger>
                      <Entypo name="dots-three-vertical" size={26}></Entypo>
                    </MenuTrigger>
                    <MenuOptions>
                      <MenuOption onSelect={() => alert(`Thêm`)} text="Thêm" />
                      <MenuOption onSelect={() => alert(`Xóa`)}>
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
                    <Text>
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
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome5
                      name="user-tie"
                      size={25}
                      style={{color: '#ffd237', padding: 7}}></FontAwesome5>
                    <Text
                      style={{color: '#345173', fontSize: 18, paddingLeft: 12}}>
                      Giảng viên:
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
                  {/* cán bộ quản lý  */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome5
                      name="address-card"
                      size={25}
                      style={{color: '#40304d', padding: 7}}></FontAwesome5>
                    <Text
                      style={{color: '#345173', fontSize: 18, paddingLeft: 9}}>
                      Cán bộ quản lý:
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
                      style={{color: '#345173', fontSize: 18, paddingLeft: 14}}>
                      Thời gian:
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
                      style={{color: '#345173', fontSize: 18, paddingLeft: 18}}>
                      Tòa nhà:
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
                      style={{color: '#345173', fontSize: 18, paddingLeft: 10}}>
                      Phòng:
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
            );
          }}
        />
      </View>
    </View>
  );
};
