import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Image, StyleSheet } from 'react-native'

// screens
import Main from '../components/main.js';
import Second from '../components/second.js';

export const Tabs = TabNavigator({
    Profile: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./user.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
            ),
        }
    },
    Main: {
        screen: Second,
        navigationOptions: {
            tabBarLabel: 'Second',
            tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./home.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
            ),
        }
    }
})

const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });
  
