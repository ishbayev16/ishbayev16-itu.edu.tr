import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from '../Components/ResultsDetail';

const ResultsList =({title, results, navigation})=>{
        if(!results.length){
            return null;
        }


    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={{marginLeft: 15}}>size: {results.length}</Text>
    
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=>result.id}
                renderItem = {({item})=>{
                return (
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('ResultsShow', {id:item.id})}>
                    <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight:'bold',
        marginLeft: 15
    },
    container:{
        minHeight: 250,
        marginBottom: 10
    }
})

export default ResultsList;