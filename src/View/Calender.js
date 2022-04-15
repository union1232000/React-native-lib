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
    props.onPressSetDateTime(date);
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
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#345173',
          }}>
          {moment(props.dateTime).format('L')}
        </Text>
        <FontAwesome
          name="caret-down"
          style={{
            fontSize: 25,
            marginLeft: 10,
          }}></FontAwesome>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};
