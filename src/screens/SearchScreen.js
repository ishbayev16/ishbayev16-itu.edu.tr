import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const[term, setTerm] = useState('');
    const[results, setResults] = useState([]);
    const[errorMessage, setErrorMessage] = useState('');

    // const searchApi = () =>{
    //     yelp.get('/search',{
    //         params: {
    //             limit: 50,
    //              term,
    //             location: 'New York'
    //         }
    //     }).then(response=>{
    //         console.log('res',response);
    //         setResults(response.data.businesses);
    //     }).catch(err=>{
    //         console.log('err', err);
    //     });
        
    // };

    const searchApi = async () =>{
        try{
        const response = await yelp.get('/search',{
            params: {
                limit: 50,
                 term,
                location: 'New York'
            }
        }); 
        setResults(response.data.businesses);
    }catch(err){
        setErrorMessage('Something went wrong');
    }
    };

    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange = {(newTerm)=>setTerm(newTerm)}
                onTermSubmit = {searchApi}
                />
            <Text>{errorMessage}</Text>
    <Text>we have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default SearchScreen;