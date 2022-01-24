import React from "react";
import "./TweetCard.css";
import check from "../images/check.png";
import heart from "../images/heart.png";
import retweet from "../images/retweet.png";

export default function topicSearchCards({ show, onClose, topicSearchTweets, tweet }) {
    function formatTweetTime(createdAt) {
        let dateArray = createdAt.split("-");
        let year = dateArray[0];
        let month = dateArray[1];
        switch (month) {
            case "01": 
                month = "Jan";
            break;
            case "02": 
                month = "Feb";
            break;
            case "03": 
                month = "March";
            break;
            case "04": 
                month = "April";
            break;
            case "05": 
                month = "May";
            break;
            case "06": 
                month = "June";
            break;
            case "07": 
                month = "July";
            break;
            case "08": 
                month = "Aug";
            break;
            case "09": 
                month = "Sep";
            break;
            case "10": 
                month = "Oct";
            break;
            case "11": 
                month = "Nov";
            break;
            case "12": 
                month = "Dec";
        }
        let unsplitDay = dateArray[2];
        let timeArray = unsplitDay.split("T");
        let day = timeArray[0];
        let unsplitTime = timeArray[1];
        let splitTime = unsplitTime.split(":");
        let hour = splitTime[0];
        switch(hour) {
            case "00":
                hour = 19;
                break;
            case "01":
                hour = 20;
                break;
            case "02":
                hour = 21;
                break;
            case "03":
                hour = 22;
                break;
            case "04":
                hour = 23;
                break;
            case "05":
                hour = "00";
                break;
            case "06":
                hour = "01";
                break;
            case "07":
                hour = "02";
                break;
            case "08":
                hour = "03";
                break;
            case "09":
                hour = "04";
                break;
            case "10":
            case "11":
            case "12":
            case "13":
            case "14":
                hour = (`0${hour - 5}`);
                break;
            case "15":
            case "16":
            case "17":
            case "18":                   
            case "19":
            case "20":
            case "21":
            case "22":
            case "23":          
                hour = hour - 5;
        }
        let minute = splitTime[1];
        let unsplitSeconds = splitTime[2];
        let splitSeconds = unsplitSeconds.split(".");
        let seconds = splitSeconds[0];
        let displayedTime = (`${month} ${day} ${year} ${hour}:${minute}:${seconds}EST`);
        return displayedTime;
    }
    
    if (!show) {
        return null;
    }

    return (
        topicSearchTweets && (
            <div>
                <div id="tweet-modal" className="container mb-2" key={tweet.id}>
                    <div className="row">
                        <div className="col-2">
                            <img id="profile-pic"
                            className="rounded-circle responsive-img"
                            src={tweet.profile_image_url}
                            alt={tweet.name}>
                            </img>
                        </div>
                        <div id="name" className="col-3">
                            <p>{tweet.name} {tweet.verified === true ? <img id="check" src={check}/> : null}</p>
                        </div>  
                        <div className="col-3">
                            <p id="username">{ `@${tweet.username}` }</p>
                        </div>
                        <div className="col-4">
                            <p id="date">{formatTweetTime(tweet.created_at)}</p>
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
    )
}