import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AdminHomeScreen from '../screens/AdminHomeScreen';
import CheckInAndOutsScreen from '../screens/CheckInAndOutsScreen';
import AvailabilityScreen from '../screens/AvailabilityScreen';
import TimeSheetsScreen from '../screens/TimeSheetsScreen';
import UniformRecordsScreen from '../screens/UniformRecordsScreen';
import PromotersScreen from '../screens/PromotersScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Ionicons} from '@expo/vector-icons';
import {PrimaryColor} from '../resources/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="AdminHome"
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Ionicons
                name="person"
                color={focused ? PrimaryColor : 'grey'}
                size={25}
              />
              <Text
                style={{
                  color: focused ? PrimaryColor : 'grey',
                  ...styles.tabLabel,
                }}>
                profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AdminHome"
        component={AdminHomeScreen}
        options={{
          headerStyle: {backgroundColor: '#201C31'},
          headerTitleStyle: {color: 'white'},
          tabBarIcon: ({focused}) => (
            <View>
              <Ionicons
                name="home"
                color={focused ? PrimaryColor : 'grey'}
                size={25}
              />
              <Text
                style={{
                  color: focused ? PrimaryColor : 'grey',
                  ...styles.tabLabel,
                }}>
                home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Ionicons
                name="settings"
                color={focused ? PrimaryColor : 'grey'}
                size={25}
              />
              <Text
                style={{
                  color: focused ? PrimaryColor : 'grey',
                  marginLeft: -6,
                  ...styles.tabLabel,
                }}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AdminFlowNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabNav">
      <Stack.Screen
        name="BottomTabNav"
        component={BottomTabNav}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Check in and outs" component={CheckInAndOutsScreen} />
      <Stack.Screen name="Availability" component={AvailabilityScreen} />
      <Stack.Screen name="Timesheets" component={TimeSheetsScreen} />
      <Stack.Screen name="Uniform records" component={UniformRecordsScreen} />
      <Stack.Screen name="Promoters" component={PromotersScreen} />
    </Stack.Navigator>
  );
};

export default AdminFlowNavigation;

const styles = StyleSheet.create({
  tabLabel: {fontSize: 10, alignSelf: 'center'},
});
