import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, AsyncStorage} from 'react-native';

import {ThemeProvider} from 'styled-components';

import light from './themes/light';
import dark from './themes/dark';

import Routes from './routes';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    async function loadTheme() {
      const theme_storage = await AsyncStorage.getItem('theme');
      if (theme_storage) {
        setTheme(theme_storage);
      } else {
        AsyncStorage.setItem('theme', 'light');
      }
    }
    loadTheme();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <StatusBar barStyle="light-content" backgroundColor="#ffbb00" />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
