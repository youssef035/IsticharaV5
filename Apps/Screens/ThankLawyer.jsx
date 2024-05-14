import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ThankLawyer({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Merci pour votre soumission
      </Text>
      <Image
        source={require("./../../assets/images/smile.png")}
        style={styles.image}
      />
      <Text style={styles.description}>
        Notre équipe examinera votre candidature et vous contactera dans les plus brefs délais
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Welcome")}>
        <Text style={styles.buttonText}>
          Retour à l'écran d'accueil➲
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
  },
  image: {
    width: '100%',
    height: 300,
    marginTop: 0,
  },
  description: {
    fontSize: 18,
    color: '#888888', // Slate color
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    padding: 10,
    backgroundColor: '#ffffff', // White color
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
  },
});