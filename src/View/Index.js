import React, {Component, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerStyle {...props} />}
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Create" component={Create} />
      <Drawer.Screen name="Manager" component={Manager} />
      <Drawer.Screen name="CreateManager" component={CreateManger} />
      <Drawer.Screen name="Info" component={Info} />
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
