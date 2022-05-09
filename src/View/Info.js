import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Header from './Header';
import Home from './Home';
export default ({navigation}, props) => {
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View style={{width: '100%'}}>
        <Header
          title="THÔNG TIN ỨNG DỤNG"
          isRightDisable={true}
          isBack={true}
          navigation={navigation}
        />
      </View>
      <View style={{padding: 10}}>
        <View
          style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../Images/ic_fis.png')}
            style={{height: 150, resizeMode: 'contain'}}></Image>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#345173',
              paddingTop: 15,
            }}>
            FIS INSIGHT APP
          </Text>
          <Text>Phiên bản 1.55.10805</Text>
        </View>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#345173'}}>
            Hướng dẫn sử dụng
          </Text>
          <Text
            style={{
              padding: 5,
              fontSize: 15,
              color: '#345173',
            }}>
            Xem chi tiết
          </Text>
        </View>
        {/* Thông tin liên hệ  */}
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#345173'}}>
            Thông tin liên hệ{' '}
          </Text>
          <Text
            style={{
              padding: 5,
              fontSize: 15,
              color: '#345173',
            }}>
            Duong Ngoc Long Nam
          </Text>
          <Text style={{padding: 5, fontSize: 15, color: '#345173'}}>
            Tầng 2 , Trung tâm TDC HCM ,Tòa nhà FPT Tân Thuận 3, Q7
          </Text>
          <Text style={{padding: 5, fontSize: 15, color: '#345173'}}>
            Phone : (+84) 028.7300.7373/ 84407
          </Text>
          <Text style={{padding: 5, fontSize: 15, color: '#345173'}}>
            {' '}
            Email: namdnl@fpt.com.vn
          </Text>
        </View>
      </View>
    </View>
  );
};
