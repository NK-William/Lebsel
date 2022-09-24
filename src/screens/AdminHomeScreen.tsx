import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const AdminHomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        onPress={() =>
          auth()
            .signOut()
            .then(() => console.log('User signed out!'))
        }>
        <Text>sign out from admin</Text>
      </Pressable>
    </View>
  );
};

export default AdminHomeScreen;

const styles = StyleSheet.create({});
