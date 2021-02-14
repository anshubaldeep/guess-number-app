import React from 'react';
import { StyleSheet, View} from 'react-native';


const Card=(props)=>{
        return(
            <View style={{...styles.card,...props.style}}>
                {props.children}
            </View>
        );
};


const styles=StyleSheet.create({
    card:{
        shadowColor:'black',
        shadowOpacity:0.6,
        shadowRadius:6,
        elevation:8,
        backgroundColor:'#ffffff',
        padding:12,
        paddingBottom:25,
        marginTop:20
    }
});

export default Card;