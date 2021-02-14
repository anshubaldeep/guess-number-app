import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../constants/colors';


const NumberContainer=(props)=>{
        return(
            
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{props.selectedNumber}</Text>
            </View>
        );
};


const styles=StyleSheet.create({
    numberContainer:{
        borderWidth:2,
        borderColor:colors.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        color:colors.accent,
        fontSize:22
    }
});

export default NumberContainer;