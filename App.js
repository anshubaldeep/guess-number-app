import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './Screens/GameScreen';
import StartGameScreen from './Screens/StartGameScreen';


export default function App() {
  const [userNumber,setSelectedNumber]=useState();

  const StartGameHandler=(selectedNumber)=>{
    setSelectedNumber(selectedNumber);
  }

  let content=<StartGameScreen startButtonPress={StartGameHandler}/>

  
  if(userNumber){
    content=<GameScreen selectedNumber={userNumber}/>
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a number'/>
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
      flex:1
    }
});
