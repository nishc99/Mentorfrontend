// import React, { useState } from 'react';
// import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import FirstScreen from './FirstScreen';
// import SecondScreen from './SecondScreen';
// import ThirdScreen from './ThirdScreen';




// const Profilesetup1 = () => {
//     const [currentScreen, setCurrentScreen] = useState('first');

//     const handleLogoClick = (screen) => {
//       setCurrentScreen(screen);
//     };

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <TouchableOpacity onPress={() => handleLogoClick('first')}>
//           <Image style={styles.logo} source={require('./logimg/lock.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleLogoClick('second')}>
//           <Image style={styles.logo1} source={require('./logimg/lock.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleLogoClick('third')}>
//           <Image style={styles.logo2} source={require('./logimg/lock.png')} />
//         </TouchableOpacity>
//       </View>
//       {currentScreen === 'first' && <FirstScreen />}
//       {currentScreen === 'second' && <SecondScreen />}
//       {currentScreen === 'third' && <ThirdScreen />}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     logoContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: 20,
//     },
//     logo: {
//         position: 'absolute',
//       width: 20,
//       height: 20,
//       left: 480,
//       top: -290,
//     },
//     logo1: {
//         position: 'absolute',
//       width: 20,
//       height: 20,
//       left: 180,
//       top: -290,
      
//     },
//     logo2: {
//         position: 'absolute',
//       width: 20,
//       height: 20,
//       left: -120,
//       top: -290,
//     },
//   });
  

// export default Profilesetup1;

// import React, { useState } from 'react';
// import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import FirstScreen from './FirstScreen';
// import SecondScreen from './SecondScreen';
// import ThirdScreen from './ThirdScreen';

// const Profilesetup1 = () => {
//   const [currentScreen, setCurrentScreen] = useState('first');

//   const handleLogoClick = (screen) => {
//     setCurrentScreen(screen);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
        
//         <View style={styles.logos}>
//         <View style={styles.line} />
//         <View style={styles.line2} />
//           <TouchableOpacity
//             onPress={() => handleLogoClick('first')}
//             style={[
//               styles.logoWrapper,
//               currentScreen === 'first' && styles.activeLogo,
//             ]}
//           >
//             <Image style={styles.logo} source={require('./logimg/lock.png')} />
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             onPress={() => handleLogoClick('second')}
//             style={[
//               styles.logoWrapper,
//               currentScreen === 'second' && styles.activeLogo,
//             ]}
//           >
//             <Image style={styles.logo} source={require('./logimg/lock.png')} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => handleLogoClick('third')}
//             style={[
//               styles.logoWrapper,
//               currentScreen === 'third' && styles.activeLogo,
//             ]}
//           >
//             <Image style={styles.logo} source={require('./logimg/lock.png')} />
//           </TouchableOpacity>
          
//         </View>
//       </View>
//       {currentScreen === 'first' && <FirstScreen />}
//       {currentScreen === 'second' && <SecondScreen />}
//       {currentScreen === 'third' && <ThirdScreen />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//   },
//   line: {
//     position: 'absolute',
//     width: 83,
//     height: 2,
//     backgroundColor: '#D9D9D9',
//     left: 32,
//     top: 16,
//   },
//   line2: {
//     position: 'absolute',
//     width: 82,
//     height: 2,
//     backgroundColor: '#D9D9D9',
//     left: 148,
//     top: 16,
//   },
//   logos: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: -300,
//     gap: 80,
    
//   },
//   logoWrapper: {
//     borderRadius: 30,
//     // borderWidth: 2,
//     // borderColor: '#000',
//     padding: 5,
//     backgroundColor: 'gray'
//   },
//   activeLogo: {
//     // borderColor: '#00f',
//     backgroundColor: 'gray'
//   },
//   logo: {
//     width: 24,
//     height: 24,
//   },
// });

// export default Profilesetup1;


import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import ProfileSetuppage from './ProfileSetuppage';
import Educational from './Educational';
import Professional from './Professional';

const Profilesetup1 = () => {
  const [currentScreen, setCurrentScreen] = useState('first');

  const handleNext = () => {
    if (currentScreen === 'first') {
      setCurrentScreen('second');
    } else if (currentScreen === 'second') {
      setCurrentScreen('third');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logos}>
          <View style={styles.line} />
          <View style={styles.line2} />
          <TouchableOpacity
            onPress={() => setCurrentScreen('first')}
            style={[
              styles.logoWrapper,
              currentScreen === 'first' && styles.activeLogo,
            ]}
          >
            <Image
              style={styles.logo}
              source={require('./logimg/lock.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentScreen('second')}
            style={[
              styles.logoWrapper,
              currentScreen === 'second' && styles.activeLogo,
            ]}
          >
            <Image
              style={styles.logo}
              source={require('./logimg/lock.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentScreen('third')}
            style={[
              styles.logoWrapper,
              currentScreen === 'third' && styles.activeLogo,
            ]}
          >
            <Image
              style={styles.logo}
              source={require('./logimg/lock.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {currentScreen === 'first' && <ProfileSetuppage />}
      {currentScreen === 'second' && <Educational />}
      {currentScreen === 'third' && <Professional />}
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    width: 102,
    height: 2,
    backgroundColor: '#D9D9D9',
    left: 32,
    top: 16,
  },
  line2: {
    position: 'absolute',
    width: 100,
    height: 2,
    backgroundColor: '#D9D9D9',
    left: 168,
    top: 16,
  },
  logos: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 150,
    gap: 100,
  },
  logoWrapper: {
    borderRadius: 30,
    padding: 5,
    // backgroundColor: 'gray',
  },
  activeLogo: {
    backgroundColor: 'gray',
  },
  logo: {
    width: 24,
    height: 24,
  },
//   nextButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#00f',
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
nextButton: {
    position: 'absolute',
    width: 158,
    height:56,
    backgroundColor: '#D9D9D9',
    padding: 14,
    borderRadius: 40,
    top: 740,
    alignItems: 'center',
    marginLeft:110,
  },
  buttonText: {
    color: ' #7B7A7C',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Profilesetup1;

