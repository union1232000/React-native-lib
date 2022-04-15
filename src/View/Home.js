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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import {MenuProvider} from 'react-native-popup-menu';
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
      <KeyboardAvoidingView>
        <ScrollView>
          <View
            style={{
              flex: 1,
              padding: 10,
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}>
            {/* Tựa mục  */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>
                {this.props.items.title}
                <Text
                  style={{fontSize: 25, color: '#345173', fontWeight: 'bold'}}>
                  Chia sẻ kinh nghiệm tư vấn - triển khai dự án NAC F....
                </Text>
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome
                name="user"
                size={30}
                style={{color: '#ffd237', padding: 10}}></FontAwesome>
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
                style={{color: '#40304d', padding: 10}}></FontAwesome>
              <Text>
                {this.props.items.name}
                <Text
                  style={{color: '#f0943f', fontSize: 15, fontWeight: 'bold'}}>
                  : trinhntk
                </Text>
              </Text>
            </View>
            {/* Thời gian  */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome
                name="calendar-check-o"
                size={25}
                style={{color: '#42c8fb', padding: 10}}></FontAwesome>
              <Text>
                {this.props.items.calender}
                <Text
                  style={{color: '#345173', fontSize: 15, fontWeight: 'bold'}}>
                  : 21/01/2021 - 21/01/2021
                </Text>
              </Text>
            </View>
            {/* Tòa nhà  */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome
                name="building-o"
                size={25}
                style={{color: '#0090d7', padding: 10}}></FontAwesome>
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
                style={{color: '#ff9126', padding: 10}}></FontAwesome>
              <Text>
                {this.props.items.room}
                <Text
                  style={{color: '#345173', fontWeight: 'bold', fontSize: 15}}>
                  {' '}
                  Chương Dương - Tần 5
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from './Header';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
export default Home = ({navigation}, props) => {
  let DATA = [
    {
      id: 'Giảng Viên: ',
      name: 'Cán bộ quản lý: ',
      calender: 'Thời Gian: ',
      building: 'Tòa Nhà: ',
      room: 'Phòng:',
      tittle: '',
    },
    ,
  ];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <View style={{flex: 1, width: '100%', borderWidth: 2}}>
      {/* header */}
      <Header title="Quản lý Khóa Học " navigation={navigation} />
      <ScrollView>
        <View style={{padding: 10}}>
          {DATA.map((item, index) => (
            <Studentsitem key={index} items={item} index={index} />
          ))}
          <TouchableOpacity
            style={{position: 'absolute', right: 1, top: 20, padding: 10}}>
            <Entypo name="dots-three-vertical" size={20}></Entypo>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
