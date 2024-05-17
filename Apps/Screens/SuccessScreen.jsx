import React from 'react';
import { View, Text, Button } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Payment Successful!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
};

export default SuccessScreen;
