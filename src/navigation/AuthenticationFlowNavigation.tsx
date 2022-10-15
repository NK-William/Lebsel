import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthenticationFlowNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: '',
          headerStyle: { backgroundColor: '#201C31' },
          headerTintColor: '#615E67',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationFlowNavigation;