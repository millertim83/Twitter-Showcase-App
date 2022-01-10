import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Search.css";
import TweetCard from "./TweetCard.js";

function Search()  {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [tweetResults, setTweetResults] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [show, setShow] = useState(false);
    const [topicSearchTweets, setTopicSearchTweets] = useState([]);
    
    
    /*
    useEffect(() => {
        console.log(tweetResults)
    }, [tweetResults])
    */

    useEffect(() => {
        console.log(topicSearchTweets)
    }, [topicSearchTweets])
    
    async function searchUsers() {
        await axios.get(`/api/searchUsers?search=${searchTerm}`)
        .then(response => {  
            setTweetResults(response.data.data);
            setUserInfo(response.data.includes.users[0]);
            setShow(true);
        })   
    }

    async function searchTopics() {
        await axios.get(`/api/searchTopics?search=${searchTerm}`)
        .then(response => {
            setTopicSearchTweets(response.data);
        })
    }

    let userSearchCards = 
        <div>
            {tweetResults.map((tweet) =>
            <TweetCard
                onClose={() => setShow(false)} 
                show={show}
                tweetResults={tweetResults}
                userInfo={userInfo}
                tweet={tweet}
             />
            )}
        </div>
    


    return (
        <div className = "body">
            <div className = "container">
                <div className = "row text-center align-items">
                    <div className = "col-12 text-center">
                        <h1>Search</h1>
                        <p>Search by username or tweet content.</p>
                        
                    </div>
                    <div>
                        <form className="text-center form-control-lg">
                            <input
                                value={searchTerm}
                                type="text"
                                placeholder="Enter search here.."
                                className="form-control-sm"
                                onChange={(e) => setSearchTerm(e.target.value)}
                                autoFocus
                            >
                            </input>
                            <button type="button" className="btn-warning" onClick={searchUsers}>Search by username</button>
                            <button type="button" className="btn btn-warning" onClick={searchTopics}>Search by topic</button>
                        </form>
                        
                    </div>
                    
                    
                    <div id="modal" className="container container-sm">
                        {userSearchCards}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search


                       

            

