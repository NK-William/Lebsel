import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeHomeScreen from "../screens/EmployeeHomeScreen";
import EmployeeProfileScreen from "../screens/EmployeeProfileScreen";
import EmployeeAvailabilityScreen from "../screens/EmployeeAvailabilityScreen";
import EmployeeCheckInsScreen from "../screens/EmployeeCheckInsScreen";
import EmployeeTimesheetsScreen from "../screens/EmployeeTimesheetsScreen";
import EmployeeSettingsScreen from "../screens/EmployeeSettingsScreen";
import BottomTabContainer from "../components/BottomTabContainer";
import CheckInsScreen from "../components/BottomTabContainer";
import CaptureImageScreen from "../screens/CaptureImageScreen";

const Stack = createNativeStackNavigator();

const EmployeeFlowNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabContainer">
      <Stack.Screen
        name="BottomTabContainer"
        component={BottomTabContainer}
        options={{
          headerStyle: { backgroundColor: "#201C31" },
          headerTitleStyle: { color: "white" },
          title: "Home",
        }}
      />
      <Stack.Screen
        name="EmployeeProfile"
        component={EmployeeProfileScreen}
        options={{
          title: "Profile",
        }}
      />
      <Stack.Screen
        name="EmployeeAvailability"
        component={EmployeeAvailabilityScreen}
        options={{
          title: "Availability",
        }}
      />
      <Stack.Screen
        name="EmployeeCheckIns"
        component={EmployeeCheckInsScreen}
        options={{
          title: "Check ins",
        }}
      />
      <Stack.Screen
        name="CaptureImage"
        component={CaptureImageScreen}
        options={{
          title: "Image",
        }}
      />
      <Stack.Screen
        name="EmployeeTimesheets"
        component={EmployeeTimesheetsScreen}
        options={{
          title: "Timesheets",
        }}
      />
      <Stack.Screen
        name="EmployeeSettings"
        component={EmployeeSettingsScreen}
        options={{
          title: "Settings",
        }}
      />
      <Stack.Screen
        name="CheckIns"
        component={CheckInsScreen}
        options={{
          title: "Check-ins ",
        }}
      />
    </Stack.Navigator>
  );
};

export default EmployeeFlowNavigation;

const styles = StyleSheet.create({});
