import {StyleSheet, TouchableOpacity, Text, View, Button, Image} from 'react-native';
import React, { useState } from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EmployeeProfileScreen = () => {
  const [imagePath, setImagePath] = useState<any | undefined>();

  const btnClicked = () => {
     launchCamera({quality:0.7, mediaType: 'photo', }, response => {
    //const result = await launchImageLibrary({mediaType: 'photo'});
    let imagePathResult : any = response.assets[0].uri;
    setImagePath(imagePathResult);
     })
  }

  return (
    <View style={{flex: 1}}>
      <Button title="Click" onPress={() => btnClicked()}/>
      <Image
        style={styles.image}
        source={
          imagePath ? { uri: imagePath } : require("../resources/images/profilepicplaceholder.png")
        }
      />
    </View>
    
  );
};

export default EmployeeProfileScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%"
  }
}); 

