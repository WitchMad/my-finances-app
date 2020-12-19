import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './pages/Home';
import Debts from './pages/Debts';
import Earns from './pages/Earns';
import Settings from './pages/Settings';

const Tabs = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Principal') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Ganhos') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Gastos') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Configurações') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ffbb00',
        inactiveTintColor: '#999',
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen name="Principal" component={Home} />
      <Tabs.Screen name="Ganhos" component={Earns} />
      <Tabs.Screen name="Gastos" component={Debts} />
      <Tabs.Screen name="Configurações" component={Settings} />
    </Tabs.Navigator>
  );
};

export default Routes;
