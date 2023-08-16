import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/components/SignupScreen';
import LoginScreen from './src/components/LoginScreen';
import ForgotPasswordScreen from './src/components/ForgotPasswordScreen';
import SendOtpScreen from './src/components/SendOtpScreen';
import ResetPassword from './src/components/ResetPassword';
import Profilepage from './src/components/Profilepage';

const Stack = createStackNavigator();

const App = () => {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="profile">
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen
          name="Sendotp"
          component={SendOtpScreen}
          options={{ headerShown: false }}
          
        />

<Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen
          name="profile"
          component={Profilepage}
          options={{ headerShown: false }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;