import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "react-native-linear-gradient";
import { PrimaryColor, AccentColor } from "../resources/colors";
import Icon  from "react-native-vector-icons/Ionicons";

interface bubbleType {
    bubbleRightColor: string,
    day: string,
    dayRadioBtnName: string,
    setRadioButtons:  () => void 
}

const DayBubble = ({
  bubbleRightColor,
  day,
  dayRadioBtnName,
  setRadioButtons,
} : bubbleType) => {
  return (
    <LinearGradient
      style={styles.dayBubble}
      colors={[PrimaryColor, bubbleRightColor]}
      start={{ x: 0.4, y: 0.4 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.dayText}>{day}</Text>
      <View style={styles.weeklySelectView}>
        <Text style={styles.weeklyText}>Weekly</Text>
        <TouchableOpacity onPress={() => setRadioButtons()}>
          <Icon name={dayRadioBtnName} size={16} color={AccentColor} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default DayBubble;

const styles = StyleSheet.create({
  dayBubble: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 150,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  dayText: { color: "white", fontSize: 18 },
  weeklySelectView: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    marginBottom: 4,
  },
  weeklyText: {
    color: "white",
    fontSize: 10,
    marginRight: 2,
  },
});
