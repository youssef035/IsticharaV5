import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';
import { Formik } from "formik";
import { launchImageLibrary } from 'react-native-image-picker';

export default function FormuleScreen({navigation}){

  const [selectedCity, setSelectedCity] = useState('Ville'); // Default selected city
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse); // Corrected function name
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || (response.assets && response.assets[0].uri); // Corrected handling of response
      setSelectedImage(imageUri);
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 26, textAlign: 'center', fontWeight: 'bold', marginTop: 0 }}>
        Veuillez remplir ce formulaire
      </Text>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          City : "Marrakech",
          Phone : "",
          Email : "",
        }}
        onSubmit={(values) => {
            // Check if any required fields are empty
            if (!values.firstName || !values.lastName || !values.Phone || !values.Email) {
              console.log('Please fill out all required fields');
              return; // Exit early if any required field is empty
            }
          
            console.log('Form values:', values);
            console.log('Selected Image:', selectedImage);
            // Log form values for debugging
          
            // Handle form submission to Firestore
            firestore()
              .collection('AppliedLawyers')
              .add({
                firstName: values.firstName,
                lastName: values.lastName,
                City: values.City,
                Phone: values.Phone,
                Email: values.Email,
                image: selectedImage // Use selectedImage state here
              })
              .then(() => {
                console.log('User added to Firestore successfully!');
                navigation.navigate("thanks");
              })
              .catch((error) => {
                console.error('Error adding user to Firestore:', error);
              });

          }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
        }) => (
          <View>
            <TextInput
              style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, height: 40, marginBottom: 10, paddingHorizontal: 10 }}
              placeholder="Nom"
              value={values.firstName}
              onChangeText={handleChange("firstName")}
            />
            <TextInput
              style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, height: 40, marginBottom: 10, paddingHorizontal: 10 }}
              placeholder="Prenom"
              value={values.lastName}
              onChangeText={handleChange("lastName")}
            />
            <TextInput
              style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, height: 40, marginBottom: 10, paddingHorizontal: 10 }}
              placeholder="Tel"
              value={values.Phone}
              keyboardType="number-pad"
              onChangeText={handleChange("Phone")}
            />
            <TextInput
              style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, height: 40, marginBottom: 10, paddingHorizontal: 10 }}
              placeholder="Email"
              value={values.Email}
              onChangeText={handleChange("Email")}
            />
            <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'blule', marginBottom: 10 }}>
              <Picker
                selectedValue={values.City}
                onValueChange={(itemValue) => setFieldValue("City", itemValue)}
              >
                <Picker.Item label="Marrakech" value="Marrakech" />
                <Picker.Item label="Rabat" value="Rabat" />
                <Picker.Item label="Tanger" value="Tanger"/>
                <Picker.Item label="Casablanca" value= "Casablanca"/>
              </Picker>
            </View>
            <TouchableOpacity 
            style={{ 
            padding: 10, 
            backgroundColor: '#68D391', 
            borderRadius: 20, 
            marginTop: 10, 
            alignSelf: 'center' 
        }}
        onPress={openImagePicker} // Added onPress to trigger the image picker
      >
        <Text
          style={{ color: 'white', textAlign: 'center', fontSize: 15 }}
        >
          ajouter une photo
        </Text>
      </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10, backgroundColor: '#68D391', borderRadius: 20, marginTop: 10, alignSelf: 'center' }}>
              <Text
                style={{ color: 'white', textAlign: 'center', fontSize: 15 }}
                onPress={handleSubmit} 
              >
                soumettre 
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
