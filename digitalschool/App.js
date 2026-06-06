import 'react-native-gesture-handler';
import React from 'react';
import {NaviagtionContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <NaviagtionContainer>
      <BottomTabNavigator/>
    </NaviagtionContainer>
  );
}
