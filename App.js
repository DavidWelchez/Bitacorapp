import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from 'react-native';

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import BitacoraList from "./screens/BitacoraList";
import BitacoraAdd from "./screens/BitacoraAdd";
import BitacoraDetails from "./screens/BitacoraDetails";





const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(170, 224, 112)",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
  
      <Stack.Screen
        name="BitacoraList"
        component={BitacoraList}
        // options={{   headerTitle: props => <LogoTitle {...props} />, title: 'Bitacorapp' }}
        options={{ title: "BitacorApp" }}
       
      />
      <Stack.Screen
        name="BitacoraAdd"
        component={BitacoraAdd}
        options={{ title: "BitacorApp" }}
      />
      <Stack.Screen
        name="BitacoraDetails"
        component={BitacoraDetails}
        options={{ title: "BitacorApp" }}
      />
    
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    
      <MyStack />
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});