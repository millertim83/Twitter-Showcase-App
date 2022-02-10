import React from "react";
import "Components/common/CloseTweetsButton.css";

export default function CloseTweetsButton( {show, closeTweets } ) {
    
    if (!show) {
        return null;
    }

    return (
        <div>
            <button id="close-tweets-btn" className="btn mb-3" onClick={closeTweets}>Close Tweets</button>
        </div>
    )
}