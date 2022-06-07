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
import {useDispatch, useSelector} from 'react-redux';
import CreateAction from '../Redux/Action/CreateAction';
import {get_buildingaction} from '../Redux/Action/Getbuilding';
import {user} from '../Redux/Setting/Token';
import Calender from './Calender';
import Header from './Header';
import Icon from './icon';

export default props => {
  const createState = useSelector(b => b.Createreducers.response);
  const dispatch = useDispatch();
  const [buildingState, setBuildingState] = useState([]);
  const [buildingChoosen, setbuldingChoosen] = useState([]);

  const getbuildingstate = useSelector(c => c.Getbuildingreducers.response);
  const [chontoanha, setChontoanha] = useState('');
  const [isValidchontoanha, setValidchontoanha] = useState(true);
  // Phòng
  const [open4, setOpen4] = useState(false);
  const [items2, setItems2] = useState([]);
  const [chonphong, onChangechonphong] = useState('');
  const [isValidchonphong, setValidchonphong] = useState(true);

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

  // phòng
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
  // nút lưu API
  const Savehandler = () => {
    dispatch(CreateAction(TK, TGV, date, date2, chontoanha, chonphong));
  };
  useEffect(() => {
    if (createState?.resultCode) {
      if (createState?.resultCode == 1) {
        Alert.alert('Thông Báo', 'Tạo mới khóa học thành công', [
          {Text: 'OK', onPress: () => props.navigation.goBack()},
        ]);
      } else {
        Alert.alert('Tạo mới khóa học không thành công');
      }
    }
  }, [createState]);

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
    if (date2 < date) {
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

  const toggleBuilding = () => {
    setOpen3(!open3);
  };
  const verifychontoanha = () => {
    if (chontoanha == '') {
      setValidchontoanha(false);
    } else {
      setValidchontoanha(true);
    }
  };

  const verifychonphong = () => {
    if (chonphong == '') {
      setValidchonphong(false);
    } else {
      setValidchonphong(true);
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        title="TẠO MỚI KHÓA HỌC"
        isRightDisable={true}
        isBack={true}
        {...props}
        onClick={() => {
          props.navigation.navigate('Home');
        }}
      />
      {/* Tên Khóa  */}
      <View style={{padding: 10}}>
        <View View style={{width: '100%'}}>
          <Text
            style={{
              color: '#345173',
              fontSize: 22,
              fontWeight: 'bold',
              paddingBottom: 5,
            }}>
            Tên khóa
          </Text>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#c2c2c2',
              borderRadius: 8,
              padding: 10,
            }}
            onChangeText={text => {
              onChangeTK(text);
            }}
            value={TK}
            placeholder="Nhập tên khóa học"></TextInput>
          <Text style={{color: 'red', fontStyle: 'italic', fontSize: 15}}>
            {isValidTK ? '' : 'Tên khóa không được bỏ trống '}
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
            Giảng viên
          </Text>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#c2c2c2',
              borderRadius: 8,
              padding: 10,
            }}
            onChangeText={text => {
              onChangeTGV(text);
            }}
            value={TGV}
            placeholder="Nhập tên giảng viên"></TextInput>
          <Text style={{color: 'red', fontStyle: 'italic', fontSize: 15}}>
            {isValidTGV ? '' : 'Tên giảng viên không thể để trống'}
          </Text>
        </View>
        {/* date time  */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          {/* Từ Ngày  */}
          <View style={{width: '48%'}}>
            <Text
              style={{
                color: '#345173',
                fontSize: 20,
                fontWeight: 'bold',
                paddingBottom: 5,
              }}>
              Từ ngày
            </Text>
            <Calender onPressSetDateTime={setDate} dateTime={date} />
          </View>
          {/* Đến Ngày  */}
          <View style={{width: '48%'}}>
            <Text
              style={{
                color: '#345173',
                fontSize: 20,
                fontWeight: 'bold',
                paddingBottom: 5,
              }}>
              Đến ngày
            </Text>
            <Calender onPressSetDateTime={setDate2} dateTime={date2} />
          </View>
        </View>
        <Text style={{color: 'red', fontStyle: 'italic', fontSize: 15}}>
          {isValidDatime ? '' : 'ngày bắt đầu không được sau ngày kết thúc'}
        </Text>
        {/* chọn tòa nhà  */}
        <View style={{width: '100%'}}>
          <Text
            style={{
              fontSize: 20,
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
            setValue={setChontoanha}
            setItems={setItems}
            placeholderStyle={{
              color: 'grey',
            }}
            placeholder="Chọn tòa nhà"
            dropDownDirection="BOTTOM"
            ArrowDownIconComponent={({style}) => (
              <Icon toggle={toggleBuilding} isUp style={style} />
            )}
            ArrowUpIconComponent={({style}) => (
              <Icon toggle={toggleBuilding} isDown style={style} />
            )}
          />
          <Text style={{color: 'red', fontStyle: 'italic', fontSize: 15}}>
            {isValidchontoanha ? '' : 'Vui lòng chọn tòa nhà '}
          </Text>
        </View>
        {/* chọn phòng  */}
        <View style={{width: '100%'}}>
          <Text
            style={{
              fontSize: 20,
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
            searchPlaceholderTextColor={'#345173'}
            placeholder="Chọn phòng"
            dropDownDirection="BOTTOM"
            placeholderStyle={{
              color: 'grey',
            }}
            zIndex={2000}
            zIndexInverse={2000}
            ArrowDownIconComponent={({style}) => (
              <Icon toggle={toggleBuilding} isUp style={style} />
            )}
            ArrowUpIconComponent={({style}) => (
              <Icon toggle={toggleBuilding} isDown style={style} />
            )}
          />
          <Text style={{color: 'red', fontStyle: 'italic', fontSize: 15}}>
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
