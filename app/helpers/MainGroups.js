import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

import { styles } from '../resource/styles.js';

export default class MainGroups extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        let data = this.props.group;
      
        return (
        <View style={styles.center}>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} 
            style={styles.myIMG} 
          />
          <View style={styles.textBack}>
            <Text style={styles.text}>{data.name}</Text>
            <View style={styles.des}>
              <View style={{flexDirection: 'row', margin: 0, padding: 0}}>
                <Text style={styles.location}>{data.country}, </Text>
                <Text style={styles.location}>{data.city}</Text>
              </View>
              <Text numberOfLines={1} style={styles.about}>{ data.about }</Text>
              <Text>Number of Users: {data.users.length}</Text>
            </View>
          </View>
        </View>
        )
    }
}