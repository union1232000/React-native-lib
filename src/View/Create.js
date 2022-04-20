import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import Header from './Header';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Calender from './Calender';
import Time from './Time';
import {POST_CREATE} from '../Redux/Action/CreateAction';
import {useDispatch, useSelector} from 'react-redux';
import Home from './Home';
export default ({navigation}, props) => {
  // const createState = useSelector(b => b.Createreducers.response);
  const dispatch = useDispatch();
  const Savehandler = async () => {
    const action = {
      type: POST_CREATE,
      data: {
        courseName: TK,
        trainer: TGV,
        startedDate: date,
        endedDate: date2,
        buildingId: chontoanha,
        roomId: chonphong,
      },
    };
    dispatch(action);
  };
  //Tên khóa
  const [TK, onChangeTK] = useState('');
  const [isValidTK, setValidTK] = useState(true);
  const verifyTK = () => {
    if (TK == '') {
      setValidTK(false);
    } else {
      setValidTK(true);
    }
  };
  // Tên Giảng viên
  const [TGV, onChangeTGV] = useState('');
  const [isValidTGV, setValidTGV] = useState(true);
  const verifyTGV = () => {
    if (TGV == '') {
      setValidTGV(false);
    } else {
      setValidTGV(true);
    }
  };
  // Từ Ngày
  const [date, setDate] = useState(new Date());
  // Đến Ngày
  const [date2, setDate2] = useState(new Date());
  const [isValidDatime, setValidDatetime] = useState(true);
  const verifyDatetime = () => {
    if (date2 > date) {
      setValidDatetime(false);
    } else {
      setValidDatetime(true);
    }
  };
  // Tòa nhà
  const [open3, setOpen3] = useState(false);
  const [items, setItems] = useState([
    {label: 'KangNam', value: 'Kangnam'},
    {label: 'Tân Thuận 3', value: 'Tân Thuận 3'},
  ]);
  const [chontoanha, onChangechontoanha] = useState('');
  const [isValidchontoanha, setValidchontoanha] = useState(true);
  const verifychontoanha = () => {
    if (chontoanha == '') {
      setValidchontoanha(false);
    } else {
      setValidchontoanha(true);
    }
  };
  // Phòng
  const [open4, setOpen4] = useState(false);
  const [items2, setItems2] = useState([
    {label: 'Phòng 1', value: 'Phòng 1'},
    {label: 'Phòng 2', value: 'Phòng 2'},
  ]);
  const [chonphong, onChangechonphong] = useState('');
  const [isValidchonphong, setValidchonphong] = useState(true);
  const verifychonphong = () => {
    if (chonphong == '') {
      setValidchonphong(false);
    } else {
      setValidchonphong(true);
    }
  };
  return (
    <ScrollView style={{flex: 1, width: '100%'}}>
      <Header
        title="TẠO MỚI KHÓA HỌC"
        isRightDisable={true}
        isBack={true}
        navigation={navigation}
      />
      {/* Tên Khóa  */}
      <View style={{padding: 10}}>
        <View View style={{width: '100%'}}>
          <Text style={{color: '#345173', fontSize: 22, fontWeight: 'bold'}}>
            Tên Khóa{' '}
          </Text>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#c2c2c2',
              borderRadius: 5,
              padding: 15,
            }}
            onChangeText={text => {
              onChangeTK(text);
            }}
            value={TK}
            placeholder="Nhập tên khóa học"></TextInput>
          <Text style={{color: 'red'}}>
            {isValidTK ? '' : 'Tên khóa không được bỏ trống '}
          </Text>
        </View>
        {/* Giảng viên  */}
        <View View style={{width: '100%'}}>
          <Text style={{color: '#345173', fontSize: 22, fontWeight: 'bold'}}>
            Giảng viên{' '}
          </Text>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#c2c2c2',
              borderRadius: 5,
              padding: 15,
            }}
            onChangeText={text => {
              onChangeTGV(text);
            }}
            value={TGV}
            placeholder="Nhập tên giảng viên"></TextInput>
          <Text style={{color: 'red'}}>
            {isValidTGV ? '' : 'Tên giảng viên không thể để trống'}
          </Text>
        </View>
        {/* date time  */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {/* Từ Ngày  */}
          <View>
            <Text style={{color: '#345173', fontSize: 20, fontWeight: '500'}}>
              Từ Ngày
            </Text>
            <Calender onPressSetDateTime={setDate} dateTime={date} />
          </View>
          {/* Đến Ngày  */}
          <View>
            <Text style={{color: '#345173', fontSize: 20, fontWeight: '500'}}>
              Đến Ngày
            </Text>
            <Calender onPressSetDateTime={setDate2} dateTime={date2} />
          </View>
        </View>
        <Text style={{color: 'red'}}>
          {isValidDatime ? '' : 'ngày bắt đầu không được sau ngày kết thúc'}
        </Text>
        {/* chọn tòa nhà  */}
        <View style={{width: '100%'}}>
          <Text style={{fontSize: 20, color: '#345173', fontWeight: '500'}}>
            Tòa Nhà
          </Text>
          <DropDownPicker
            listMode="SCROLLVIEW"
            zIndex={3000}
            zIndexInverse={1000}
            style={{borderColor: '#c2c2c2'}}
            open={open3}
            value={chontoanha}
            items={items}
            setOpen={setOpen3}
            setValue={onChangechontoanha}
            setItems={setItems}
            placeholder="Chọn Tòa Nhà"
            dropDownDirection="BOTTOM"
          />
          <Text style={{color: 'red'}}>
            {isValidchontoanha ? '' : 'Vui lòng chọn tòa nhà '}
          </Text>
        </View>
        {/* chọn phòng  */}
        <View style={{width: '100%'}}>
          <Text style={{fontSize: 20, color: '#345173', fontWeight: '500'}}>
            Phòng
          </Text>
          <DropDownPicker
            listMode="SCROLLVIEW"
            style={{borderColor: '#c2c2c2'}}
            open={open4}
            value={chonphong}
            items={items2}
            setOpen={setOpen4}
            setValue={onChangechonphong}
            setItems={setItems2}
            placeholder="Chọn Phòng"
            dropDownDirection="BOTTOM"
            zIndex={2000}
            zIndexInverse={2000}
          />
          <Text style={{color: 'red'}}>
            {isValidchonphong ? '' : 'Vui lòng chọn phòng '}
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => {
              verifyTK();
              verifyTGV();
              verifychonphong();
              verifyDatetime();
              verifychontoanha();
              Savehandler();
            }}
            style={{
              width: '40%',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              padding: 15,
              right: 0,
              marginTop: 15,
              borderRadius: 10,
              backgroundColor: '#ff9434',
              borderColor: '#c2c2c2',
            }}>
            <FontAwesome
              name="save"
              size={20}
              style={{color: 'white'}}></FontAwesome>
            <Text style={{fontSize: 20, marginLeft: 15, color: 'white'}}>
              LƯU
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
