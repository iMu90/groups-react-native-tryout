import react from 'react';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  des: {
    marginTop: 7,
    alignItems: 'center',
  },
  location:{
    marginRight: 0,
    marginLeft: 0,
    marginTop: 4,
    fontFamily: "Roboto"
  },
  about:{
    marginRight: 5,
    marginLeft: 5,
    marginTop: 4,
    fontFamily: "Roboto"
  },
  text:{
    margin: 0,
    padding: 0, 
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    color: 'rgba(0, 28, 77, 0.9)',
    backgroundColor: "rgba(38, 50, 56, 0.1)",
    fontSize: 20,
    fontFamily: "Ubuntu"
    },
    textBack: {
      alignItems: 'center',
      margin: 0,
      padding: 0,  
      backgroundColor: "rgba(242, 242, 242, 0.7)",
      width: "100%",
      height: 100,
      marginTop: 7,
      marginBottom: 5,
    },
    listing: {
      flex: 1,
      flexDirection: 'column',
      padding: 0,
      margin: 0
      
    },
    myIMG: {
      justifyContent: 'center',
      alignSelf: 'stretch',
      height: 150,
      padding: 0,
      margin: 0
    },
    
    container: {
      backgroundColor: '#F5FCFF',
      padding: 0,
      margin: 0
    },
    center: {
      flex: 1,
      padding: 0,
      margin: 0
    }
  });
  