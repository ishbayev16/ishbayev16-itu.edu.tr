import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useYelpResults from '../hooks/useYelpResults';
import ResultsList from '../Components/ResultsList';


const SearchScreen = ({navigation}) => {
    const[term, setTerm] = useState('');
    const[searchApi, results, errorMessage] = useYelpResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result=>{
            return result.price === price;
        })
    };

    return(
        <View style={{flex: 1}}>
            <SearchBar 
                term={term} 
                onTermChange = {(newTerm)=>setTerm(newTerm)}
                onTermSubmit = {(newTerm)=>searchApi(newTerm)}
                />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text style={{marginLeft: 15}}>we have found {results.length} results</Text>
            <ScrollView>
            <ResultsList results = {filterResultsByPrice('$')} 
                    title="Cost Effective"
                    navigation={navigation}/>
            <ResultsList results = {filterResultsByPrice('$$')} 
                    title="Bit Pricier"
                    navigation={navigation}/>
            <ResultsList results = {filterResultsByPrice('$$$')} 
                    title="Big Spencer"
                    navigation={navigation}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default SearchScreen;