import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/components/SignupScreen';
import LoginScreen from './src/components/LoginScreen';
import ForgotPasswordScreen from './src/components/ForgotPasswordScreen';
import SendOtpScreen from './src/components/SendOtpScreen';
import ResetPassword from './src/components/ResetPassword';
import Profilepage from './src/components/Profilepage';
import Profilesetup1 from './src/components/Profilesetup1';
import ProfileSetuppage from './src/components/ProfileSetuppage';
import Educational from './src/components/Educational';
import Professional from './src/components/Professional';
import AddEducation from './src/components/AddEducation';
import AddExperience from './src/components/AddExperience';


const Stack = createStackNavigator();

const App = () => {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="profilesetup">
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
        <Stack.Screen
          name="profilesetup"
          component={Profilesetup1}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen
          name="profsetuppage"
          component={ProfileSetuppage}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen
          name="educationpage"
          component={Educational}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen
          name="professionalpage"
          component={Professional}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen
          name="addeducationpage"
          component={AddEducation}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen
          name="addexperiencepage"
          component={AddExperience}
          options={{ headerShown: false }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;