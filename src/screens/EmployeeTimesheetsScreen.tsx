import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {IEmployeeTimeSheetDataProps} from '../interfaces/app_interfaces';
import {
  PrimaryColor,
  LighterPrimaryColor,
  AccentColor,
} from '../resources/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DATA: IEmployeeTimeSheetDataProps[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    date: new Date(),
    timeSheet: 'timeSheet1',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    date: new Date(),
    timeSheet: 'timeSheet2',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    date: new Date(),
    timeSheet: 'timeSheet2',
  },
];

const EmployeeTimesheetsScreen = () => {
  const renderItem = ({item}: {item: IEmployeeTimeSheetDataProps}) => {
    return (
      <TouchableOpacity style={styles.timeSheetContainer}>
        <View style={styles.timeSheetItem}>
          <View style={styles.dateView}>
            <Text style={styles.dateText}>
              {item.date.toLocaleDateString()}
            </Text>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color={PrimaryColor}
              />
            </View>
          </View>
        </View>
        <View style={styles.divider}></View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default EmployeeTimesheetsScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  timeSheetContainer: {},
  timeSheetItem: {padding: 25},
  dateView: {flexDirection: 'row', justifyContent: 'space-between'},
  dateText: {
    color: PrimaryColor,
    marginHorizontal: 12,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: AccentColor,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontWeight: 'bold',
  },
  iconContainer: {},
  divider: {
    height: 1,
    backgroundColor: PrimaryColor,
    marginHorizontal: 12,
  },
});
