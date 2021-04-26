import { StatusBar } from 'expo-status-bar';
import React, { Component,useState, useEffect } from 'react';
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar, Badge, } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import {  Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';



//const baseUrl = 'http://192.168.1.6:4000/Bitacorapp/list'; 
const baseUrl = 'http://192.168.3.106:4000/Bitacorapp/list'; 
class list extends Component {
  
  constructor() {
    super();
 
    this.state = {
      list:[]
      
    };
   
  }

  componentDidMount(){
    this.getBitacora();
    this.props.navigation.addListener('focus', () => {
      this.getBitacora();
    });
  }
 
  async getBitacora() {
    try{
      const response = await axios.get(baseUrl);
      const { data } = response;  
      this.setState({ list:data });
     
    }catch(error){
      console.error(error);
    }
  }
  


  render(){
   const { list} = this.state;
 
    return (
     
              <ScrollView>
          
          <Button
          background-color= "rgb(170, 224, 112)"
          border-color=  "rgb(170, 224, 112)"
          color=  "rgb(35, 148, 0)"
            onPress={() =>  this.props.navigation.navigate("BitacoraAdd")}
            title="Nuevo"
          />
        
          {list.map((bitacora) => {
            return (
              
              <ListItem
                key={bitacora.id}
                bottomDivider
                onPress={() => {
                  this.props.navigation.navigate("BitacoraDetails", {
                    bitacoraId: bitacora.id,
                  });
                }}
              >
                <Badge status="success" />
               
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




