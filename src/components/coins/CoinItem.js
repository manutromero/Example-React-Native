import React from 'react';
import {View, Text, StyleSheet, Image, Platform, Pressable} from 'react-native'
import Colors from 'crytoTracker/src/res/colors'

const CoinsItem = ( {item , onPress} ) => {

    getImgArrow = () =>{
        if(item.percent_change_1h > 0){
            return require("crytoTracker/src/assets/arrow_up.png")
        }else{
            return require("crytoTracker/src/assets/arrow_down.png")
        }
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolTex} >{item.symbol}</Text> 
                <Text style={styles.nameText} >{item.name}</Text> 
                <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.percentText}> {item.percent_change_1h}</Text>
                <Image style={styles.imgIcon} source={getImgArrow()} />
            </View>

        </Pressable>

      
    )

}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 16,
        justifyContent: "space-between",
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1,
        marginLeft: Platform.OS == "ios" ? 16 : 0
    },
    row:{
        flexDirection: "row"
    },
    symbolTex:{
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff",
        marginRight: 12
    },
    nameText: {
        color: "#fff",
        fontSize: 14,
        marginRight: 16
    },
    percentText: {
        fontSize: 12,
        color: "#fff",
        marginRight: 8
    },
    priceText:{
        color: "#fff",
        fontSize: 14,
    },
    imgIcon:{
        width: 22,
        height: 22
    }
})

export default CoinsItem;