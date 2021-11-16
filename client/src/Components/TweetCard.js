import React from "react";
import "./TweetCard.css";

function Tweet() {
    return(
        <div className = "card" style="width: 18rem border;">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default Tweet;