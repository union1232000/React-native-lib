import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default Header = (props, {navigation}) => {
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
          style={{position: 'absolute', left: 0, padding: 10}}
          onPress={() => props.navigation.openDrawer()}>
          <FontAwesome
            name="bars"
            size={25}
            style={{left: 0, color: '#d4d5da'}}></FontAwesome>
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
          style={{position: 'absolute', right: 0, padding: 10}}
          onPress={() => props.navigation.navigate('Create')}>
          <Ionicons
            name="add"
            size={30}
            style={{right: 0, color: '#d4d5da'}}></Ionicons>
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
        {' '}
        {props.title}{' '}
      </Text>
    </View>
  );
};
