import React, {useEffect, useState } from 'react';
import { View, Text,ImageBackground,Keyboard, TextInput,Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [mobile, setMobile] = useState('');

  useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => {
            setKeyboardVisible(true);
          }
        );
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {
            setKeyboardVisible(false);
          }
        );
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      }, []);
    

  const handleSendOtp = async () => {
    try {
      const response = await fetch('http://192.168.0.103:5000/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }),
      });

      const data = await response.json();
      console.log(data.message);
      navigation.navigate('Sendotp', { mobile });
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <ImageBackground
      source={require('./logimg/bg.png')}
      style={styles.innerBackground}>
      <ImageBackground
        source={require('./logimg/fblogo.png')}
        style={[
          styles.backgroundImage,
          { marginTop: isKeyboardVisible ? -320 : -90 },
        ]}>
    <View style={styles.container}>
    <Text style={styles.heading}>Forgot Password?</Text>
           <Text style={styles.description}>
             Oops! It seems like you've forgotten your password. Don't worry,
             we've got you covered
           </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter mobile"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
      <LinearGradient
              colors={['#FF2063', '#FF0000']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}>
        <Text style={styles.buttonText}>Send OTP</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.loginText}>
             Already have an account{'? '}
             <Text
               style={styles.loginLink}
               onPress={() => navigation.navigate('Login')}>
               Login
             </Text>
           </Text>
    </View>
    </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

    backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 800,
    top: 180,
  },
  innerBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: 400,
    height: 420,
  },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -90,
  },
  heading: {
        fontFamily: 'Montserrat',
        fontSize: 28,
        fontWeight: '700',
        color: '#303A47',
        right: 50,
        paddingBottom: 20,
      },
      description: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: '#303A47',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        paddingBottom: 20,
      },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    //borderWidth: 1,
     fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 8,
    overflow: 'hidden',
    width: '80%',
    height: 52,
    borderRadius: 15,
    marginTop: 30,
  },

  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#303A47',
    marginTop: 30,
  },
  loginLink: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    color: '#FF2064',
    textDecorationLine: 'underline',
  },
  
});

export default ForgotPasswordScreen;





