import React from "react";

export default function FavoritesModal ({show, onClose, tweetTimeline}) {
    if (!show) {
        return null
    }

    let tweet = tweetTimeline;
    
    return (
        tweetTimeline && (
        <div id="favorites-modal" className="container border border-dark">
            <div className="col-3">
                <img id="profile-pic"
                    className="rounded-circle responsive-img"
                    src={tweet.includes.users.profile_image_url}
                    alt={tweet.includes.users.name}>

                </img>
            </div>
            <button onClick={onClose}>Close</button>
        </div>
        )
    )
}
