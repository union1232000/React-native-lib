import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {user} from '../Redux/Setting/Token';
import {useDispatch, useSelector} from 'react-redux';
import Calender from './Calender';
import Header from './Header';
import Icon from './icon';
import Time from './Time';
import {get_buildingaction} from '../Redux/Action/Getbuilding';
import createclass from '../Redux/Action/Createclassaction';

export default props => {
  const createState = useSelector(b => b.Createclassreducers.response);
  const dispatch = useDispatch();
  const getbuildingstate = useSelector(c => c.Getbuildingreducers.response);
  const [buildingState, setBuildingState] = useState([]);
  const [buildingChoosen, setbuldingChoosen] = useState([]);
  const [courseId, setcourseId] = useState(props.route.params.courseId);
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

  // lấy tòa nhà
  useEffect(() => {
    dispatch(get_buildingaction());
  }, []);

  useEffect(() => {
    if (getbuildingstate?.data) {
      const listBuilding = [];
      getbuildingstate.data.map((item, index) => {
        listBuilding.push({label: item.buildingName, value: item._id});
      });
      setBuildingState(listBuilding);
    }
  }, [getbuildingstate]);
  const [open3, setOpen3] = useState(false);
  const [items, setItems] = useState([]);

  const toggleBuilding = () => {
    setOpen3(!open3);
  };
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
  const toogleRoom = () => {
    setOpen4(!open4)
  }

  const [items2, setItems2] = useState([]);
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
    if (chontoanha !== '') {
      let obj = getbuildingstate?.data.find(o => o._id === chontoanha);
      let listroom = [];
      obj.room.map((item, index) => {
        listroom.push({
          label: item.roomName,
          value: item._id,
        });
      });
      setbuldingChoosen(listroom);
    }
  }, [chontoanha]);

  //  Nút lưu API tạo lớp
  useEffect(() => {
    setDate2(date);
    setDate3(date);
  }, [date]);

  const Savehandler = () => {
    if (
      tenbuoihoc == '' ||
      tengiangvien == '' ||
      date == '' ||
      date2 == '' ||
      date3 == '' ||
      chontoanha == '' ||
      chonphong == ''
    ) {
      Alert.alert('Tạo mới khóa học không thành công');
    } else {
      dispatch(
        createclass(
          courseId,
          tenbuoihoc,
          tengiangvien,
          date,
          date2,
          date3,
          chontoanha,
          chonphong,
        ),
      );
    }
  };
  useEffect(() => {
    if (createState?.resultCode == 1) {
      Alert.alert('Thông Báo', 'Tạo mới buổi học thành công', [
        {
          Text: 'OK',
          onPress: () =>
            props.navigation.navigate('Manager', {
              courseId: props.route.params.courseId,
            }),
        },
      ]);
    }
  }, [createState]);

  return (
    <ScrollView
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
      }}>
      <Header
        title="TẠO MỚI BUỔI HỌC"
        isRightDisable={true}
        isBack={true}
        isborderDisable={true}
        {...props}
        onClick={() => {
          props.navigation.navigate('Manager');
        }}
      />
      {/* Tên buổi học  */}

      <View style={{padding: 10}}>
        <View View style={{width: '100%'}}>
          <Text
            style={{
              color: '#345173',
              fontSize: 22,
              fontWeight: 'bold',
              paddingBottom: 5,
            }}>
            Tên buổi học{' '}
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
              borderRadius: 8,
              padding: 10,
            }}
            placeholder="Nhập tên buổi học"></TextInput>
          <Text style={{color: 'red', fontStyle: 'italic', fontSize: 15}}>
            {isValidtenbuoihoc ? '' : 'Tên buổi học không thể để trống'}
          </Text>
        </View>
        {/* Giảng viên  */}
        <View View style={{width: '100%'}}>
          <Text
            style={{
              color: '#345173',
              fontSize: 22,
              fontWeight: 'bold',
              paddingBottom: 5,
            }}>
            Tên giảng viên
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
              borderRadius: 8,
              padding: 10,
            }}
            placeholder="Nhập tên giảng viên"></TextInput>
          <Text style={{color: 'red', fontStyle: 'italic', fontSize: 15}}>
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
          <View style={{width: '48%'}}>
            <Text
              style={{
                color: '#345173',
                fontSize: 22,
                fontWeight: 'bold',
                paddingBottom: 5,
              }}>
              Chọn ngày
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
            width: '100%',
            marginTop: 10,
          }}>
          {/* Chọn giờ bắt đầu  */}
          <View style={{width: '48%'}}>
            <Text
              style={{
                color: '#345173',
                fontSize: 22,
                fontWeight: 'bold',
                paddingBottom: 5,
              }}>
              Chọn giờ bắt đầu
            </Text>
            <Time onPressSetTime={setDate2} time={date2} />
          </View>

          {/* chọn giờ kết thúc  */}
          <View style={{width: '48%'}}>
            <Text
              style={{
                color: '#345173',
                fontSize: 22,
                fontWeight: 'bold',
                paddingBottom: 5,
              }}>
              Chọn giờ kết thúc
            </Text>
            <Time onPressSetTime={setDate3} time={date3} />
          </View>
        </View>
        <Text style={{color: 'red', fontStyle: 'italic', fontSize: 15}}>
          {isValidtime ? '' : 'Giờ kết thúc không được bé hơn giờ bắt đầu'}
        </Text>
        {/* chọn tòa nhà  */}
        <View style={{width: '100%'}}>
          <Text
            style={{
              fontSize: 22,
              color: '#345173',
              fontWeight: 'bold',
              paddingBottom: 5,
            }}>
            Tòa nhà
          </Text>
          <DropDownPicker
            listMode="SCROLLVIEW"
            zIndex={3000}
            zIndexInverse={1000}
            style={{borderColor: '#c2c2c2'}}
            open={open3}
            value={chontoanha}
            items={buildingState}
            setOpen={setOpen3}
            setValue={onChangechontoanha}
            setItems={setItems}
            placeholderStyle={{
              color: 'grey',
            }}
            placeholder="Chọn Tòa Nhà"
            dropDownDirection="BOTTOM"
            ArrowDownIconComponent={({style}) => (
              <Icon toggle={toggleBuilding} isUp style={style} />
            )}
            ArrowUpIconComponent={({style}) => (
              <Icon toggle={toggleBuilding} isDown style={style} />
            )}
          />
        </View>
        <Text style={{color: 'red', fontStyle: 'italic', fontSize: 15}}>
          {isValidchontoanha ? '' : 'Vui lòng chọn tòa nhà '}
        </Text>
        {/* chọn phòng  */}
        <View style={{width: '100%'}}>
          <Text
            style={{
              fontSize: 22,
              color: '#345173',
              fontWeight: 'bold',
              paddingBottom: 5,
            }}>
            Phòng
          </Text>
          <DropDownPicker
            listMode="SCROLLVIEW"
            style={{borderColor: '#c2c2c2'}}
            open={open4}
            value={chonphong}
            items={buildingChoosen}
            setOpen={setOpen4}
            setValue={onChangechonphong}
            setItems={setItems2}
            placeholder="Chọn Phòng"
            placeholderStyle={{
              color: 'grey',
            }}
            dropDownDirection="BOTTOM"
            zIndex={2000}
            zIndexInverse={2000}
            ArrowDownIconComponent={({style}) => (
              <Icon toggle={toogleRoom} isUp style={style} />
            )}
            ArrowUpIconComponent={({style}) => (
              <Icon toggle={toogleRoom} isDown style={style} />
            )}
          />
        </View>
        <Text style={{color: 'red', fontStyle: 'italic', fontSize: 15}}>
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
              Savehandler();
            }}
            style={{
              width: '32%',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              padding: 10,
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
