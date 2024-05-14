import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LawyerLogin() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('./../../assets/images/Logo.png')}/>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.form}>
                    <Text style={styles.label}>Adresse e-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre e-mail"
                    />
                    <Text style={styles.label}>Mot de passe</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder="Entrer le mot de passe"
                    />
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Mot de passe Oublié ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        flex: 2, // 30% of the screen
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        flex: 3, // 70% of the screen
        width: '80%', // Adjust as needed
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        marginBottom: 20
    },
    label: {
        color: '#4a5568',
        marginLeft: 4
    },
    input: {
        padding: 16,
        backgroundColor: '#f7fafc',
        color: '#4a5568',
        borderRadius: 20,
        marginBottom: 10,
        width: '100%'
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginBottom: 20
    },
    forgotPasswordText: {
        color: '#4a5568'
    },
    loginButton: {
        paddingVertical: 12,
        backgroundColor: '#10B981',
        borderRadius: 20,
        width: '100%'
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    signupLink: {
        fontWeight: 'bold',
        color: '#f59e0b'
    }
});


