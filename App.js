import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, NavigationContainer  } from '@react-navigation/native';

const navigator = createStackNavigator();

export default ()=>(
    <NavigationContainer>
      <navigator.Navigator>
        <navigator.Screen name="Search Screen" component={SearchScreen} /> 
      </navigator.Navigator>
    </NavigationContainer>
)