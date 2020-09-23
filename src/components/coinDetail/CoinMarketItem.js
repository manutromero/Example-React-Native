import React, {Component} from 'react';
import {View,Image,Text, SectionList, StyleSheet, FlatList} from 'react-native'
import Colors from 'crytoTracker/src/res/colors'

const CoinDetailScreen = ({item}) => {


   
        return(
            <View style={styles.container}>

                 <Text style={styles.NameText}>{item.name}</Text> 
                 <Text style={styles.priceText}>{item.price_usd}</Text> 
            </View>
        )

    

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderColor: Colors.zircon,
        borderWidth: 1,
        padding: 16,
        marginRight: 8,
        alignItems: "center"
        },
    NameText:{
        backgroundColor: "white",
        fontWeight: "bold"
    },
    priceText:{
        color: "#fff"
    }
})

export default CoinDetailScreen;