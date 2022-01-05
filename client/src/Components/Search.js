import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Search.css";
import TweetCard from "./TweetCard.js";

function Search()  {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [tweetResults, setTweetResults] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [show, setShow] = useState(false);
    const [userID, setUserID] = useState("");

    useEffect(() => {
        console.log(tweetResults)
    }, [tweetResults])

    const userSearchResponse = {
    "data": [
        {
            "id": "1478428030854959110",
            "text": "RT @TeamGaryVee: Happy New Year!\n\nTune in for a very special announcement later today at 5pm Eastern!\n\n@garyvee will be going live with @Mi…",
            "created_at": "2022-01-04T18:08:05.000Z",
            "author_id": "5768872",
            "public_metrics": {
                "retweet_count": 27,
                "reply_count": 0,
                "like_count": 0,
                "quote_count": 0
            }
        },
        {
            "id": "1478408418331435022",
            "text": "@Mistadobalina6 HAHAHA",
            "created_at": "2022-01-04T16:50:09.000Z",
            "author_id": "5768872",
            "public_metrics": {
                "retweet_count": 1,
                "reply_count": 4,
                "like_count": 6,
                "quote_count": 1
            }
        },
        {
            "attachments": {
                "media_keys": [
                    "16_1478402668003532807"
                ]
            },
            "id": "1478402677805572102",
            "text": "looking for a few VERY serious Wrestling cards graded psa10 and pre 1970 Basketball that are off the beaten path lmk! https://t.co/XNHFvqbWKh",
            "created_at": "2022-01-04T16:27:20.000Z",
            "author_id": "5768872",
            "public_metrics": {
                "retweet_count": 47,
                "reply_count": 176,
                "like_count": 637,
                "quote_count": 3
            }
        },
        {
            "id": "1478394194154643456",
            "text": "@Stretch4141 Dinner than they think",
            "created_at": "2022-01-04T15:53:37.000Z",
            "author_id": "5768872",
            "public_metrics": {
                "retweet_count": 1,
                "reply_count": 8,
                "like_count": 17,
                "quote_count": 0
            }
        },
        {
            "id": "1478388237626400774",
            "text": "https://t.co/0sKPyeBpDx seee u soon ! 5pm EST",
            "created_at": "2022-01-04T15:29:57.000Z",
            "author_id": "5768872",
            "public_metrics": {
                "retweet_count": 52,
                "reply_count": 76,
                "like_count": 363,
                "quote_count": 5
            }
        }
    ],
    "includes": {
        "users": [
            {
                "id": "5768872",
                "verified": true,
                "public_metrics": {
                    "followers_count": 2763610,
                    "following_count": 16877,
                    "tweet_count": 200683,
                    "listed_count": 32551
                },
                "username": "garyvee",
                "profile_image_url": "https://pbs.twimg.com/profile_images/1268176490979561472/aorwOh3s_normal.jpg",
                "name": "Gary Vaynerchuk"
            }
        ]
    },
    "meta": {
        "oldest_id": "1478388237626400774",
        "newest_id": "1478428030854959110",
        "result_count": 5,
        "next_token": "7140dibdnow9c7btw3z3q7r5red9m7xkvny77o8w4f12s"
    }
    }

    async function searchUsers() {
        setSearchTerm("garyvee");
        await axios.get(`/api/searchUsers?search=${searchTerm}`)
        .then(response => {  
            setUserID(response.data.data.id);
            //searchTimelineByID();
            //setShow(true);
        })   
    }
    //hardcoded data
    /*
    function searchTimelineByID() {
        setUserID("5768872");
        setTweetResults(userSearchResponse.data);
        setUserInfo(userSearchResponse.includes.users[0]);
        //await axios.get(`/api/searchUserTimeline?ID=${userID}`)
        //.then(response => {
        //    setTweetResults(response.data.data);
            setShow(true);
        //})   
    }
    */

    //twitter API call
    async function searchTimelineByID() {
        setUserID("5768872");
        setUserInfo(userSearchResponse.includes.users[0]);
        await axios.get(`/api/searchUserTimeline?ID=${userID}`)
        .then(response => {
            setTweetResults(response.data.data);
            setUserInfo(response.data.includes.users[0]);
            setShow(true);
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
                        <button onClick={searchUsers}>Search by username</button>
                        <button onClick={searchTimelineByID}>Search by ID</button>
                    </div>
                    
                    
                    <div id="modal" className="container container-sm">
                        {userSearchCards}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
//<button onClick={searchUsers}>Search by username</button>
//onClick={searchTimelineByID}>Search by username

//<button type="button" className="btn btn-warning" onClick={searchUsers}>Search by user</button>

//tweets={tweets}
//users={users}

//tweetResults={tweetResults}
//userResults={userResults}

//<button type="button" className="btn btn-warning" onClick={searchTopics}>Search by topic</button>

//<button onClick = {() => { setShow(true)  }}>Search</button>
/*                        
<form className="text-center form-control-lg">
                            <input
                                //value={searchTerm}
                                type="text"
                                placeholder="Enter search here.."
                                className="form-control-sm"
                                //onChange={(e) => setSearchTerm(e.target.value)}
                                autoFocus
                            >
                            </input>
                            
                        </form>
                        */

/*                        
if (response.data.id) {
    setUserID(response.data.id)
    searchTimelineById();
} return (alert("No user found with that name!"))
*/

 //handleUserSearch(e);
    //setSearchTerm("elonmusk");
    //axios.get(`/api/searchUsers?search=${searchTerm}`)

/*
    async function searchUsers() {
        setSearchTerm("garyvee");
        await axios.get(`/api/searchUsers?search=${searchTerm}`)
        .then(response => {  
            setUserSearchResults(response.data);
            setShow(true);
        })   
    }
*/