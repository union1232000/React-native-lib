import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Icon = props => {
  const [isUp, setIsUp] = useState(props.isUp ? true : false);
  const [isDown, setIsDown] = useState(props.isDown ? true : false);
  return (
    <>
      {isUp ? (
        <TouchableOpacity
          onPress={() => {
            props.toggle();
          }}>
          <FontAwesome
            name="caret-down"
            style={{
              fontSize: 25,
              right: 10,
            }}></FontAwesome>
        </TouchableOpacity>
      ) : null}
      {isDown ? (
        <TouchableOpacity
          onPress={() => {
            props.toggle();
          }}>
          <FontAwesome
            name="caret-up"
            style={{
              fontSize: 25,
              right: 10,
            }}></FontAwesome>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default Icon;

const styles = StyleSheet.create({});
