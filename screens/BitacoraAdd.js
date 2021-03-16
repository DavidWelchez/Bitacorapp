
import { StatusBar } from 'expo-status-bar';
import React, { Component,useState, useEffect } from 'react';
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import {  Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const baseUrl = 'http://192.168.1.4:4000/Bitacorapp/list'; 
class add extends Component {
  
  constructor() {
    super();
    // this.addProduct = this.addProduct.bind(this); 
    this.state = {
      list:[]
      // name:'',
      // price:''
    };
  }

  componentDidMount(){
    this.getBitacora();
  }
 
  async getBitacora() {
    try{
      const response = await axios.get(baseUrl);
      const { data } = response;  
      this.setState({ list:data });
      console.log(data);
    }catch(error){
      console.error(error);
    }
  }

  // async addProduct() {
  //   try{
  //     const { name, price } = this.state;
  //     const response = await axios.post(baseUrl, {name, price });
  //     const { data } = response;  
  //     console.log(data);
  //     this.getProducts();
  //     this.clearInput();
  //   }catch(error){
  //     console.error(error);
  //   }
  // }

  // clearInput() {
  //   this.setState({name:'', price:''});
  // }
 
  render(){
   const { list} = this.state;
   
   return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText(value, "name")}
        //   value={state.name}
        />
      </View>
 

      {/* Email Input */}
      {/* <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View> */}

      {/* Input */}
      {/* <View style={styles.inputGroup}>
        <TextInput
          placeholder="phone"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
        />
      </View> */}

      <View style={styles.button}>
        <Button title="Guardar" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
        }
  
}//fin clase App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default add;



