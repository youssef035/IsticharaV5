import React, { useState, useEffect } from 'react';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { Button, View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const PaymentScreen = ({ route, navigation }) => {
  const { confirmPayment } = useConfirmPayment();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const { userData } = route.params;

  useEffect(() => {
    fetchClientSecret();
  }, []);

  const fetchClientSecret = async () => {
    try {
      const response = await fetch('https://us-central1-isticharav5.cloudfunctions.net/createPaymentIntent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 200 }), 
      });
      const data = await response.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        console.error('Failed to get client secret:', data.error);
      }
    } catch (error) {
      console.error('Error fetching client secret:', error);
    }
  };

  const handlePayment = async () => {
    try {
      setLoading(true);
      console.log('Client Secret:', clientSecret); // Log clientSecret to verify its value
      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        paymentMethodData: {
          billingDetails: {
            name: userData.Nom + ' ' + userData.Prenom, // Use the actual user's name
          },
        },
      });

      if (error) {
        console.log('Payment failed:', error.message);
      } else {
        console.log('Payment successful:', paymentIntent);

        // Submit the user data along with the payment information to Firestore
        await firestore()
          .collection('Clients')
          .add({
            Date: userData.Date,
            Nom: userData.Nom,
            Prenom: userData.Prenom,
            Tel: userData.Tel,
            Email: userData.Email,
            Genre: userData.Genre,
            Ville: userData.Ville,
            paymentIntentId: paymentIntent.id, //for reference
            paymentStatus: paymentIntent.status, //for reference
          });

        console.log('Client added with success');
        // Navigate to success screen or handle success
       navigation.navigate('success'); 
      }
    } catch (error) {
      console.log('Error processing payment:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
      />
      <Button title="Pay" onPress={handlePayment} disabled={loading} />
      {loading && <Text>Loading...</Text>}
    </View>
  );
};

export default PaymentScreen;
