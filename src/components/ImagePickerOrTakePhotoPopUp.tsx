import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { AntDesign } from "@expo/vector-icons";
import { PrimaryColor } from "../resources/colors";

const ImagePickerOrTakePhotoPopUp = ({
  photoPopUpVisible,
  hidePhotoPopUp,
  captureImage,
  pickImage,
} : any) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={photoPopUpVisible}
        onRequestClose={() => {
          hidePhotoPopUp();
        }}
      >
        <View style={styles.popUpContainer}>
          <View style={styles.popUpView}>
            <TouchableOpacity
              style={{ alignSelf: "flex-end" }}
              onPress={() => hidePhotoPopUp()}
            >
                <Text>Fix here</Text>
              {/* <AntDesign name="closecircleo" size={24} color={PrimaryColor} /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.photoLinkTextContainer}
              onPress={() => captureImage()}
            >
              <Text style={styles.photoLinkText}>Take a photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.photoLinkTextContainer, marginVertical: 15 }}
              onPress={() => pickImage()}
            >
              <Text style={styles.photoLinkText}>Pick a photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ImagePickerOrTakePhotoPopUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  popUpContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popUpView: {
    margin: 20,
    backgroundColor: "white",
    width: 200,
    borderRadius: 20,
    padding: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  photoLinkText: {
    color: "white",
  },
  photoLinkTextContainer: {
    backgroundColor: PrimaryColor,
    padding: 10,
    width: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
