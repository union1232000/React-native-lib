import React, {Component, useState, useEffect} from 'react';
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
import Time from './Time';
import Calender from './Calender';

export default ({navigation}, props) => {
  // tên buổi học
  const [tenbuoihoc, onChangetenbuoihoc] = useState('');
  const [isValidtenbuoihoc, setValidtenbuoihoc] = useState(true);
  const verifytenbuoihoc = () => {
    if (tenbuoihoc == '') {
      setValidtenbuoihoc(false);
    } else {
      setValidtenbuoihoc(true);
    }
  };
  //tên giảng viên
  const [tengiangvien, onChangetengiangvien] = useState('');
  const [isValidtengiangvien, setValidtengiangvien] = useState(true);
  const verifytengiangvien = () => {
    if (tengiangvien == '') {
      setValidtengiangvien(false);
    } else {
      setValidtengiangvien(true);
    }
  };
  // từ ngày
  const [date, setDate] = useState(new Date());
  // chọn giờ bắt đầu
  const [date2, setDate2] = useState(new Date());
  //Chọn giờ kết thúc
  const [date3, setDate3] = useState(new Date());
  const [time, onChangetime] = useState('');
  const [isValidtime, setValidtime] = useState(true);
  const verifytime = () => {
    if (date3 < date2) {
      setValidtime(false);
    } else {
      setValidtime(true);
    }
  };
  // Tòa nhà
  const [open3, setOpen3] = useState(false);
  const [value, setValue] = useState(null);
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
  const [value2, setValue2] = useState(null);
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
  useEffect(() => {
    setDate2(date);
    setDate3(date);
  }, [date]);

  return (
    <ScrollView style={{flex: 1, width: '100%'}}>
      <Header
        title="TẠO MỚI BUỔI HỌC"
        isRightDisable={true}
        isBack={true}
        navigation={navigation}
      />
      {/* Tên buổi học  */}
      <View style={{padding: 5}}>
        <View View style={{width: '100%'}}>
          <Text style={{color: '#345173', fontSize: 22, fontWeight: 'bold'}}>
            Tên Buổi Học{' '}
          </Text>
          <TextInput
            value={tenbuoihoc}
            onChangeText={value => {
              onChangetenbuoihoc(value);
            }}
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#c2c2c2',
              borderRadius: 5,
              padding: 15,
            }}
            placeholder="Nhập tên buổi học"></TextInput>
          <Text style={{color: 'red'}}>
            {isValidtenbuoihoc ? '' : 'Tên buổi học không thể để trống'}
          </Text>
        </View>
        {/* Giảng viên  */}
        <View View style={{width: '100%'}}>
          <Text style={{color: '#345173', fontSize: 22, fontWeight: 'bold'}}>
            Tên Giảng viên
          </Text>
          <TextInput
            value={tengiangvien}
            onChangeText={value => {
              onChangetengiangvien(value);
            }}
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#c2c2c2',
              borderRadius: 5,
              padding: 15,
            }}
            placeholder="Nhập tên giảng viên"></TextInput>
          <Text style={{color: 'red'}}>
            {isValidtengiangvien ? '' : 'Tên giảng viên không thể để trống'}
          </Text>
        </View>
        {/* date time  */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {/* Chọn Ngày  */}
          <View>
            <Text style={{color: '#345173', fontSize: 20, fontWeight: '500'}}>
              Chọn Ngày
            </Text>
            <Calender onPressSetDateTime={setDate} dateTime={date} />
          </View>
        </View>
        {/* Chọn giờ */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {/* Chọn giờ bắt đầu  */}
          <View>
            <Text style={{color: '#345173', fontSize: 20, fontWeight: '500'}}>
              Chọn giờ bắt đầu
            </Text>
            <Time onPressSetTime={setDate2} time={date2} />
          </View>

          {/* chọn giờ kết thúc  */}
          <View>
            <Text style={{color: '#345173', fontSize: 20, fontWeight: '500'}}>
              {' '}
              Chọn giờ kết thúc
            </Text>
            <Time onPressSetTime={setDate3} time={date3} />
          </View>
        </View>
        <Text style={{color: 'red'}}>
          {isValidtime ? '' : 'Giờ kết thúc không được bé hơn giờ bắt đầu'}
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
        </View>
        <Text style={{color: 'red'}}>
          {isValidchontoanha ? '' : 'Vui lòng chọn tòa nhà '}
        </Text>
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
        </View>
        <Text style={{color: 'red'}}>
          {isValidchonphong ? '' : 'Vui lòng chọn phòng '}
        </Text>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => {
              verifytenbuoihoc();
              verifytengiangvien();
              verifytime();
              verifychontoanha();
              verifychonphong();
            }}
            style={{
              width: '40%',
              // position: 'absolute',
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
