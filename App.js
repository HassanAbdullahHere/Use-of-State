import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Linking, Pressable, StyleSheet, Text, Touchable, TouchableHighlight, View } from 'react-native';

export default function App() {
  
  const [num,setNum] = useState(0);
  const [count,setcount] = useState(0);

  const OnClickHandler = ()=>{
    setNum(num+5);
    setcount(count+1);
  }
  const ClearHandler = ()=>{
    setNum(0);
    setcount(0);
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Text style={styles.TextStyle}>Number: {num}</Text>
      <Button  title='Press' onPress={OnClickHandler}></Button>
      <Text style={styles.TextStyle}>You Pressed {count} Times!</Text>
      <Button style = {styles.ButtonStyle} title='Clear' onPress={ClearHandler}></Button>
      </View>
      <View style ={styles.container1}>
      <Button title='LinkedIn Profile' onPress={()=> Linking.openURL("https://www.linkedin.com/in/hassan--abdullah/")}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BAD1C2',

  },
  
  container1: {
    flex: 0.4,
    backgroundColor: '#00ABB3',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  container2: {
    flex: 0.6,
    backgroundColor: '#3C2317',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  TextStyle:{
    fontSize: 20,
    fontFamily:'sans-serif',
    fontStyle: 'italic',
    fontWeight: "bold",
    margin: 15,
    color: "#F5EFE6"
  },

  
});
