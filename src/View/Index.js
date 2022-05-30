import React, {Component, useState} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import 'react-native-gesture-handler';
import Login from '../View/Login';
import Home from '../View/Home';
import Create from './Create';
import Manager from './Manager';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerStyle from './drawerStyle';
import CreateManger from './CreateManger';
import Info from './Info';
import Editcourse from './Editcourse';
import Editclass from './Editclass';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerStyle {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: 0.8 * windowWidth},
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Create" component={Create} />
      <Drawer.Screen name="Manager" component={Manager} />
      <Drawer.Screen name="CreateManger" component={CreateManger} />
      <Drawer.Screen name="Info" component={Info} />
      <Drawer.Screen name="Editcourse" component={Editcourse} />
      <Drawer.Screen name="Editclass" component={Editclass} />
    </Drawer.Navigator>
  );
};

export default RootComponent = function (props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
