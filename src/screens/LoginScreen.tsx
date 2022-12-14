import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Text} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // result

  const isValid = (): boolean => {
    let valid: boolean = false;
    if (!email || !password) {
      Alert.alert('Please fill all the fields');
    } else {
      valid = true;
    }
    return valid;
  };

  const handleLogin = () => {
    if (!isValid()) return;
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else if (error.code === 'auth/wrong-password') {
          Alert.alert(
            'The password is invalid or the user does not have a password!',
          );
        } else if (error.code === 'auth/user-not-found') {
          Alert.alert(
            'There is no user record corresponding to this identifier. The user may have been deleted!',
          );
        } else {
          Alert.alert('Something went wrong! Please try again');
        }
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_space} />
      <View style={styles.sub_container}>
        <Text style={styles.headerText} h1>
          Login
        </Text>

        <Text style={styles.text}>Please sign in to continue</Text>

        <Text style={styles.emailText}>EMAIL</Text>
        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.passwordText}>PASSWORD</Text>
        <TextInput
          style={styles.textInput}
          textAlign={'center'}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />

        {loading ? (
          <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            color="#0DF6E3"
            animating={true}
          />
        ) : (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              handleLogin();
            }}>
            <Text style={styles.SubmitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            console.log('reset password pressed');
          }}>
          <Text style={styles.linkText}>Reset password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.signUpLinkContainer}>
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={styles.linkText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  headerText: {color: 'white'},
  text: {color: '#615E67', marginTop: 16, fontSize: 15},
  activityIndicator: {alignSelf: 'center', marginTop: 25},
  linkText: {
    color: '#0DF6E3',
    marginTop: 16,
    fontSize: 15,
    alignSelf: 'center',
  },
  emailText: {
    marginTop: 50,
    marginLeft: 8,
    marginBottom: 8,
    color: '#615E67',
    fontSize: 12,
  },
  passwordText: {
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
  safeAreaContainer: {flex: 1},
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#201C31',
  },
  top_space: {
    flex: 0.1,
  },
  sub_container: {
    flex: 0.8,
    justifyContent: 'center',
  },
  bottom_container: {
    flex: 0.1,
  },
  signUpLinkContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
