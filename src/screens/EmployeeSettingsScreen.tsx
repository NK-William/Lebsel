import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React from "react";
import auth from '@react-native-firebase/auth';

const EmployeeSettingsScreen = () => {
  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error : any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View></View>
      <Pressable style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default EmployeeSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 24,
  },
  logoutButton: {
    alignSelf: "flex-start",
    backgroundColor: "gray",
    padding: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  logoutText: { color: "white" },
});
