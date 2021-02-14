import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';


const StartGameScreen=(props)=>{
        const [enteredValue,setEnteredValue]=useState('');
        const [confirmed,setConfirmed]=useState(false);
        const [selectedNumber,setSelectedNumber]=useState('');
        const inputHandler=(text)=>{
            setEnteredValue(text.replace(/[^0-9]/g,''));
        }

        const resetInputHandler=()=>{
            setEnteredValue('');
            setConfirmed(false);
        }

        const confirmInputHandler=()=>{
            const chosenNumber=parseInt(enteredValue);
            if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
                Alert.alert(
                    'Chosen number is not valid!',
                    'Enter a number between 1-99',
                    [{text:'Okay',style:'destructive',onPress:resetInputHandler}]);
                return;
            }
            setSelectedNumber(chosenNumber);
            setEnteredValue('');
            setConfirmed(true);
            Keyboard.dismiss();
        }


        let confirmedOutput;
        if(confirmed){
            confirmedOutput=<Card style={styles.summaryContainer}>
            <Text>Chosen Number is:</Text>
            <NumberContainer selectedNumber={selectedNumber}/>
            <View><Button title='Start Game' color={Colors.accent} onPress={()=>props.startButtonPress(selectedNumber)}/></View>
            </Card>
        }
        return(
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss()
            }}>
            <View style={styles.screen}>
                <Text>Start A New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}>Select a number!</Text>
                    <Input keyboardType='number-pad' maxLength={2} blurOnSubmit={true} style={styles.input} onChangeText={inputHandler} value={enteredValue}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button color={Colors.accent} title='Reset' onPress={resetInputHandler}/></View>
                        <View style={styles.button}><Button color={Colors.primary} title='Confirm' onPress={confirmInputHandler}/></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
            </TouchableWithoutFeedback>
        );
};


const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    button:{
        width:90
    },
    input:{
        width:50,
        marginBottom:30,
        textAlign:'center'
    },
    confirmedOutput:{
        alignItems:'center',
        marginTop:40
    },
    summaryContainer:{
        alignItems:'center',
        marginTop:40
    },
    selectedNumber:{
        width:'100%'
    }
});

export default StartGameScreen;