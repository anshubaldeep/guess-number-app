import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';


const GenerateRandomBetween=(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const randomNumber=Math.floor(Math.random() * (max-min))+min ;
    if(randomNumber===exclude){
        return GenerateRandomBetween(min,max,exclude);
    }
    else{
        return randomNumber;
    }
}


const GameScreen=(props)=>{
    const [currentGuess,setGuess]=useState(GenerateRandomBetween(1,100,props.selectedNumber));
    const [win,setWin]=useState(false);
    const currentLow=useRef(1);
    const currentHigh=useRef(100);
    let numberOfGuesses=useRef(0);
    useEffect(()=>{
        if(currentGuess===props.selectedNumber){
            Alert.alert('Your number is: '+currentGuess,'Number of guess took: '+numberOfGuesses.current);
        }
        const num=numberOfGuesses.current+1;
        numberOfGuesses.current=num;
        setWin(true);
    })
    console.log(win);
    const nextGuessHandler=(direction)=>{
        
        if((direction==='lower' && currentGuess<props.selectedNumber) || (direction==='higher' && currentGuess>props.selectedNumber)){
            Alert.alert('Do not lie mf','You know this shit wrong!!',[{text:'Be Intelligent!',style:'cancel'}])
            return;
        }
        if(direction==='lower')
        {
            currentHigh.current=currentGuess;
        }
        else if(direction==='higher'){
            currentLow.current=currentGuess;
        }
        const nextGuess=GenerateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
        setGuess(nextGuess);
    }

    return(
            <View style={styles.screen}>
                <Text>Computer's Guess:</Text>
                <NumberContainer selectedNumber={currentGuess}/>
                <Card style={styles.ButtonContainer}>
                    <View><Button title='Lower' onPress={()=>nextGuessHandler('lower')}/></View>
                    <View><Button title='Higher' onPress={()=>nextGuessHandler('higher')}/></View>
                </Card>
            </View>
        );
};


const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    ButtonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }
});

export default GameScreen;