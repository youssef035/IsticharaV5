import React from "react";
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from "react-native";

export default function OptionsScreen({navigation}){
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('TabNav')}>
        <ImageBackground
          source={require('./../../assets/images/client.png')}
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <ImageBackground 
          source={require('./../../assets/images/Lawyer.png')}
          style={styles.imageBackground2}
          imageStyle={styles.image}
        >
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  imageBackground: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
    imageBackground2: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius : 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for better readability
    padding: 10,
  },
});

