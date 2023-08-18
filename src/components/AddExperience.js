import React, { useState } from 'react';
import { View, Text, Image, TextInput, CheckBox ,TouchableOpacity, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddExperience = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentlyWorking, setCurrentlyWorking] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.containerfour}>
      <View style={styles.headerfour}>
        <Image source={require('./Profimg/BackButton.png')} style={styles.image1four} />
        <Text style={styles.headerTextfour}>Profile Setup</Text>
      </View>
      <View style={styles.containerfoursecond}>
      <Text style={styles.subHeaderTextfour}>Add Experience</Text>
      <Text style={styles.labelfour}>Enter Organisation’s Name</Text>
      <TextInput style={styles.inputfour} placeholder="Company Name" />

      <Text style={styles.labelfour}>Enter Job Title</Text>
      <TextInput style={styles.inputfour} placeholder="Job title" />

      <Text style={styles.labelfour}>Duration</Text>
      <View style={styles.dateContainerfour}>
        <TextInput
          style={styles.inputfour1}
          placeholder="Start Date"
          value={startDate}
          onChangeText={setStartDate}
        />
        <Image source={require('./Profimg/calendar_month.png')} style={styles.dateImagefour} />
        <TextInput
          style={styles.inputfour2}
          placeholder="End Date"
          value={endDate}
          onChangeText={setEndDate}
          editable={!currentlyWorking}
        />
        <Image source={require('./Profimg/calendar_month.png')} style={styles.dateImagefour} />
      </View>
      <View style={styles.containersfifth}>
      <TouchableOpacity
        style={[styles.checkboxfifth, isChecked ? styles.checked : styles.unchecked]}
        onPress={handleCheckboxToggle}
      >
        {isChecked && <MaterialIcons name="check" size={16} color="#1C1B1F" />}
      </TouchableOpacity>
      <Text style={styles.labelsfifth}>Currently working</Text>
     </View>

        <TouchableOpacity style={styles.nextButtonfour}>
        <Text style={styles.nextButtonTextfour}>Next</Text>
      </TouchableOpacity>
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerfour: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerfour: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image1four: {
    position: 'absolute',
    width: 30,
    height: 30,
    top:65,
    left: 10,
  },
  containerfoursecond: {
    flex: 1,
    padding: 32,
    marginLeft: -8,
    marginTop: 80
  },
  headerTextfour: {
    position: 'absolute',
    left: 110,
    fontSize: 20,
    fontWeight: '700',
     top:65,
     color:'#7B7A7C',
  },
  subHeaderTextfour: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 40,
    color: '#7B7A7C',
  },
  labelfour: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 35,
     color:'#7B7A7C',
  },
  inputfour: {
    width: 315,
    height: 40,
    borderWidth: 1,
    borderColor: '#7B7A7C',
    borderRadius: 11,
    padding: 10,
    marginTop: 5,
     color:'#7B7A7C',
  },

  inputfour1: {
    width: 147,
    height: 40,
    borderWidth: 1,
    borderColor: '#7B7A7C',
    borderRadius: 11,
    padding: 10,
    marginTop: 5,
     color:'#7B7A7C',
  },
  inputfour2: {
    width: 147,
    height: 40,
    borderWidth: 1,
    borderColor: '#7B7A7C',
    borderRadius: 11,
    padding: 10,
    marginTop: 5,
    marginLeft: 30,
     color:'#7B7A7C',
  },
  dateContainerfour: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,

    
  },
  dateInputfour: {
    flex: 1,
  },
  dateImagefour: {
    width: 20,
    height: 20,
    marginLeft:   -30,
  },
  containersfifth: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxfifth: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#1C1B1F',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    left:144,
    top:35,
  },
  checkedfifth: {
    backgroundColor: '#1C1B1F',
  },
  uncheckedfifth: {
    backgroundColor: 'transparent',
  },
  checkIconfifth: {
    color: '#fff',
  },
  labelsfifth: {
    fontSize: 16,
    fontWeight: '500',
    color: '#7B7A7C',
    marginTop:35,
    marginLeft: 2,

},
  nextButtonfour: {
    position: 'absolute',
    width: 158,
    height:56,
    backgroundColor: '#D9D9D9',
    padding: 14,
    borderRadius: 40,
    top: 640,
    alignItems: 'center',
    left:100,
  },
  nextButtonTextfour: {
    color: ' #7B7A7C',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default AddExperience;