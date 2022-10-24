import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React, { useState } from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EmployeeProfileScreen = () => {
  const [image, setImage] = useState<any | undefined>();

  const btnClicked = async () => {
    console.log("Pressed")
     const result = await launchCamera({mediaType: 'photo'});
    //const result = await launchImageLibrary({mediaType: 'photo'});
    let imageObject : any = result.assets[0];
    console.log(imageObject)
    console.log("uri *****", imageObject.uri)
    setImage(result);
  }

  return (
    <View style={{flex: 1}}>
      <Button title="Click" onPress={() => btnClicked()}/>
      <Image
          source={
            image ? { uri: image.uri } : require("../resources/images/profilepicplaceholder.png")
          }
        />
    </View>
    
  );
};

export default EmployeeProfileScreen;

const styles = StyleSheet.create({
}); 

