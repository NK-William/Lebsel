/* eslint-disable prettier/prettier */
import React from 'react';
import AuthenticationFlowNavigation from './src/navigation/AuthenticationFlowNavigation';
import { NavigationContainer } from '@react-navigation/native';
import {
  // SafeAreaView,
  // StatusBar,
} from 'react-native';

const App = () => {
  return (
    // <SafeAreaView>
    //   <StatusBar/>
    <NavigationContainer>
      <AuthenticationFlowNavigation />
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
