import { Formik } from 'formik';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import { Picker } from '@react-native-picker/picker';

export default function ReservationDemo({ navigation }) {
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD');

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");

  function handleOnPress() {
    setOpen(!open);
  }

  function handleChange(propDate) {
    setDate(propDate);
  }

  return (
    <View style={styles.container}>
      <Text> Please fill in this Contact form </Text>
      <Formik
        initialValues={{
          Nom: "",
          Prenom: "",
          Tel: "",
          Email: "",
          Genre: "",
          Ville: "",
          Date: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (!values.Date || !values.Email || !values.Genre || !values.Nom || !values.Prenom || !values.Tel || !values.Ville) {
            console.log("please fill in all the fields");
            setSubmitting(false);
            return;
          }
          console.log("form values: ", values);
          setSubmitting(false);
          navigation.navigate("pay", { userData: values });
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          setFieldValue,
          isSubmitting
        }) => (
          <View>
            <Text style={styles.label}>Nom</Text>
            <TextInput style={styles.input} onChangeText={handleChange('Nom')} value={values.Nom} />
      
            <Text style={styles.label}>Prenom</Text>
            <TextInput style={styles.input} onChangeText={handleChange('Prenom')} value={values.Prenom} />
      
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} onChangeText={handleChange('Email')} value={values.Email} />
      
            <Text style={styles.label}>Tel</Text>
            <TextInput style={styles.input} keyboardType="number-pad" onChangeText={handleChange('Tel')} value={values.Tel} />
      
            <Text style={styles.label}>Ville</Text>
            <TextInput style={styles.input} onChangeText={handleChange('Ville')} value={values.Ville} />
      
            <View>
              <Picker selectedValue={values.Genre} onValueChange={(itemValue) => setFieldValue('Genre', itemValue)}>
                <Picker.Item label='female' value="female" />
                <Picker.Item label='male' value="male" />
              </Picker>
            </View>
            
            <View>
              <TouchableOpacity onPress={handleOnPress}>
                <Text>Choose Date</Text>
              </TouchableOpacity>
            </View>

            <Modal animationType="slide" transparent={true} visible={open}>
              <View style={styles.centerView}>
                <View style={styles.modalView}>
                  <DatePicker
                    mode="calendar"
                    selected={date}
                    minimumDate={startDate}
                    onDateChange={(selectedDate) => {
                      handleChange(selectedDate);
                      setFieldValue('Date', selectedDate);
                    }}
                  />
                  <TouchableOpacity onPress={handleOnPress}>
                    <Text>CLOSE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <Button
              title="Procéder au paiement"
              onPress={handleSubmit}
              disabled={isSubmitting}
            />
          </View>
        )}
      </Formik>
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
