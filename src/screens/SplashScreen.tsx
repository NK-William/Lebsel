import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#201C31",
      }}
    >
      <ActivityIndicator
        style={{ alignSelf: "center", marginBottom: 25 }}
        size="large"
        color="#0DF6E3"
        animating={true}
      />
      <Text style={{ color: "#0DF6E3", alignSelf: "center", fontSize: 20 }}>
        Loading
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
