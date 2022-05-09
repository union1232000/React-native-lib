import React, {Component, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
export default props => {
  // Từ Ngày
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    props.onPressSetTime(date);
    hideDatePicker();
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          showDatePicker();
        }}
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          width: '100%',
          padding: 15,
          borderRadius: 5,
          borderColor: '#c2c2c2',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#345173',
          }}>
          {moment(props.time).format('HH:mm')}
        </Text>
        <FontAwesome
          name="caret-down"
          style={{
            fontSize: 25,
            right: 10,
            position: 'absolute',
          }}></FontAwesome>
      </TouchableOpacity>
      <DateTimePickerModal
        date={props.time}
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};
