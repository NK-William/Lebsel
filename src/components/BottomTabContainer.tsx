import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { PrimaryColor, AccentColor } from "../resources/colors";
import Icon  from "react-native-vector-icons/Ionicons";
import { TabOptions } from "../resources/Constants/TabOptions";
import EmployeeHomeScreen from "../screens/EmployeeHomeScreen";
import EmployeeProfileScreen from "../screens/EmployeeProfileScreen";
import EmployeeAvailabilityScreen from "../screens/EmployeeAvailabilityScreen";
import EmployeeTimesheetsScreen from "../screens/EmployeeTimesheetsScreen";
import EmployeeSettingsScreen from "../screens/EmployeeSettingsScreen";
import CheckInsScreen from "../screens/CheckInsScreen";

const BottomTabContainer = ({ navigation } : any) => {
  const [item, setItem] = useState(TabOptions.Home);
  navigation.setOptions({ title: item });
  const openPage = (selectedItem : string) => {
    if (selectedItem != item) {
      setItem(selectedItem);
    }
  };
  return (
    <View style={styles.container}>
      {item == TabOptions.Profile ? (
        <EmployeeProfileScreen />
      ) : item == TabOptions.Availability ? (
        <EmployeeAvailabilityScreen />
      ) : item == TabOptions.Timesheets ? (
        <EmployeeTimesheetsScreen />
      ) : item == TabOptions.Settings ? (
        <EmployeeSettingsScreen />
      ) : item == TabOptions.Map ? (
        <CheckInsScreen />
      ) : (
        <EmployeeHomeScreen />
      )}
      {item != TabOptions.Home ? (
        <TouchableOpacity
          onPress={() => openPage(TabOptions.Home)}
          style={styles.navHomeView}
        >
          <Icon name="home" color="white" size={25} />
        </TouchableOpacity>
      ) : null}
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "white",
            height: 18,
            marginTop: -18,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 12,
          }}
        ></View>
        <View style={{ ...styles.bottomTab, ...styles.shadow }}>
          <Pressable
            style={{ alignItems: "center" }}
            onPress={() => openPage(TabOptions.Profile)}
          >
            <Icon
              name="person"
              color={item == TabOptions.Profile ? AccentColor : "grey"}
              size={25}
            />
            <Text
              style={{
                ...styles.tabLabel,
                color: item == TabOptions.Profile ? AccentColor : "grey",
              }}
            >
              Profile
            </Text>
          </Pressable>

          <Pressable
            style={{ alignItems: "center" }}
            onPress={() => openPage(TabOptions.Availability)}
          >
            <Icon
              name="calendar"
              color={item == TabOptions.Availability ? AccentColor : "grey"}
              size={25}
            />
            <Text
              style={{
                ...styles.tabLabel,
                color: item == TabOptions.Availability ? AccentColor : "grey",
              }}
            >
              Availability
            </Text>
          </Pressable>
          <TouchableOpacity
            onPress={() => openPage(TabOptions.Map)}
            style={{ alignSelf: "flex-start", alignItems: "center" }}
          >
            <View
              style={{
                ...styles.shadow,
                ...styles.checkInButton,
              }}
            >
              <Icon name="location" color="white" size={25} />
            </View>
          </TouchableOpacity>
          <Pressable
            style={{ alignItems: "center" }}
            onPress={() => openPage(TabOptions.Timesheets)}
          >
             <Icon
              name="time"
              color={item == TabOptions.Timesheets ? AccentColor : "grey"}
              size={25}
            /> 
            <Text
              style={{
                ...styles.tabLabel,
                color: item == TabOptions.Timesheets ? AccentColor : "grey",
              }}
            >
              Timesheets
            </Text>
          </Pressable>
          <Pressable
            style={{ alignItems: "center" }}
            onPress={() => openPage(TabOptions.Settings)}
          >
            <Icon
              name="settings"
              color={item == TabOptions.Settings ? AccentColor : "grey"}
              size={25}
            />
            <Text
              style={{
                ...styles.tabLabel,
                color: item == TabOptions.Settings ? AccentColor : "grey",
              }}
            >
              Settings
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default BottomTabContainer;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  navHomeView: {
    backgroundColor: PrimaryColor,
    height: 48,
    width: 33,
    position: "absolute",
    right: 0,
    top: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#201C31",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  bottomTab: {
    backgroundColor: "#F4F1FE",
    marginTop: 4,
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 15,
    height: 65,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#201C31",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  checkInButton: {
    backgroundColor: PrimaryColor,
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: -16,
    justifyContent: "center",
    alignItems: "center",
  },
  tabLabel: { fontSize: 10, alignSelf: "center" },
});
