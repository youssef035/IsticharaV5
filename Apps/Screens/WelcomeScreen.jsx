import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const WelcomeScreen = ({navigation}) => {
    return (
        <View>
            <Image
                source={require("./../../assets/images/Logo.png")}
                style={styles.logo}
            />
            <View style={styles.container}>
                <Text style={styles.title}>Conseils juridiques d'experts</Text>
                <Text style={styles.subtitle}>
                    Accédez à des consultations juridiques expertes, où que vous soyez!
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Options")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Commencer</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonText} onPress={() => console.log('invité pressed')}>
                        Continuer en tant qu'invité ➲
                    </Text>
                </TouchableOpacity> */}
            </View>
            <View>
                <Text style={styles.avocatText}>
                    êtes vous avocat ? vous pouvez nous rejoindre ici
                </Text>
                <TouchableOpacity
                    style={styles.joinButton}
                    onPress={() => navigation.navigate("formule")}
                >
                    <Text style={styles.joinButtonText}>Intégrez</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
        marginTop: 2,
    },
    container: {
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 0,
    },
    subtitle: {
        fontSize: 18,
        color: '#718096',
        textAlign: 'center',
        marginTop: 15,
    },
    button: {
        padding: 15,
        backgroundColor: '#10B981',
        borderRadius: 50,
        marginTop: 50,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    secondaryButton: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 50,
        marginTop: 3,
    },
    secondaryButtonText: {
        textAlign: 'center',
        fontSize: 15,
    },
    avocatText: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 60,
    },
    joinButton: {
        padding: 15,
        backgroundColor: '#047857',
        borderRadius: 50,
        marginTop: 1,
        width: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    joinButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    },
});

export default WelcomeScreen;
