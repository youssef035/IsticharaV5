import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import {getToday , getFormatedDate} from 'react-native-modern-datepicker';


export default function ReservationForm(){

    const today = new Date();
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD');


    //opens and closes the model 
    const [open , setOpen] = useState(false);
    
    //data variable 
    const [date , setDate] = useState(false);

    function handleOnPress () {
        setOpen(!open)
    }

    function handleChange (propDate) {
        setDate(propDate)
    }

    return(
        <View style={styles.container} >
            <Text>  please fill in this form </Text>

            <TouchableOpacity onPress={handleOnPress}>
                <Text> Open </Text>
            </TouchableOpacity>

            <Modal
            animationType="slide"
            transparent = {true}
            visible = {open}
            >
                <View style = {styles.centerView}>
                    <View style ={styles.modalView} >

                        <DatePicker 
                        mode = "calendar"
                        selected = {date}
                        minimumDate = {startDate}
                        onDateChange = {handleChange}
                        />



                        <TouchableOpacity onPress={handleOnPress}>
                            <Text>CLOSE </Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </Modal>
            
            <StatusBar style = "auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
        justifyContent : 'center',
    },
    centerView : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center",
        marginTop : 20
    },
    modalView : {
        margin : 20,
        backgroundColor : "white",
        borderRadius: 20,
        width : '90%',
        padding : 35,
        alignItems : 'center',
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.25,
        shadowRadius : 4,
        elevation : 5,
    },
     
})