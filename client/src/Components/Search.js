import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
    

    

    /*const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        searchTweets();
    }, []);

    const searchTweets = (e) => {
        e.preventDefault();
        console.log('searchTweets function is running.');

        const searchTerm = 'elonmusk';
        axios.get(`https://api.twitter.com/2/tweets/search/recent?query=${searchTerm}`).then((response) => {
            setSearchResults(response.data.statuses);
            console.log('search response: ', response);
        });
    };
    */



    return (
        <div className = "body">
            <div className = "container">
                <div className = "row">
                    <div className = "container col-4">
                        
                        <div className = "container">
                            
                        </div>
                    </div>
                    <div className = "col-8">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;