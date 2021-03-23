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

const baseUrl = 'http://192.168.1.9:4000/Bitacorapp/list'; 
class list extends Component {
  
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
     
              <ScrollView>
          
          <Button
          background-color= "rgb(170, 224, 112)"
          border-color=  "rgb(170, 224, 112)"
          color=  "rgb(35, 148, 0)"
            onPress={() =>  this.props.navigation.navigate("BitacoraDetails")}
            title="Nuevo"
          />
          {list.map((bitacora) => {
            return (
              <ListItem
                key={bitacora.id}
                bottomDivider
                // onPress={() => {
                //   props.navigation.navigate("UserDetailScreen", {
                //     userId: user.id,
                //   });
                // }}
              >
                <ListItem.Chevron />
               
                <ListItem.Content>
                  <ListItem.Title>{bitacora.fechaDeIncidencia}</ListItem.Title>
                  <ListItem.Subtitle>{bitacora.EventoRiesgo}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </ScrollView>
      );
        }
  
}//fin clase App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    backgroundColor:'#E8EBEC',
    padding:20,
    marginVertical:5,
    marginHorizontal:12,
    borderRadius:15,
    elevation:4
  }
});
export default list;




