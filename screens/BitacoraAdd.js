
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
  TouchableOpacity,

} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { SocialIcon, Icon } from 'react-native-elements';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
// import RNPickerSelect, { defaultStyles } from './debug';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import { TextInputMask } from "react-native-masked-text";
import * as ImagePicker from 'expo-image-picker';
//import ImagePicker from 'react-native-image-picker';
//import {launchCamera, launchImageLibrary,ImagePicker} from 'react-native-image-picker';
import * as DocumentPicker from 'expo-document-picker';
// const baseUrl =  'http://192.168.1.6:4000/Bitacorapp/listPlataforma';
// const baseUrl1 = 'http://192.168.1.6:4000/Bitacorapp/listEventos';
// const baseUrl2 = 'http://192.168.1.6:4000/Bitacorapp/listUsuarios';
// const baseUrl3 = 'http://192.168.1.6:4000/Bitacorapp/listProveedores';
// const baseUrl4 = 'http://192.168.1.6:4000/Bitacorapp/listFactorRiesgos';
// const baseUrl5 = 'http://192.168.1.6:4000/Bitacorapp/addBitacora';

const baseUrl = 'http://192.168.3.106:4000/Bitacorapp/listPlataforma';
const baseUrl1 = 'http://192.168.3.106:4000/Bitacorapp/listEventos';
const baseUrl2 = 'http://192.168.3.106:4000/Bitacorapp/listUsuarios';
const baseUrl3 = 'http://192.168.3.106:4000/Bitacorapp/listProveedores';
const baseUrl4 = 'http://192.168.3.106:4000/Bitacorapp/listFactorRiesgos';
const baseUrl5 = 'http://192.168.3.106:4000/Bitacorapp/addBitacora';


const estados = [
  {
    label: 'En espera',
    value: 'En espera',
  },
  {
    label: 'En proceso',
    value: 'En proceso',
  },
  {
    label: 'Completado',
    value: 'Completado',
  },
];
//const [value, onChange] = useState('10:00');

export default class App extends Component {



  constructor(props) {
    super(props);
    //this.addBitacora = this.addBitacora.bind(this); 

    this.inputRefs = {

      favSport1: null,
      plataformaId: null,
      eventoId: null,
      userId: null,
      atendioid: null,
      proveedorId: null,
      factorRiesgoId: null,
      estado: null

    };

    var today = new Date;
    var hour = new Date;

    this.state = {
      listP: [],
      listE: [],
      listU: [],
      listPro: [],
      listF: [],

      fechaDeIncidencia: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
      horaDeIncidencia: hour.getHours() + ':' + hour.getMinutes(),
      plataformaId: undefined,
      eventoId: undefined,
      descripcion: '',
      userId: undefined,
      atendioid: undefined,
      proveedorId: undefined,
      fechaSolucion: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
      horaSolucion: hour.getHours() + ':' + hour.getMinutes(),
      factorRiesgoId: undefined,
      estado: undefined,
      file: undefined,

      loading: true,
      fieldname: undefined,
      originalname: undefined,
      mimetype: undefined,



    };

  }

  componentDidMount() {
    this.getPlataforma();
    this.getEventos();
    this.getUsuarios();
    this.getProveedores();
    this.getFactorRiesgo();
    this.setState({ ...this.state, loading: false })

  }

  async getPlataforma() {
    try {
      const response = await axios.get(baseUrl);
      const { data } = response;
      this.setState({ listP: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  async getEventos() {
    try {
      const response = await axios.get(baseUrl1);
      const { data } = response;
      this.setState({ listE: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async getUsuarios() {
    try {
      const response = await axios.get(baseUrl2);
      const { data } = response;
      this.setState({ listU: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async getProveedores() {
    try {
      const response = await axios.get(baseUrl3);
      const { data } = response;
      this.setState({ listPro: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async getFactorRiesgo() {
    try {
      const response = await axios.get(baseUrl4);
      const { data } = response;
      this.setState({ listF: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  async openCameraPickerAsync() {
  

    this.state.file = await ImagePicker.launchCameraAsync();

    console.log(this.state.file);

  };
  async openImagePickerAsync() {

    this.state.file = await ImagePicker.launchImageLibraryAsync();

    console.log(this.state.file);

  };

  // handleChoosePhoto(){
  //   const options = {};
  //   ImagePicker.launchImageLibraryAsync(options, response =>{
  //     console.log("response" , response);
  //   })



  // };

  async addBitacora() {

    if (this.state.fechaDeIncidencia === null) {
      alert("Ingrese la fecha de incidencia, por favor.");
    }
    if (this.state.horaDeIncidencia === null) {
      alert("Ingrese la hora de incidencia, por favor.");
    }
    if (this.state.plataformaId === null) {
      alert("Ingrese la plataforma, por favor.");
    }
    if (this.state.eventoId === null) {
      alert("Ingrese el evento, por favor.");
    }
    if (this.state.descripcion === '') {
      alert("Ingrese la descripcion, por favor.");
    }
    if (this.state.userId === undefined) {
      alert("Ingrese el usuario reportó, por favor.");
    }
    if (this.state.atendioid === null) {
      alert("Ingrese el usuario atendio, por favor.");
    }
    if (this.state.proveedorId === null) {
      alert("Ingrese el proveedor, por favor.");
    }
    if (this.state.fechaSolucion === null) {
      alert("Ingrese la fecha solucion, por favor.");
    }
    if (this.state.horaSolucion === null) {
      alert("Ingrese la hora de solucion, por favor.");
    }
    if (this.state.estado === undefined) {
      alert("Ingrese el estado, por favor.");
    }
    if (this.state.fechaSolucion === null) {
      alert("Ingrese la fecha de solucion, por favor.");
    }
    if (this.state.factorRiesgoId === null) {
      alert("Ingrese el factor de riesgo, por favor.");
    }
    else {

      try {
        const { fechaDeIncidencia,
          horaDeIncidencia,
          plataformaId,
          eventoId,
          descripcion,
          userId,
          atendioid,
          proveedorId,
          fechaSolucion,
          horaSolucion,
          estado,
          factorRiesgoId,
          file } = this.state;
        // console.log(file.uri);
        // console.log(file.file.name);
        // console.log(file.file.type);

        const answerFormData = new FormData();
        answerFormData.append("fechaDeIncidencia", (fechaDeIncidencia));
        answerFormData.append("horaDeIncidencia", (horaDeIncidencia));
        answerFormData.append("plataformaId", (plataformaId));
        answerFormData.append("eventoId", (eventoId));
        answerFormData.append("descripcion", (descripcion));
        answerFormData.append("userId", (userId));
        answerFormData.append("atendioid", (atendioid));
        answerFormData.append("proveedorId", (proveedorId));
        answerFormData.append("fechaSolucion", (fechaSolucion));
        answerFormData.append("horaSolucion", (horaSolucion));
        answerFormData.append("estado", (estado));
        answerFormData.append("factorRiesgoId", (factorRiesgoId));
        
        if (file) {
          answerFormData.append('archivo', {
            uri: file.uri,
            name: 'imagen',
            type: 'image/jpeg',
          });
        }


      
        
        
        const response = await axios({
          method: "POST",
          url: baseUrl5,
          data: answerFormData,
          headers: {
            Accept: 'application/json',
            "Content-Type": "multipart/form-data"
          }
        })

        const { data } = response;
        console.log(data);

        this.props.navigation.navigate("BitacoraList");

      } catch (error) {
        console.error(error);
      }
    }
  }




  render() {

    const placeholder1 = {
      label: 'Plataforma',
      value: null,
      color: '#9EA0A4',
    };
    const placeholder2 = {
      label: 'Evento',
      value: null,
      color: '#9EA0A4',
    };
    const placeholder3 = {
      label: 'Empleado reportó',
      value: null,
      color: '#9EA0A4',
    };
    const placeholder4 = {
      label: 'Empleado atendió',
      value: null,
      color: '#9EA0A4',
    };
    const placeholder5 = {
      label: 'Proveedor',
      value: null,
      color: '#9EA0A4',
    };
    const placeholder6 = {
      label: 'Factor de riesgo',
      value: null,
      color: '#9EA0A4',
    };
    const placeholderEstado = {
      label: 'Estado',
      value: null,
      color: '#9EA0A4',
    };
    const { listP } = this.state;
    const { listE } = this.state;
    const { listU } = this.state;
    const { listPro } = this.state;
    const { listF, plataformaId } = this.state;




    const plataforma = [];
    const Eventos = [];
    const Usuarios = [];
    const Proveedores = [];
    const FactorRiesgos = [];

    this.state.listP.map((plataformas) => {
      plataforma.push({
        label: plataformas.plataforma,
        value: plataformas.id
      })
    })

    this.state.listE.map((eventos) => {
      Eventos.push({
        label: eventos.evento,
        value: eventos.id
      })
    })

    this.state.listU.map((usuarios) => {
      Usuarios.push({
        label: usuarios.fullname,
        value: usuarios.id
      })
    })

    this.state.listPro.map((proveedores) => {
      Proveedores.push({
        label: proveedores.proveedor,
        value: proveedores.id
      })
    })
    this.state.listF.map((factorRiesgos) => {
      FactorRiesgos.push({
        label: factorRiesgos.factor,
        value: factorRiesgos.id
      })
    })




    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="rgb(35, 148, 0)" />
        </View>
      );
    }


    return (

      <View style={styles.container}>
        <ScrollView

          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>


          <Text>Fecha de incidencia</Text>
          <DatePicker
            style={{ width: 200, background: "rgb(170, 224, 112)", }}
            date={this.state.fechaDeIncidencia}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2000-01-01"
            maxDate="2100-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{

              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            // onDateChange={date => this.state.fechaDeIncidencia= date }
            onDateChange={(date) => { this.setState({ ...this.state, fechaDeIncidencia: date }) }}

          />
          <Text></Text>
          <Text>Hora incidencia</Text>
          <TextInputMask
            placeholder="00:00"

            type={"datetime"}
            options={{
              format: "HH:mm",
            }}
            value={this.state.horaDeIncidencia}
            // onChangeText={(text) =>(this.state.horaDeIncidencia=text)}
            onChangeText={(text) => { this.setState({ ...this.state, horaDeIncidencia: text }); }}
          />

          <Text></Text>
          <Text>Plataforma</Text>
          <RNPickerSelect
            placeholder={placeholder1}

            items={plataforma}
            //  onValueChange={value =>this.state.plataformaId=value },
            onValueChange={(plataformaId) => this.setState({ ...this.state, plataformaId: plataformaId })}

            style={pickerSelectStyles}
            // value={plataformaId}
            useNativeAndroidPickerStyle={false}

          />
          <Text></Text>
          <Text>Eventos</Text>
          <RNPickerSelect
            placeholder={placeholder2}

            items={Eventos}
            //  onValueChange={value =>this.state.eventoId=value }
            onValueChange={value => {
              this.setState({
                ...this.state, eventoId: value,
              });
            }}
            style={pickerSelectStyles}
            //value={this.state.eventoId}
            useNativeAndroidPickerStyle={false}

          />
          <Text></Text>

          <Text>Descripción</Text>

          <TextInput
            placeholder="Descripción..."
            multiline={true}
            numberOfLines={4}
            // onChangeText={(value) =>(this.state.descripcion=value )}
            onChangeText={value => {
              this.setState({
                ...this.state, descripcion: value,
              });
            }}
          />
          <Text></Text>

          <Text>Empleado reportó</Text>
          <RNPickerSelect
            placeholder={placeholder3}

            items={Usuarios}
            // onValueChange={value =>this.state.userId=value }
            onValueChange={value => {
              this.setState({
                ...this.state, userId: value,
              });
            }}
            style={pickerSelectStyles}
            ///value={this.state.userId}
            useNativeAndroidPickerStyle={false}

          />
          <Text></Text>

          <Text>Empleado atendió</Text>
          <RNPickerSelect
            placeholder={placeholder4}

            items={Usuarios}
            //  onValueChange={value =>this.state.atendioid=value }
            onValueChange={value => {
              this.setState({
                ...this.state, atendioid: value,
              });
            }}
            style={pickerSelectStyles}
            //  value={this.state.atendioid}
            useNativeAndroidPickerStyle={false}

          />

          <Text></Text>
          <Text>Proveedores</Text>
          <RNPickerSelect
            placeholder={placeholder5}

            items={Proveedores}
            // onValueChange={value =>this.state.proveedorId=value }
            onValueChange={value => {
              this.setState({
                ...this.state, proveedorId: value,
              });
            }}
            style={pickerSelectStyles}
            // value={this.state.proveedorId}
            useNativeAndroidPickerStyle={false}

          />
          <Text></Text>
          <Text>Fecha de solucion </Text>
          <DatePicker
            style={{ width: 200, background: "rgb(170, 224, 112)", }}
            date={this.state.fechaSolucion}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2000-01-01"
            maxDate="2100-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{

              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}

            onDateChange={(date) => { this.setState({ ...this.state, fechaSolucion: date }) }}

          />
          <Text></Text>
          <Text>Hora solucion</Text>
          <TextInputMask
            placeholder="00:00"

            type={"datetime"}
            options={{
              format: "HH:mm",
            }}
            value={this.state.horaSolucion}

            onChangeText={(text) => { this.setState({ ...this.state, horaSolucion: text }); }}
          />

          <Text></Text>
          <Text>Estado</Text>
          <RNPickerSelect
            placeholder={placeholderEstado}

            items={estados}
            //onValueChange={value =>this.state.estado=value }
            onValueChange={value => {
              this.setState({
                ...this.state, estado: value,
              });
            }}
            style={pickerSelectStyles}
            //  value={this.state.estado}
            useNativeAndroidPickerStyle={false}

          />
          <Text></Text>
          <Text>Factores de riesgo</Text>
          <RNPickerSelect
            placeholder={placeholder6}

            items={FactorRiesgos}
            //onValueChange={value =>this.state.factorRiesgoId=value }
            onValueChange={value => {
              this.setState({
                ...this.state, factorRiesgoId: value,
              });
            }}
            style={pickerSelectStyles}
            // value={this.state.factorRiesgoId}
            useNativeAndroidPickerStyle={false}

          />



        
          {/* <Button
            background-color="rgb(170, 224, 112)"
            border-color="#338AFF"
            color="#338AFF"
            title="Galería" onPress={() => this.openImagePickerAsync()} />
          <Text></Text>
          <Button
            background-color="rgb(170, 224, 112)"
            border-color="#338AFF"
            color="#338AFF"
            title="Cámara" onPress={() => this.openCameraPickerAsync()} /> */}



          <View style={styles.button}>
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
                  color='rgb(35, 148, 0)'
                  onPress={() => this.openCameraPickerAsync()} />
                <Text>
                  Cámara
                </Text>

              </View>
              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>
             
                <Icon
                  raised
                  galeria
                  name='image'
                  type='font-awesome'
                  background-color="rgb(170, 224, 112)"
                  color='rgb(35, 148, 0)'
                  onPress={() => this.openImagePickerAsync()} />
                  
                <Text
                >
                  Galería
              </Text>
              </View>

            </View>
            <Text></Text>
            <Button
              background-color="rgb(170, 224, 112)"
              border-color="rgb(170, 224, 112)"
              color="rgb(35, 148, 0)"
              title="Guardar" onPress={() => this.addBitacora()} />
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 10,
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
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

