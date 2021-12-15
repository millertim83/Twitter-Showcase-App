import React from "react";
import "./FavoritesModal.css";

export default function FavoritesModal ({show, onClose, tweetTimeline, randomIndex}) {
    let tweet = tweetTimeline;
    //const randomIndex = Math.floor(Math.random() * 10);
    
    
    if (!show) {
        return null
    }
    
    return (
        tweetTimeline && (
        <div id="favorites-modal" className="container border border-dark">
            <div className="row">
                <div className="col-3">
                    <img id="profile-pic"
                        className="rounded-circle responsive-img"
                        src={tweet.includes.users[0].profile_image_url}
                        alt={tweet.includes.users.name}>
                    </img>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-12">
                            <p>{tweet.includes.users[0].name}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>{ `@${tweet.includes.users[0].username}` }</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div>
                    <p>{tweet.data[0].text}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <p>{ `@ ${tweet.data[0].public_metrics.like_count}`}</p>
                </div>
                <div className="col-6">
                    <p>{ `% ${tweet.data[0].public_metrics.retweet_count}`}</p>
                </div>
            </div>
            
            <button onClick={onClose}>Close</button>
        </div>
        )
    )
}
