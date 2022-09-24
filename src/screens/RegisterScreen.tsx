import React, {useState, useEffect, Children} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Switch,
  Alert,
} from 'react-native';
import {Text} from 'react-native-elements';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const RegisterScreen = ({navigation}: any) => {
  // for inputs
  const [name, setName] = useState('');
  const [surname, setSurname] = useState<string>('');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');
  // for controls
  const [loading, setLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const isValid = (): boolean => {
    let valid: boolean = false;
    if (!name || !surname || !email || !password) {
      Alert.alert('Please fill all the fields');
    } else if (!isEnabled && !code) {
      Alert.alert('Please enter the code');
    } else if (!passwordVerification) {
      Alert.alert('Please re-enter the password');
    } else if (password !== passwordVerification) {
      Alert.alert("Your entered passwords don't match");
    } else {
      valid = true;
    }
    return valid;
  };

  const handleSignUp = async () => {
    if (!isValid()) return;
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async userCredentials => {
        Alert.alert('User account created & signed in!');
        await addUserToDatabase(userCredentials);
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else if (error.code === 'auth/weak-password') {
          Alert.alert('Your password has to be at least 6 characters');
        } else {
          Alert.alert('Something went wrong! Please try again');
        }
        setLoading(false);
      });

    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    // setLoading(false);
    //   })
    //   .catch((error) => {
    // Alert.aler(error.message)
    // setLoading(false);
    //  });
  };

  const addUserToDatabase = async (
    UserCredential: FirebaseAuthTypes.UserCredential,
  ) => {
    let userRoleCategory = isEnabled ? 'admins' : 'employees';
    let finalCode: string;
    if (isEnabled) finalCode = Math.floor(Math.random() * 100 + 1).toString();
    else finalCode = code;

    database()
      .ref(`/users/${userRoleCategory}/`)
      // .child(`users/${userRoleCategory}/`)
      .child(UserCredential.user.uid)
      .set({
        name,
        surname,
        email,
        Code: finalCode,
      })
      .then()
      .catch(error => {
        Alert.alert('"Something went wrong! Please try again"');
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.headerText} h1>
          Create Account
        </Text>
        <Text style={styles.text}>Please fill all the fields to sign up</Text>
        <Text style={styles.topHintText}>NAME</Text>
        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={text => setName(text)}
        />
        <Text style={styles.hintText}>SURNAME</Text>
        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          autoCapitalize="none"
          autoCorrect={false}
          value={surname}
          onChangeText={text => setSurname(text)}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 4,
          }}>
          <Text style={{flex: 1, color: 'white', marginLeft: 12}}>
            Are you an admin?
          </Text>
          <Text style={{color: '#0DF6E3', marginLeft: 12}}>
            {isEnabled ? 'Yes' : 'No'}
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#0DF6E3'}}
            thumbColor={isEnabled ? 'white' : 'white'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        {isEnabled ? (
          <Text style={{color: '#0DF6E3', marginHorizontal: 8}}>
            A code will be generated when you register, provide the code to your
            employees when they register to the system, you can re-view the code
            from the settings.
          </Text>
        ) : (
          <>
            <Text style={styles.hintText}>CODE PROVIDED BY ADMIN</Text>
            <TextInput
              style={styles.textInput}
              textAlign={'center'}
              autoCapitalize="none"
              autoCorrect={false}
              value={code}
              onChangeText={text => setCode(text)}
            />
          </>
        )}

        <Text style={styles.hintText}>EMAIL</Text>
        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.hintText}>PASSWORD</Text>
        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Text style={styles.hintText}>RE-ENTER PASSWORD</Text>
        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          value={passwordVerification}
          onChangeText={text => setPasswordVerification(text)}
        />
        {loading ? (
          <ActivityIndicator
            style={{alignSelf: 'center', marginTop: 25}}
            size="large"
            color="#0DF6E3"
            animating={true}
          />
        ) : (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              handleSignUp();
            }}>
            <Text style={styles.SubmitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        )}
        <View style={styles.bottom_container}>
          <View style={styles.signUpLinkContainer}>
            <Text style={styles.text}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <Text style={styles.linkText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text>testing</Text>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingRight: 12,
    backgroundColor: '#201C31',
  },
  scrollView: {
    paddingRight: 12,
  },
  headerText: {color: 'white'},
  text: {color: '#615E67', marginTop: 16, fontSize: 15},
  topHintText: {
    marginTop: 50,
    marginLeft: 8,
    marginBottom: 8,
    color: '#615E67',
    fontSize: 12,
  },
  hintText: {
    marginTop: 16,
    marginLeft: 8,
    marginBottom: 8,
    color: '#615E67',
    fontSize: 12,
  },
  textInput: {
    borderColor: '#0DF6E3',
    borderWidth: 1,
    color: 'white',
    alignItems: 'center',
    padding: 8,
    borderRadius: 12,
  },
  submitButton: {
    backgroundColor: '#0DF6E3',
    height: 60,
    width: 200,
    marginTop: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  SubmitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#201C31',
  },
  bottom_container: {
    flex: 0.1,
  },
  signUpLinkContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: '#0DF6E3',
    marginTop: 16,
    fontSize: 15,
    alignSelf: 'center',
  },
});
