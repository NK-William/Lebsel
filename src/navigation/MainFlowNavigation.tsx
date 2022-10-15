import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeFlowNavigation from "./EmployeeFlowNavigation";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import SplashScreen from "../screens/SplashScreen";
import ErrorHandlerScreen from "../screens/ErrorHandlerScreen";
import AdminFlowNavigation from "./AdminFlowNavigation";
import database from '@react-native-firebase/database';

const Stack = createNativeStackNavigator();

const MainFlowNavigation = ({ user } : any) => {
  const [determinePage, setDeterminePage] = useState({
    isAdmin: false,
    isEmployee: false,
    pageInitialized: false,
    isError: false,
  });

  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      if (!determinePage.pageInitialized) {
        console.log("Query");
        database()
          .ref(`users/admins/${user.uid}`)
          .once('value')
          .then((snapshot) => {
            if (snapshot.exists()) {
              setDeterminePage({
                ...determinePage,
                isAdmin: true,
                isEmployee: false,
                pageInitialized: true,
                isError: false,
              });
            } else {
              setDeterminePage({
                ...determinePage,
                isAdmin: false,
                isEmployee: true,
                pageInitialized: true,
                isError: false,
              });
            }
          })
          .catch((error : any) => {
            console.error("********************************* ", error);
            //alert("Opps...Something went wrong!");
            setDeterminePage({
              ...determinePage,
              isAdmin: false,
              isEmployee: false,
              pageInitialized: true,
              isError: true,
            });
          });
      }
    })();
  }, [determinePage]);

  if (!determinePage.isAdmin && !determinePage.pageInitialized) {
    return (
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  } else if (determinePage.pageInitialized && determinePage.isError) {
    console.log("******************************** in error statement");
    return <ErrorHandlerScreen/>
  } else if (determinePage.isAdmin) {
    console.log("****************** admin pages");
    return <AdminFlowNavigation />;
  } else if (determinePage.isEmployee) {
    console.log("****************** employee pages");
    return <EmployeeFlowNavigation />;
  } else {
    // display error page
    console.log("****************** error page");
    return <ErrorHandlerScreen />;
  }
};

export default MainFlowNavigation;
