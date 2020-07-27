import React from 'react'
import { View } from 'react-native'


function index(props){

    let styles= {}

    if( props.tiny )
        styles.marginVertical= 10
    
    if( props.small )
        styles.marginVertical= 20

    if(props.big)
        styles.marginVertical= 30

    return(
        <View style={ styles }>

        </View>
    )
}


export default index