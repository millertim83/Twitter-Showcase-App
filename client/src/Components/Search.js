import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Search.css";
import TweetCard from "./TweetCard.js";

function Search()  {
    
const [searchTerm, setSearchTerm] = useState("");
//const [tweetResults, setTweetResults] = useState([]);
const [userSearchResults, setUserSearchResults] = useState("");
const [show, setShow] = useState(false);


    /*useEffect(() => {
        searchTweets();
    }, []);*/

   /* async function handleUserSearch(e) {
        e.preventDefault();
        await axios.get(`/api/searchUsers?search=${searchTerm}`)
        .then(response => setUserSearchResults(response.data));
        console.log(response.data)
    }*/

async function searchUsers() {
    setShow(true);
    //handleUserSearch(e);
    //setSearchTerm("elonmusk");
    //axios.get(`/api/searchUsers?search=${searchTerm}`)
    await axios.get("/api/searchUsers")
    .then(response => setUserSearchResults(response.data));
    
}

/*const handleChange = (e) => {
    setSearchTerm(e.target.value);
}*/



/*
    const dogSearch = {
        "data": [
            {
                "id": "1472252603849494538",
                "author_id": "2366322079",
                "public_metrics": {
                    "retweet_count": 15,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "text": "RT @AdoptionsUk: Please retweet to help Holly find a home #EDINBURGH #SCOTLAND🏴󠁧󠁢󠁳󠁣󠁴󠁿\nCollie cross aged 10, long overlooked. She is looking…",
                "created_at": "2021-12-18T17:09:08.000Z"
            },
            {
                "id": "1472252601928282117",
                "author_id": "1355566315638034433",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "text": "250 dogs killed in a single village?\nThat's massacre by monkeys\nIt was the pup's fault for killing the baby monkey but the response by monkeys has been disproportionate in nature and intensity. Age old rivalry revived and so many victims. https://t.co/5JZTQE11Ef",
                "created_at": "2021-12-18T17:09:08.000Z"
            },
            {
                "id": "1472252599109701632",
                "author_id": "1288170655",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "text": "Akak aku nak cakap stray dogs and stray cats. TAPI TERCAKAP STRAY DOGS AND STRAYKIDZ JSKSJSKSJSK",
                "created_at": "2021-12-18T17:09:07.000Z"
            },
            {
                "id": "1472252585264488453",
                "author_id": "1382950117817344001",
                "public_metrics": {
                    "retweet_count": 34,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "text": "RT @AdoptionsUk: Please retweet to help Lulu find a home #SCOTLAND \n\n#Malamute aged 8, NO APPLICATIONS IN OVER 400 DAYS💔 She's looking for…",
                "created_at": "2021-12-18T17:09:04.000Z"
            },
            {
                "id": "1472252584538877955",
                "author_id": "367716920",
                "public_metrics": {
                    "retweet_count": 607,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "text": "RT @buitengebieden_: Dogs vs cat.. 😅 https://t.co/K36ncnyNvp",
                "created_at": "2021-12-18T17:09:03.000Z"
            },
            {
                "id": "1472252584299835395",
                "author_id": "1295383677745201153",
                "public_metrics": {
                    "retweet_count": 67,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "text": "RT @moneyminxg: If your dog starts barking at you, someone else is feeding it. \n\nThis tweet isn't just about dogs.",
                "created_at": "2021-12-18T17:09:03.000Z"
            },
            {
                "id": "1472252582185820163",
                "author_id": "1243995083734757376",
                "public_metrics": {
                    "retweet_count": 260,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "text": "RT @AdoptionsUk: Please retweet to help Veggie find a home #PORTSMOUTH #UK\nBeen in the shelter 4 times since 2013 AND OVER A YEAR THIS TIME…",
                "created_at": "2021-12-18T17:09:03.000Z"
            },
            {
                "id": "1472252582076813314",
                "author_id": "1215026249409712129",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "text": "I wish these monkeys would feel for the dogs, and grab fauci https://t.co/BQTbc502to",
                "created_at": "2021-12-18T17:09:03.000Z"
            },
            {
                "id": "1472252581808324615",
                "author_id": "2810427675",
                "public_metrics": {
                    "retweet_count": 2,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "text": "RT @AnnaVic88472217: Before March 2020 lock down I was on top of my health problems. Walking my Dogs in the park. When we could not rest ,…",
                "created_at": "2021-12-18T17:09:03.000Z"
            },
            {
                "id": "1472252581305008137",
                "author_id": "799120604",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "text": "WINNER DOGS LETS GOOO",
                "created_at": "2021-12-18T17:09:03.000Z"
            }
        ],
        "includes": {
            "users": [
                {
                    "id": "2366322079",
                    "name": "Mike Clifford⚠️🇮🇪🇮🇩🏀🎸",
                    "username": "Dc930Mike"
                },
                {
                    "id": "1355566315638034433",
                    "name": "Kashish Shah",
                    "username": "kashishshah99"
                },
                {
                    "id": "1288170655",
                    "name": "sonu /~ㅇ~\\",
                    "username": "chimjjaen"
                },
                {
                    "id": "1382950117817344001",
                    "name": "Matt Alexander",
                    "username": "markjonesblue"
                },
                {
                    "id": "367716920",
                    "name": "Midwest jj",
                    "username": "MWjamminj"
                },
                {
                    "id": "1295383677745201153",
                    "name": "Brianna 💞",
                    "username": "baadgalbrianna"
                },
                {
                    "id": "1243995083734757376",
                    "name": "theresa",
                    "username": "terryenvision"
                },
                {
                    "id": "1215026249409712129",
                    "name": "SPACE MOUSE",
                    "username": "MOMAGA45"
                },
                {
                    "id": "2810427675",
                    "name": "Huey Freeman",
                    "username": "decaturlegends"
                },
                {
                    "id": "799120604",
                    "name": "Forty",
                    "username": "EggsIsTheName"
                }
            ]
        },
        "meta": {
            "newest_id": "1472252603849494538",
            "oldest_id": "1472252581305008137",
            "result_count": 10,
            "next_token": "b26v89c19zqg8o3fpe166hhkwoq068kqwza0oy6zzw6f1"
        }
    }

    let tweets=dogSearch.data;
    let users=dogSearch.includes.users;
    */

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
                    </div>
                    
                    
                    <div id="modal" className="container container-sm">
                        <TweetCard 
                            onClose={() => setShow(false)} 
                            show={show}
                            userSearchResults={userSearchResults}
                             />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
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
                                //onChange={handleChange}
                                autoFocus
                            >
                            </input>
                            
                        </form>
                        */