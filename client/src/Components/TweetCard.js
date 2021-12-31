import React from "react";
import "./TweetCard.css";
import check from "../images/check.png";
import heart from "../images/heart.png";
import retweet from "../images/retweet.png";

export default function TweetCard({ show, onClose, userSearchResults }) {
    let user = userSearchResults;
    
    if (!show) {
        return null;
    }
    

    
    return (
        userSearchResults && (
        <div>
            <div>
                <p>{user.includes.users[0].name}</p>
                <p>{user.data[0].text}</p>
            </div>
            <button onClick={onClose}>Close</button>
            
        </div> 
        )  
    );
}

/*
<div id="tweet-modal" className="container">
<div className="row">
    <div className="col-2">
        <img id="profile-pic"
            className="rounded-circle responsive-img"
            src={users[0].profile_image_url}
            alt={users[0].name}>
        </img>
    </div>
    <div id="name" className="col-3">
        <p>{users[0].name} {users[0].verified === true ? <img id="check" src={check}/> : null}</p>
    </div>  
    <div className="col-3">
        <p id="username">{ `@${users[0].username}` }</p>
    </div>
    <div className="col-4">
        <p id="date">{tweets[0].created_at}</p>
    </div>
    
</div>
<div className="row">
    <div className="col-2">

    </div>
    <div className="col-10 text-start">
        <p className="text-sm-start">{tweets[0].text}</p>
    </div>
</div>
<div className="row">
    <div className="col-6">
        <p>{<img id="heart" src={heart} alt="likes:" />} {tweets[0].public_metrics.like_count}</p>
    </div>
    <div className="col-6">
        <p>{<img id="retweet" src={retweet} alt="retweets:" />} {tweets[0].public_metrics.retweet_count}</p>
    </div>
</div>
    
    <button onClick={onClose}>Close</button>


</div>    
*/       