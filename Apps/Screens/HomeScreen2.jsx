import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function HomeScreen2({navigation}) {
  const [loading, setLoading] = useState(true);
  const [activeLawyers, setActiveLawyers] = useState([]);
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('ActiveLawyers')
      .onSnapshot((querySnapshot) => {
        const lawyers = [];

        querySnapshot.forEach((documentSnapshot) => {
          const lawyer = documentSnapshot.data();
          lawyer.key = documentSnapshot.id;
          lawyers.push(lawyer);
        });

        setActiveLawyers(lawyers);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const openOverlay = (lawyer) => {
    setSelectedLawyer(lawyer);
  };

  const closeOverlay = () => {
    setSelectedLawyer(null);
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <FlatList
        data={activeLawyers}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openOverlay(item)}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
              />
              <View style={{ flex: 1 }}>
                <Text> Name: {item.name}</Text>
                <Text>City: {item.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
      <Modal visible={selectedLawyer !== null} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: selectedLawyer?.image }}
            style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 20 }}
          />
          <Text>Name: {selectedLawyer?.name}</Text>
          <Text>City: {selectedLawyer?.location}</Text>
          <TouchableOpacity onPress={closeOverlay} style={{ position: 'absolute', top: 20, left: 20 , backgroundColor : "#FF4040", borderRadius : 10 }}>
            <Text>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("reservation")}>
        <Text style={styles.buttonText}>
        réserver une visioconférence➲
        </Text>
      </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#ffffff', // White color
    borderRadius: 30,
    marginTop: 20,
 
}});












// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator , StyleSheet, Button, FlatList, SafeAreaView, ScrollView,Image} from 'react-native';
// import firestore from '@react-native-firebase/firestore';




// export default function HomeScreen2() {
//   const [loading, setLoading] = useState(true); // Set loading to true on component mount
//   const [ActiveLawyers, setActiveLawyers] = useState([]); // Initial empty array of lawyers


//   useEffect(() => {
//     const unsubscribe = firestore()
//       .collection('ActiveLawyers')
//       .onSnapshot((querySnapshot) => {
//         const lawyers = []; // Use a more descriptive variable name

//         querySnapshot.forEach((documentSnapshot) => {
//           lawyers.push({
//             ...documentSnapshot.data(),
//             key: documentSnapshot.id, // Ensure key is included
//           });
//         });

//         setActiveLawyers(lawyers); // Update with the retrieved lawyers
//         setLoading(false); // Set loading to false after data is fetched
//       });

//     // Unsubscribe from events when no longer in use
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <ActivityIndicator />;
//   }

//   console.log('Active Lawyers:', ActiveLawyers); // Log retrieved lawyers



// return (
//     <FlatList
//       data={ActiveLawyers}
//       renderItem={({ item }) => (
//         <View  style={{ height: 70, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Image source={{ uri: item.image }} />  
//           <Text>User ID: {item.id}</Text>
//           <Text>User Name: {item.name}</Text>
//           <Text> city : {item.location} </Text>
//         </View>
//       )}
//     />
//   );
// }



// const styles = StyleSheet.create({
//     container: {
//       flexGrow: 1,
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       justifyContent: 'space-between',
//       padding: 16,
//     },
//     card: {
//       width: '48%', // Adjust as needed
//       marginBottom: 16,
//       borderWidth: 1,
//       borderColor: '#ddd',
//       borderRadius: 8,
//       overflow: 'hidden',
//     },
//     image: {
//       width: '100%',
//       height: 150,
//       resizeMode: 'cover',
//     },
//     details: {
//       padding: 12,
//     },
//     name: {
//       fontSize: 16,
//       fontWeight: 'bold',
//       marginBottom: 4,
//     },
//     location: {
//       fontSize: 14,
//       marginBottom: 4,
//     },
//     reviews: {
//       fontSize: 12,
//       color: '#888',
//     },
//   });



  

// const LawyerCard = ({ image, name, location, reviews }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: image }} style={styles.image} />
//       <View style={styles.details}>
//         <Text style={styles.name}>{name}</Text>
//         <Text style={styles.location}>{location}</Text>
//         <Text style={styles.reviews}>{reviews} Reviews</Text>
//       </View>
//     </View>
//   );

// return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {ActiveLawyers.map(Thelawyer => (
//         <LawyerCard
//           image={Thelawyer.image}
//           name={Thelawyer.name}
//           location={Thelawyer.location}
//           reviews={Thelawyer.reviews}
//         />
//       ))}
//     </ScrollView>
//   );

//   const lawyerss = [
//     { id: 1, name: 'John Doe', location: 'New York', reviews: 15, image: 'https://example.com/johndoe.jpg' },
//     { id: 2, name: 'Jane Smith', location: 'Los Angeles', reviews: 20, image: 'https://example.com/janesmith.jpg' },
//     // Add more lawyer data as needed
//   ];