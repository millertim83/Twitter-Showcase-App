import React from "react";
import "./FavoritesModal.css";
import check from "../images/check.png";
import heart from "../images/heart.png";
import retweet from "../images/retweet.png";


export default function FavoritesModal ({show, onClose, tweetTimeline, randomIndex}) {
    let tweet = tweetTimeline;
    
    if (!show) {
        return null;
    }
    
    return (
        tweetTimeline && randomIndex && (
        <div id="favorites-modal" className="container border border-dark">
            <div className="row">
                <div className="col-2">
                    <img id="profile-pic"
                        className="rounded-circle responsive-img"
                        src={tweet.includes.users[0].profile_image_url}
                        alt={tweet.includes.users[0].name}>
                    </img>
                </div>
                <div id="name" className="col-3">
                    <p>{tweet.includes.users[0].name} {tweet.includes.users[0].verified === true ? <img id="check" src={check}/> : null}</p>
                </div>  
                <div className="col-3">
                    <p id="username">{ `@${tweet.includes.users[0].username}` }</p>
                </div>
                <div className="col-4">
                    <p id="date">{tweet.data[randomIndex].created_at}</p>
                </div>
                
            </div>
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-10 text-start">
                    <p className="text-sm-start">{tweet.data[randomIndex].text}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <p>{<img id="heart" src={heart} alt="likes:" />} {tweet.data[randomIndex].public_metrics.like_count}</p>
                </div>
                <div className="col-6">
                    <p>{<img id="retweet" src={retweet} alt="retweets:" />} {tweet.data[randomIndex].public_metrics.retweet_count}</p>
                </div>
            </div>
            
            <button onClick={onClose}>Close</button>
        </div>
        )
    )
}
