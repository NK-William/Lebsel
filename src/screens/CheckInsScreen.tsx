import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CheckInsScreen = () => {
  return (
    <View style={styles.constainer}>
      <Text style={{color: 'black'}}>Map here</Text>
    </View>
  );
};

export default CheckInsScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
});
