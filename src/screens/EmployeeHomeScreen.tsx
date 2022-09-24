import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

const EmployeeHomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Pressable onPress={() => auth()
        .signOut()
        .then(() => console.log('User signed out!'))}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  )
}

export default EmployeeHomeScreen

const styles = StyleSheet.create({})