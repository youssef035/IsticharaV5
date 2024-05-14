import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

export default function ReservationDemo({navigation}) {
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD');

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(false);

  function handleOnPress() {
    setOpen(!open);
  }

  function handleChange(propDate) {
    setDate(propDate);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom</Text>
      <TextInput style={styles.input} />
      
      <Text style={styles.label}>Prenom</Text>
      <TextInput style={styles.input} />
      
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} />
      
      <Text style={styles.label}>Ville</Text>
      <TextInput style={styles.input} />
      
      <Text style={styles.label}>Tel</Text>
      <TextInput style={styles.input} />
      
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Chose Date</Text>
      </TouchableOpacity>
      
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              selected={date}
              minimumDate={startDate}
              onDateChange={handleChange}
            />
            <TouchableOpacity onPress={handleOnPress}>
              <Text>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <Button styles = {{marginBottom : 10}} title="procéder au paiement" onPress={()=> navigation.navigate("pay")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView : {
    margin : 20,
    backgroundColor : "white",
    borderRadius: 20,
    width : '90%',
    padding : 35,
    alignItems : 'center',
    shadowColor : '#000',
    shadowOffset : {
    width : 0,
    height : 2,
    },
    shadowOpacity : 0.25,
    shadowRadius : 4,
    elevation : 5,
},
});
