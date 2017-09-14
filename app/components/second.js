import React, { Component } from 'react';
import axios from 'axios';
import {
  AppRegistry,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';


import MainGroups from '../helpers/MainGroups.js';
import { styles } from '../resource/styles.js';

export default class Second extends Component {
  constructor()
  {
    super()
    this.state = {
      name: '',
      groups: []
    }
  }

  componentDidMount()
  {
    
    let _this = this;
    axios.get('http://127.0.0.1:8000/api/groups')
    .then(({ data }) => _this.setState({groups: data}))
    .catch() 
  }

  render() {
    let group = this.state.groups.map(function(data, index){
      return(
        <MainGroups key={index} group={data} />
      )
    })
    return (
      <View style={styles.listing}>
        <ScrollView>
          {group}
        </ScrollView>  
      </View>
    );
  }
}

AppRegistry.registerComponent('Second', () => Second);
