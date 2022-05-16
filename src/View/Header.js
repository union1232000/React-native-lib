import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default Header = props => {
  const [isLeftDisalbe, setIsLeftDisable] = useState(
    props.isLeftDisable ? false : true,
  );
  const [isRightDisalbe, setIsRightDisable] = useState(
    props.isRightDisable ? false : true,
  );
  const [isBack, setIsBack] = useState(props.isBack ? true : false);
  return (
    <View
      style={{
        width: '100%',
        borderWidth: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c2c2c2',
      }}>
      {isLeftDisalbe && !isBack && (
        <TouchableOpacity
          style={{position: 'absolute', left: 0, padding: 5}}
          onPress={() => props.navigation.openDrawer()}>
          <Image
            source={require('../Images/ic_menu.png')}
            style={{resizeMode: 'contain', height: 30}}></Image>
        </TouchableOpacity>
      )}
      {isBack && (
        <TouchableOpacity
          style={{position: 'absolute', left: 0, padding: 10}}
          onPress={() => props.navigation.goBack()}>
          <Ionicons
            name="md-chevron-back"
            size={30}
            style={{left: 0, color: '#d4d5da'}}></Ionicons>
        </TouchableOpacity>
      )}
      {isRightDisalbe && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: -11,
          }}
          onPress={() => props.onClick()}>
          <Image
            source={require('../Images/ic_add.png')}
            style={{
              resizeMode: 'contain',
              height: 20,
              tintColor: '#d4d5da',
            }}></Image>
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#345173',
          position: 'absolute',
          fontSize: 25,
        }}>
        {props.title}
      </Text>
    </View>
  );
};
