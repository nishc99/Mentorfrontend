import React, {useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity,ImageBackground, Keyboard, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const SendOtpScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { mobile } = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const handleVerifyOtp = async () => {
    try {
      const enteredOtp = otp.join('');
      const response = await fetch('http://192.168.0.103:5000/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile, otp: enteredOtp }),
      });

      const data = await response.json();
      console.log(data.message);
      if (response.ok) {
        navigation.navigate('ResetPassword', { mobile });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

       

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
        <ImageBackground
      source={require('./logimg/bg.png')}
      style={styles.innerBackground}>
      <ImageBackground
        source={require('./logimg/log&sign.png')}
        style={[
          styles.backgroundImage,
          {marginTop: isKeyboardVisible ? -320 : -90},
        ]}>
    <View style={styles.container}>
    <Text style={styles.heading}>Enter OTP</Text>

            <Text style={styles.headerText}>
              To complete your login, please enter the 6-digit OTP sent to your
              mobile device.
           </Text>
      <Text>Enter the OTP sent to {mobile}</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.otpInput}
            placeholder="0"
            maxLength={1}
            value={digit}
            onChangeText={value => handleInputChange(index, value)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.Verifybutton} onPress={handleVerifyOtp}>
        <Text style={styles.VerifybuttonText}>Verify OTP</Text>
      </TouchableOpacity>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    // Add a transparent background to make the text readable
  },
  innerBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: 400,
    height: 420,
  },
      heading: {
    fontFamily: 'Montserrat',
    fontSize: 28,
    fontWeight: '700',
    color: '#303A47',
    marginBottom: 20,
    marginRight: 220,
    lineHeight: 34,
    letterSpacing: 0,
    marginTop: -100,
  },
  headerText: {
    fontSize: 18,
    marginBottom: 50,
    alignSelf: 'flex-start',
    letterSpacing: 0,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  otpInput: {
    width: 40,
     height: 50,
     borderWidth: 1,
     borderColor: 'gray',
     borderRadius: 5,
     textAlign: 'center',
     marginHorizontal: 5,
     fontSize: 18,
     marginBottom: 20,
  },
  Verifybutton: {
    backgroundColor: '#FF2063',
    borderRadius: 16,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 56,
    width: 318,
    height: 52,
  },
  VerifybuttonText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default SendOtpScreen;

