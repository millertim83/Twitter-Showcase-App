import React from "react";
import "./FavoritesModal.css";
import check from "../images/check.png";
import heart from "../images/heart.png";
import retweet from "../images/retweet.png";


export default function FavoritesModal ({show, onClose, tweetTimeline, randomIndex}) {
    let tweet = tweetTimeline;

    function formatTweetTime(createdAt) {
        let now = new Date();
        let dateArray = createdAt.split("-");
        let year = dateArray[0];
        let month = dateArray[1];
        let unsplitDay = dateArray[2];
        let timeArray = unsplitDay.split("T");
        let day = timeArray[0];
        let unsplitTime = timeArray[1];
        let splitTime = unsplitTime.split(":");
        let hour = splitTime[0] - 5;
        let minute = splitTime[1];
        let unsplitSeconds = splitTime[2];
        let splitSeconds = unsplitSeconds.split(".");
        let seconds = splitSeconds[0];
        let tweetDate = new Date (year, month, day, hour, minute, seconds);
        //displayed time should = # of minutes since tweet
        let displayedTime = ((tweetDate - now)/ 1000)/60;
        return displayedTime;
    }
    
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
                    <p id="date">{formatTweetTime(tweet.data[randomIndex].created_at)}</p>
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
