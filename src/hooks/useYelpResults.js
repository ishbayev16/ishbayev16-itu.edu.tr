import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
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

    const searchApi = async (searchTerm) =>{
        try{
        const response = await yelp.get('/search',{
            params: {
                limit: 50,
                 term: searchTerm,
                location: 'New York'
            }
        }); 
        setResults(response.data.businesses);
    }catch(err){
        setErrorMessage('Something went wrong');
    }
    };

    useEffect( () => {
        searchApi('pasta');
    }, [])

    return [searchApi, results, errorMessage];

};