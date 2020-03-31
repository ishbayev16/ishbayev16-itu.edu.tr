import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                // onChangeText={newTerm => onTermChange(newTerm)}
                onChangeText={onTermChange}
                onEndEditing={()=>onTermSubmit()}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 20,
        borderRadius: 10,
        flex: 1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
    
})

export default SearchBar;