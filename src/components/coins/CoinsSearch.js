import React, {  Component } from 'react';
import {View, TextInput, Platform ,StyleSheet} from 'react-native'
import Colors from 'crytoTracker/src/res/colors'

class CoinsSearch extends Component{

    state = {
        query: ""
    }

    handleText = (query) => {
        this.setState({query})

        if(this.props.onChange){
            this.props.onChange(query);
        }
    }

    render(){ 
        const {query} = this.state;
        return (
            <View>
                <TextInput
                    onChangeText={this.handleText}
                    value={query}
                    placeholder="Search Coin"
                    placeholderTextColor="#fff"
                    style={[styles.TextInput, Platform.OS="ios" ? styles.TextInputIOS : styles.TextInputAndroid]}
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    TextInput:{
        height: 46,
        backgroundColor: Colors.charade,
        paddingLeft: 16,
        color: "#FFF"
    },
    TextInputAndroid:{
        borderWidth: 2,
        borderBottomColor: Colors.zircon
    },
    TextInputIOS:{
        borderRadius: 8,
        margin: 8
    }
})

export default CoinsSearch;