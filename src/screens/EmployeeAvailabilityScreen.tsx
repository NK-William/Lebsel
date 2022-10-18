import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { PrimaryColor } from "../resources/colors";
import DayBubble from "../components/DayBubble";

const EmployeeAvailabilityScreen = () => {
  const [radioButtons, setRadioButtons] = useState({
    mondayWeekly: false,
    tuesdayWeekly: false,
    wednesdayWeekly: false,
    thursdayWeekly: false,
    fridayWeekly: false,
    saturdayWeekly: false,
    sundayWeekly: false,
  });

  const mondayRadioBtnName = radioButtons.mondayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const tuesdayRadioBtnName = radioButtons.tuesdayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const wednesdayRadioBtnName = radioButtons.wednesdayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const thursdayRadioBtnName = radioButtons.thursdayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const fridayRadioBtnName = radioButtons.fridayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const saturdayRadioBtnName = radioButtons.saturdayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const sundayRadioBtnName = radioButtons.sundayWeekly
    ? "radio-button-on"
    : "radio-button-off";

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Choose your availability</Text>
      <View style={styles.gridView}>
        <View style={styles.gridRowView}>
          <DayBubble
            bubbleRightColor="yellow"
            day="Monday"
            dayRadioBtnName={mondayRadioBtnName}
            setRadioButtons={() =>
              setRadioButtons({
                ...radioButtons,
                mondayWeekly: !radioButtons.mondayWeekly,
              })
            }
          />
          <View style={styles.space} />
          <DayBubble
            bubbleRightColor="pink"
            day="Tuesday"
            dayRadioBtnName={tuesdayRadioBtnName}
            setRadioButtons={() =>
              setRadioButtons({
                ...radioButtons,
                tuesdayWeekly: !radioButtons.tuesdayWeekly,
              })
            }
          />
        </View>
        <View style={styles.gridRowView}>
          <DayBubble
            bubbleRightColor="green"
            day="Wednesday"
            dayRadioBtnName={wednesdayRadioBtnName}
            setRadioButtons={() =>
              setRadioButtons({
                ...radioButtons,
                wednesdayWeekly: !radioButtons.wednesdayWeekly,
              })
            }
          />
          <View style={styles.space} />
          <DayBubble
            bubbleRightColor="orange"
            day="Thursday"
            dayRadioBtnName={thursdayRadioBtnName}
            setRadioButtons={() =>
              setRadioButtons({
                ...radioButtons,
                thursdayWeekly: !radioButtons.thursdayWeekly,
              })
            }
          />
        </View>
        <View style={styles.gridRowView}>
          <DayBubble
            bubbleRightColor="blue"
            day="Friday"
            dayRadioBtnName={fridayRadioBtnName}
            setRadioButtons={() =>
              setRadioButtons({
                ...radioButtons,
                fridayWeekly: !radioButtons.fridayWeekly,
              })
            }
          />
          <View style={styles.space} />
          <DayBubble
            bubbleRightColor="purple"
            day="Saturday"
            dayRadioBtnName={saturdayRadioBtnName}
            setRadioButtons={() =>
              setRadioButtons({
                ...radioButtons,
                saturdayWeekly: !radioButtons.saturdayWeekly,
              })
            }
          />
        </View>
        <View style={styles.gridRowView}>
          <DayBubble
            bubbleRightColor="red"
            day="Sunday"
            dayRadioBtnName={sundayRadioBtnName}
            setRadioButtons={() =>
              setRadioButtons({
                ...radioButtons,
                sundayWeekly: !radioButtons.sundayWeekly,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default EmployeeAvailabilityScreen;

const styles = StyleSheet.create({
  titleText: {
    alignSelf: "center",
    color: PrimaryColor,
    fontWeight: "bold",
    margin: 8,
    fontSize: 16,
  },
  space: { marginHorizontal: 8 },
  container: { flex: 1 },
  gridRowView: {
    flexDirection: "row",
    marginVertical: 8,
  },
  radioButton: {},
  gridView: {
    marginHorizontal: 8,
    marginBottom: 18,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
