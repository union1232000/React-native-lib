import React from 'react';
import {useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
import {MenuProvider} from 'react-native-popup-menu';
import RootComponent from './src/View/Index';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <MenuProvider>
        <RootComponent />
      </MenuProvider>
    </Provider>
  );
};

export default App;
