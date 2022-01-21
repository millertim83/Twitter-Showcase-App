import React from "react";
import "./CloseTweetsButton.css";

export default function CloseTweetsButton( {show, closeTweets } ) {
    
    if (!show) {
        return null;
    }

    return (
        <div>
            <button id="close-tweets-btn" className="btn" onClick={closeTweets}>Close Tweets</button>
        </div>
    )
}