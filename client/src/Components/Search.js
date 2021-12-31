import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Search.css";
import TweetCard from "./TweetCard.js";

function Search()  {
    
const [searchTerm, setSearchTerm] = useState("");
//const [tweetResults, setTweetResults] = useState([]);
const [userSearchResults, setUserSearchResults] = useState("");
const [show, setShow] = useState(false);
const [userID, setUserID] = useState("");


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
    setSearchTerm("garyvee");
    await axios.get(`/api/searchUsers?search=${searchTerm}`)
    .then(response => {
        if (response.data.errors) {
            alert("No users found!");
        } 
        setUserID(response.data.data.id);
        console.log(response.data.data.id);
        console.log(userID);
        //setShow(true);  
        searchTimelineByID();
    })   
}

async function searchTimelineByID() {
    setUserID("5768872");
    setShow(true);
    await axios.get(`/api/searchUserTimeline?ID=${userID}`)
    .then(response => setUserSearchResults(response.data))
}

    return (
        <div className = "body">
            <div className = "container">
                <div className = "row text-center align-items">
                    <div className = "col-12 text-center">
                        <h1>Search</h1>
                        <p>Search by username or tweet content.</p>
                        
                    </div>
                    <div>
                        <button onClick={searchTimelineByID}>Search by username</button>
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
//<button onClick={searchUsers}>Search by username</button>

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