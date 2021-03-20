
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,

} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
// import RNPickerSelect, { defaultStyles } from './debug';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import { TextInputMask } from "react-native-masked-text";
const baseUrl = 'http://192.168.1.6:4000/Bitacorapp/addPlataforma';
const baseUrl1 = 'http://192.168.1.6:4000/Bitacorapp/listEventos';
const baseUrl2 = 'http://192.168.1.6:4000/Bitacorapp/listUsuarios';
const baseUrl3 = 'http://192.168.1.6:4000/Bitacorapp/listProveedores';
const baseUrl4 = 'http://192.168.1.6:4000/Bitacorapp/listFactorRiesgos';
const baseUrl5 = 'http://192.168.1.6:4000/Bitacorapp/addBitacora';


const estado = [
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
    value: 'Compleatdo',
  },
];
//const [value, onChange] = useState('10:00');

export default class App extends Component {



  constructor(props) {
    super(props);

    this.inputRefs = {

      favSport1: null,

    };

    var today = new Date;
    var hour = new Date;
    this.state = {
      listP: [],
      listE: [],
      listU: [],
      listPro: [],
      listF: [],

      date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
      date2: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),


      plataforma: undefined,
      evento: undefined,
      userId: undefined,
      atendioid: undefined,
      proveedoresId: undefined,
      factorRiesgoId: undefined,
      estado: undefined,
      dt: hour.getHours() + ':' + hour.getMinutes(),
      dt2: hour.getHours() + ':' + hour.getMinutes()


    };

  }

  componentDidMount() {
    this.getPlataforma();
    this.getEventos();
    this.getUsuarios();
    this.getProveedores();
    this.getFactorRiesgo();
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



  render() {
    console.log(this.state.fecha);
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
    const { listF } = this.state;


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






    return (

      <View style={styles.container}>
        <ScrollView

          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>


          <Text>Fecha de incidencia</Text>
          <DatePicker
            style={{ width: 200, background: "rgb(170, 224, 112)", }}
            date={this.state.date}
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
            onDateChange={(date) => { this.setState({ date: date }) }}

          />
          <Text></Text>
          <Text>Hora incidencia</Text>
          <TextInputMask
            placeholder="00:00"
            
            type={"datetime"}
            options={{
              format: "HH:mm",
            }}
            value={this.state.dt}
            onChangeText={(text) => {
              this.setState({
                dt: text,
              });
            }}
          />

          <Text></Text>
          <Text>Plataforma</Text>
          <RNPickerSelect
            placeholder={placeholder1}

            items={plataforma}
            onValueChange={value => {
              this.setState({
                plataforma: value,
              });
            }}
            style={pickerSelectStyles}
            value={this.state.plataforma}
            useNativeAndroidPickerStyle={false}
            ref={el => {
              this.inputRefs.plataforma = el;
            }}
          />
          <Text></Text>
          <Text>Eventos</Text>
          <RNPickerSelect
            placeholder={placeholder2}

            items={Eventos}
            onValueChange={value => {
              this.setState({
                evento: value,
              });
            }}
            style={pickerSelectStyles}
            value={this.state.evento}
            useNativeAndroidPickerStyle={false}
            ref={el => {
              this.inputRefs.evento = el;
            }}
          />
          <Text></Text>

          <Text>Descripción</Text>
          <TextInput
            placeholder="Descripción..."
            onChangeText={(value) => handleChangeText(value, "descripcion")}
          //   value={state.name}
          />
          <Text></Text>

          <Text>Empleado reportó</Text>
          <RNPickerSelect
            placeholder={placeholder3}

            items={Usuarios}
            onValueChange={value => {
              this.setState({
                userId: value,
              });
            }}
            style={pickerSelectStyles}
            value={this.state.userId}
            useNativeAndroidPickerStyle={false}
            ref={el => {
              this.inputRefs.userId = el;
            }}
          />
          <Text></Text>

          <Text>Empleado atendió</Text>
          <RNPickerSelect
            placeholder={placeholder4}

            items={Usuarios}
            onValueChange={value => {
              this.setState({
                atendioid: value,
              });
            }}
            style={pickerSelectStyles}
            value={this.state.atendioid}
            useNativeAndroidPickerStyle={false}
            ref={el => {
              this.inputRefs.atendioid = el;
            }}
          />

          <Text></Text>
          <Text>Proveedores</Text>
          <RNPickerSelect
            placeholder={placeholder5}

            items={Proveedores}
            onValueChange={value => {
              this.setState({
                proveedoresId: value,
              });
            }}
            style={pickerSelectStyles}
            value={this.state.proveedoresId}
            useNativeAndroidPickerStyle={false}
            ref={el => {
              this.inputRefs.proveedoresId = el;
            }}
          />
          <Text></Text>
          <Text>Fecha de solucion </Text>
          <DatePicker
            style={{ width: 200, background: "rgb(170, 224, 112)", }}
            date={this.state.date2}
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
            onDateChange={(date2) => { this.setState({ date2: date2 }) }}
          />
          <Text></Text>
               <Text>Hora solucion</Text>
          <TextInputMask
            placeholder="00:00"
            
            type={"datetime"}
            options={{
              format: "HH:mm",
            }}
            value={this.state.dt2}
            onChangeText={(text) => {
              this.setState({
                dt: text,
              });
            }}
          />

          <Text></Text>
          <Text>Estado</Text>
          <RNPickerSelect
            placeholder={placeholderEstado}

            items={estado}
            onValueChange={value => {
              this.setState({
                estado: value,
              });
            }}
            style={pickerSelectStyles}
            value={this.state.estado}
            useNativeAndroidPickerStyle={false}
            ref={el => {
              this.inputRefs.estado = el;
            }}
          />
          <Text></Text>
          <Text>Factores de riesgo</Text>
          <RNPickerSelect
            placeholder={placeholder6}

            items={FactorRiesgos}
            onValueChange={value => {
              this.setState({
                factorRiesgoId: value,
              });
            }}
            style={pickerSelectStyles}
            value={this.state.factorRiesgoId}
            useNativeAndroidPickerStyle={false}
            ref={el => {
              this.inputRefs.factorRiesgoId = el;
            }}
          />

          <View paddingVertical={5} />
          <View style={styles.button}>
            <Button title="Guardar" onPress={() => saveNewUser()} />
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
