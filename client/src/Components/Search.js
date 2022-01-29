import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Search.css";
import TweetCard from "./TweetCard.js";
import TopicSearchCards from "./TopicSearchCards";
import CloseTweetsButton from "./CloseTweetsButton";

function Search()  {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [tweetResults, setTweetResults] = useState([]);
    const [show, setShow] = useState(false);
    const [topicSearchTweets, setTopicSearchTweets] = useState([]);
    const [userInfo, setUserInfo] = useState("");
    
    
    useEffect(() => {
        console.log(tweetResults)
    }, [tweetResults]);

    async function searchUsers() {
        await axios.get(`/api/searchUsers?search=${searchTerm}`)
        .then(response => { 
            if (response.data.error) {
                alert("No user found by that name!");
                return;
            } 
            setTweetResults(response.data);
            setShow(true);
            setTopicSearchTweets([]);
        })   
    }

    async function searchTopics() {
        await axios.get(`/api/searchTopics?search=${searchTerm}`, {params: {_limit: 5}})
        .then(response => {
            if (response.data.error) {
                alert("No topics found!");
                return;
            }
            //setShow(true);
            setTopicSearchTweets(response.data);
            setTweetResults([]);
        }).catch((error) => console.log(error))
    }

    let topicSearchCards = 
        <div id="topic-search-cards" className="container-sm mt-1">
            {topicSearchTweets.map((tweet, i) =>
            <TopicSearchCards
                onClose={() => setShow(false)}
                show={show}
                topicSearchTweets={topicSearchTweets}
                tweet={tweet}
                key={i}
            />
            )}
        </div>

    let userSearchCards = 
        <div id="user-search-cards" className="container-sm mt-1">
            {tweetResults.map((tweet, i) =>
            <TweetCard
                onClose={() => setShow(false)} 
                show={show}
                tweetResults={tweetResults}
                tweet={tweet}
                key={i}
            />
            )}
        </div>
    
    function closeTweets() {
        setShow(false);
        setTweetResults([]);
        setTopicSearchTweets([]);
    }
    


    return (
        <div className = "body">
            <div id="banner" className = "row align-items">
                <div className = "text-center">
                    <h2>Search</h2>
                    <p>Search by username or tweet content.</p>
                </div>
            </div>   
            <div className = "container"> 
               <div className="row mb-0">
                    <form className="text-center form-control-lg mr-1">
                        <input
                            value={searchTerm}
                            type="text"
                            placeholder="Enter search here.."
                            className="form-control-sm"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            autoFocus
                        >
                        </input>
                        <button type="button" className="btn mb-0 ml-1 mr-1" id="user-btn" onClick={searchUsers}>username</button>
                        <button type="button" className="btn mb-0 ml-1" id="topic-btn" onClick={searchTopics}>topic</button>
                    </form>
                        
                </div>
                <div className="row mb-2">
                    <CloseTweetsButton
                        show={show}
                        closeTweets={closeTweets}
                    />
                </div>
                    
                <div className="row">
                    <div id="topic-modal" className="m-auto container container-sm">
                        {topicSearchCards}
                    </div>
                    <div id="modal" className="pt-3 mt-2 m-auto container container-sm">
                        {userSearchCards}
                    </div>
                        
                </div>
            </div>
        </div>
    );
}

export default Search


                       

            

