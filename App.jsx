import React from "react";
import WelcomeScreen from "./Apps/Screens/WelcomeScreen";
import OptionsScreen from "./Apps/Screens/OptionsScreen"; // Make sure this import is correct
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./Apps/Navigations/TabNavigation";
import HomeScreen from "./Apps/Screens/HomeScreen2";
import HomeScreen2 from "./Apps/Screens/HomeScreen2";
import FormuleScreen from "./Apps/Screens/FormuleScreen";
import ThankLawyer from "./Apps/Screens/ThankLawyer";
import ReservationForm from "./Apps/Screens/ReservationForm";
import LawyerLogin from "./Apps/Screens/LawyerLogin";
import ReservationDemo from "./Apps/Screens/ReservationDemo";
import PaymentScreen from "./Apps/Screens/PaymentScreen";


export default function App(){

  

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Options" component={OptionsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="formule" component={FormuleScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="thanks" component={ThankLawyer} options={{headerShown : false}}/>
        <Stack.Screen name="home2" component={HomeScreen2} />  
        <Stack.Screen name="TabNav" component={TabNavigation}/>
        {/* <Stack.Screen name="reservation" component={ReservationForm}/> */}
        <Stack.Screen name="reservation" component={ReservationDemo}/>
        <Stack.Screen name="login" component={LawyerLogin} options={{headerShown : false}} />
        <Stack.Screen name="pay" component={PaymentScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
