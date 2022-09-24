/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import AuthenticationFlowNavigation from './src/navigation/AuthenticationFlowNavigation';
import { NavigationContainer } from '@react-navigation/native';
import {
  // SafeAreaView,
  // StatusBar,
} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import EmployeeHomeScreen from './src/screens/EmployeeHomeScreen';

const App = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

useEffect(() => {
  auth().onAuthStateChanged(userState => {
    setUser(userState);
  });
}, []);

  return (
    // <SafeAreaView>
    //   <StatusBar/>
    <NavigationContainer>
      { user ? <EmployeeHomeScreen/> : <AuthenticationFlowNavigation />}
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
