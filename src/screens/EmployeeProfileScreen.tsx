import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LighterPrimaryColor, PrimaryColor} from '../resources/colors';
import ImagePickerOrTakePhotoPopUp from '../components/ImagePickerOrTakePhotoPopUp';
import Toast from 'react-native-simple-toast';

const EmployeeProfileScreen = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [imagePath, setImagePath] = useState<any | undefined>();
  const [photoPopUpVisible, setPhotoPopUpVisible] = useState(false);

  const pickImage = async () => {
    setPhotoPopUpVisible(false);
    launchImageLibrary({quality: 0.7, mediaType: 'photo'}, response => {
      //const result = await launchImageLibrary({mediaType: 'photo'});

      if (response.didCancel) {
        Toast.show('Cancelled image upload', Toast.LONG);
        return;
      }

      if (response.errorMessage) {
        Toast.show(response.errorMessage, Toast.LONG);
        return;
      }

      if (response.errorCode == 'permission') {
        Toast.show('Camera permission not granted', Toast.LONG);
        return;
      }

      let imagePathResult: any = response.assets[0].uri;
      if (imagePathResult) setImagePath(imagePathResult);
      else Toast.show('Something went wrong', Toast.LONG);
    });
  };

  const captureImage = () => {
    setPhotoPopUpVisible(false);
    launchCamera({quality: 0.7, mediaType: 'photo'}, response => {
      //const result = await launchImageLibrary({mediaType: 'photo'});

      if (response.didCancel) {
        Toast.show('Cancelled image upload', Toast.LONG);
        return;
      }

      if (response.errorMessage) {
        Toast.show(response.errorMessage, Toast.LONG);
        return;
      }

      if (response.errorCode == 'camera_unavailable') {
        Toast.show('Camera is not available on this device', Toast.LONG);
        return;
      }

      if (response.errorCode == 'permission') {
        Toast.show('Camera permission not granted', Toast.LONG);
        return;
      }

      let imagePathResult: any = response.assets[0].uri;
      if (imagePathResult) setImagePath(imagePathResult);
      else Toast.show('Something went wrong', Toast.LONG);
    });
  };

  return (
    <View style={styles.constainer}>
      <Image
        style={styles.blurImage}
        source={
          imagePath
            ? {uri: imagePath}
            : require('../resources/images/profilepicplaceholder.png')
        }
        blurRadius={65}
      />
      <Image
        style={styles.image}
        source={
          imagePath
            ? {uri: imagePath}
            : require('../resources/images/profilepicplaceholder.png')
        }
      />
      <View style={styles.floatingButtonContainer}>
        {isEdit ? (
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => setIsEdit(false)}>
            <FontAwesome5 name="save" size={24} color={PrimaryColor} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => setIsEdit(true)}>
            <FontAwesome5 name="pen" size={24} color={PrimaryColor} />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => setPhotoPopUpVisible(true)}>
          <FontAwesome name="camera" size={24} color={PrimaryColor} />
        </TouchableOpacity>
      </View>

      {isEdit ? (
        <View>
          <TextInput
            style={styles.textInput}
            textAlign={'center'}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.textInput}
            textAlign={'center'}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.textInput}
            textAlign={'center'}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.textInput}
            textAlign={'center'}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      ) : (
        <View>
          <Text style={{...styles.text, fontSize: 20, fontWeight: 'bold'}}>
            William Nkuna
          </Text>
          {/* <View style={styles.lineDivider} /> */}
          <Text style={styles.text}>William@gmail.com</Text>
          <Text style={styles.text}>Centurion, Pretoria, Village Valencia</Text>
          <Text style={styles.text}>0712345678</Text>
        </View>
      )}

      <ImagePickerOrTakePhotoPopUp
        photoPopUpVisible={photoPopUpVisible}
        hidePhotoPopUp={() => setPhotoPopUpVisible(false)}
        captureImage={captureImage}
        pickImage={pickImage}
      />
    </View>
  );
};

export default EmployeeProfileScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  blurImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  text: {
    color: PrimaryColor,
    marginBottom: 8,
    fontSize: 16,
    marginHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: LighterPrimaryColor,
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
  image: {
    marginTop: 40,
    alignSelf: 'center',
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  floatingButtonContainer: {
    marginTop: 8,
    alignSelf: 'flex-end',
    height: 26,
    flexDirection: 'row',
  },
  floatingButton: {
    marginRight: 18,
  },
  textInput: {
    borderColor: PrimaryColor,
    borderWidth: 1,
    color: PrimaryColor,
    alignItems: 'center',
    padding: 4,
    marginTop: 8,
    marginHorizontal: 18,
    borderRadius: 12,
    backgroundColor: LighterPrimaryColor,
  },
});
