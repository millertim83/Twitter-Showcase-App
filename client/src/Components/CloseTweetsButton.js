import React from "react";

export default function CloseTweetsButton( {show, closeTweets } ) {
    
    if (!show) {
        return null;
    }

    return (
        <div>
            <button id="close-tweets-btn" className="btn btn-danger" onClick={closeTweets}>Close Tweets</button>
        </div>
    )
}