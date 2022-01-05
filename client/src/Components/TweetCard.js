import React from "react";
import "./TweetCard.css";
import check from "../images/check.png";
import heart from "../images/heart.png";
import retweet from "../images/retweet.png";

export default function TweetCard({ show, onClose, tweetResults, userInfo, tweet }) {
    

    if (!show) {
        return null;
    }
    
    
    return (
        tweetResults && (
            <div>
                <div id="tweet-modal" className="container">
                    <div className="row">
                        <div className="col-2">
                            <img id="profile-pic"
                            className="rounded-circle responsive-img"
                            src={userInfo.profile_image_url}
                            alt={userInfo.name}>
                            </img>
                        </div>
                        <div id="name" className="col-3">
                            <p>{userInfo.name} {userInfo.verified === true ? <img id="check" src={check}/> : null}</p>
                        </div>  
                        <div className="col-3">
                            <p id="username">{ `@${userInfo.username}` }</p>
                        </div>
                        <div className="col-4">
                            <p id="date">{tweet.created_at}</p>
                        </div>
    
                    </div>
                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-10 text-start">
                            <p className="text-sm-start">{tweet.text}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p>{<img id="heart" src={heart} alt="likes:" />} {tweet.public_metrics.like_count}</p>
                        </div>
                        <div className="col-6">
                            <p>{<img id="retweet" src={retweet} alt="retweets:" />} {tweet.public_metrics.retweet_count}</p>
                        </div>
                    </div>
                </div>
                    <button onClick={onClose}>Close</button>  
            </div> 
        )  
    );
}
/*
<div className="container border">
                    <p>{tweet.text}</p>  
                    <p>{userInfo.username}</p>
                </div>
                */

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