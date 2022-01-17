import React from "react";
import "./TweetCard.css";
import check from "../images/check.png";
import heart from "../images/heart.png";
import retweet from "../images/retweet.png";

export default function TweetCard({ show, tweetResults, userInfo, tweet }) {
    if (!show) {
        return null;
    }
    
    return (
        tweetResults && (
            <div>
                <div id="tweet-modal" className="container mb-2" key={userInfo.id}>
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
            </div> 
        )  
    );
}




    