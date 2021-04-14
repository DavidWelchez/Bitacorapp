// Example of Bottom Sheet in React Native
// https://aboutreact.com/react-native-bottom-sheet/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

//import basic react native components
import { BottomSheet } from 'react-native-btr';

//import to show social icons
import { SocialIcon,Icon } from 'react-native-elements';

import * as ImagePicker from 'expo-image-picker';

const App = () => {
  const [visible, setVisible] = useState(false);
console.log(visible, "sin darle al boton");
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
console.log(visible, "al darle al boton ");

  };

  const openCameraPickerAsync=()=> {
    // let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    // if (permissionResult.granted === false) {
    //   alert('Permission to access camera roll is required!');
    //   return;
    // }

    this.state.file = ImagePicker.launchCameraAsync();
    
    console.log(this.state.file);
    //console.log(this.state.file.file);
   // console.log(this.state.file.name);  
    
  };

  return (
    
      <View style={styles.container}>
       
        <Button

          onPress={toggleBottomNavigationView}
          
          //on Press of the button bottom sheet will be visible
          title="Imagen"
        />
        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 20,
                  fontSize: 20,
                }}>
                Seleccione Imagen
              </Text>

              <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>
              <Icon
                  raised
                  galeria
                  name='camera'
                  type='font-awesome'
                  color='#f40'
                  onPress={() => {
                    //Action to perform on press of Social Icon
                    toggleBottomNavigationView();
                    openCameraPickerAsync();
                    
                  }} 
                  
                  />
              <Text
              style={{
               
             
              }}>
                Cámara
              </Text>
        

              </View>
              <View style={{ flex: 1, flexDirection: 'column' , alignItems: 'center',}}>
              <Icon
                  raised
                  galeria
                  name='image'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => {
                    //Action to perform on press of Social Icon
                    toggleBottomNavigationView();
                    openCameraPickerAsync();

                  }} />
              <Text
              >
                Galería
              </Text>
        

              </View>
                
                
                  
                  

             
                
               
              </View>
            
             
            </View>
          </View>
        </BottomSheet>
      </View>
 
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});