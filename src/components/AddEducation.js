import React, { useState } from 'react';
import { View, Text, Image, TextInput, CheckBox ,TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation} from '@react-navigation/native';

const AddEducation = () => {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentlyWorking, setCurrentlyWorking] = useState(false);

  return (
    <View style={styles.containerfifth}>
      <View style={styles.headerfifth}>
      <TouchableOpacity onPress={() => navigation.navigate('educationpage')}>
        <Image source={require('./Profimg/BackButton.png')} style={styles.image1fifth} />
        </TouchableOpacity>
        <Text style={styles.headerTextfifth}>Profile Setup</Text>
      </View>
      <View style={styles.containerfifthsecond}>
      <Text style={styles.subHeaderTextfifth}>Add Education</Text>
      <Text style={styles.labelfifth}>Institution</Text>
      <TextInput style={styles.inputfifth} placeholder="College Name" />

      <Text style={styles.labelfifth}>Degree</Text>
      <TextInput style={styles.inputfifth} placeholder="MSC" />

      <Text style={styles.labelfifth}>Duration</Text>
      <View style={styles.dateContainerfifth}>
        <TextInput
          style={styles.inputfifth1}
          placeholder="Start Date"
          value={startDate}
          onChangeText={setStartDate}
        />
        <Image source={require('./Profimg/calendar_month.png')} style={styles.dateImagefifth} />
        <TextInput
          style={styles.inputfifth2}
          placeholder="End Date"
          value={endDate}
          onChangeText={setEndDate}
          editable={!currentlyWorking}
        />
        <Image source={require('./Profimg/calendar_month.png')} style={styles.dateImagefifth} />
      </View>
      <TouchableOpacity style={styles.nextButtonfifth}>
        <Text style={styles.nextButtonTextfifth}>Next</Text>
      </TouchableOpacity>
     

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerfifth: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerfifth: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image1fifth: {
    position: 'absolute',
    width: 30,
    height: 30,
    top:65,
    left: 10,
  },
  containerfifthsecond: {
    flex: 1,
    padding: 32,
    marginLeft: -8,
    marginTop: 80
  },
  headerTextfifth: {
    position: 'absolute',
    left: 110,
    fontSize: 20,
    fontWeight: '700',
     top:65,
     color:'#7B7A7C',
  },
  subHeaderTextfifth: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 40,
    color: '#7B7A7C',
  },
  labelfifth: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 35,
     color:'#7B7A7C',
  },
  inputfifth: {
    width: 315,
    height: 40,
    borderWidth: 1,
    borderColor: '#7B7A7C',
    borderRadius: 11,
    padding: 10,
    marginTop: 5,
     color:'#7B7A7C',
  },
  inputfifth1: {
    width: 147,
    height: 40,
    borderWidth: 1,
    borderColor: '#7B7A7C',
    borderRadius: 11,
    padding: 10,
    marginTop: 5,
     color:'#7B7A7C',
  },
  inputfifth2: {
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
  dateContainerfifth: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,

    
  },
  dateImagefifth: {
    width: 20,
    height: 20,
    marginLeft:   -30,
  },
  checkboxContainerfifth: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxTextfifth: {
    marginRight: 10,
  },
  nextButtonfifth: {
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
  nextButtonTextfifth: {
    color: ' #7B7A7C',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default AddEducation;


