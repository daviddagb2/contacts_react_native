import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {Text} from 'react-native';

const AppNavContainer = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Text>Hola ke ase</Text>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavContainer;
