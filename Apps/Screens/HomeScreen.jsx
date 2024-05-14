import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';


const LawyerCard = ({ id, image, name, location, reviews, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(id)}>
    <Image source={image} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.reviews}>{reviews} Reviews</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  // Dummy lawyer data
  const lawyers = [
    { id: 1, name: 'John Doe', location: 'New York', reviews: 15, image: require('./../../assets/images/lawyer1.jpg'), details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Jane Smith', location: 'Los Angeles', reviews: 20, image: require('./../../assets/images/lawyer2.jpg'), details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    // Add more lawyer data as needed
  ];

  const handleCardPress = (id) => {
    setSelectedLawyer(lawyers.find(lawyer => lawyer.id === id));
  };

  const handleCloseModal = () => {
    setSelectedLawyer(null);
  };

  return (
    <View>
      <View>
      <View style={styles.filterBar}>
        {/* Add filter UI elements here */}
        <Button title="Best Rated" onPress={() => handleFilterChange('bestRated')} />
        <Button title="By City" onPress={() => handleFilterChange('byCity')} />
        <Button title="Availability" onPress={() => handleFilterChange('availability')} />
      </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
      {lawyers.map(lawyer => (
        <LawyerCard
          key={lawyer.id}
          id={lawyer.id}
          image={lawyer.image}
          name={lawyer.name}
          location={lawyer.location}
          reviews={lawyer.reviews}
          onPress={handleCardPress}
        />
      ))}
      <Modal visible={selectedLawyer !== null} animationType="slide">
        <View style={styles.modalContainer}>
        <Image source={selectedLawyer?.image} style={styles.modalImage} />
          <Text style={styles.modalName}>{selectedLawyer?.name}</Text>
          <Text style={styles.modalLocation}>{selectedLawyer?.location}</Text>
          <Text style={styles.modalDetails}>{selectedLawyer?.details}</Text>
          <Button title="Close" onPress={handleCloseModal} />
        </View>
      </Modal>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  card: {
    width: '48%',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  details: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    marginBottom: 4,
  },
  reviews: {
    fontSize: 12,
    color: '#888',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalLocation: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalDetails: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen