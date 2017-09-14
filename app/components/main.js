import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableHighlight,
  Platform
} from 'react-native';


const width = '80%';
const marginTop = Platform.OS === 'ios' ? 0 : 20;
// var { width } = Dimensions.get('window');

export default class Main extends Component {
  constructor()
  {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <View style={styles.center}>
        <View style={styles.cont}>
            <Image source={require('./locked-2.png')}
          style={styles.mainIMG} />
       </View>
        <TextInput
          style={styles.input}
          onChangeText={(val) => this.state.name = val}
          placeholder="Username ..."
          underlineColorAndroid='transparent'
        />
        {/* <TextInput
          style={styles.input}
          onChangeText={(val) => this.state.email = val}
          placeholder="email ..."
          keyboardType="email-address"
          underlineColorAndroid='transparent'
        /> */}
        <TextInput
          style={styles.input}
          onChangeText={(val) => this.state.password = val}
          placeholder="password ..."
          underlineColorAndroid='transparent'
          secureTextEntry={true}
        />
        <TouchableHighlight style={styles.button}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width,
    height: 40,
    textAlign: 'center',
    fontSize: 17,
    margin: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#bfbfbf',
    borderRadius: 10,
  },
  mainIMG: {
    width: 170, 
    height: 170,
  },
  center: {
    alignItems: 'center',
  },
  cont: {
    marginTop,
    alignItems: 'center',
    marginBottom: 70,
  },
  button: {
    backgroundColor: 'rgba(38, 50, 56, 0.7)',
    width,
    height: 45,
    marginTop: 15,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 0,
    borderColor: 'rgba(38, 50, 56, 0.9)',
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#f0f3f5',
    marginTop: 10,
  }
});

AppRegistry.registerComponent('Main', () => Main);
