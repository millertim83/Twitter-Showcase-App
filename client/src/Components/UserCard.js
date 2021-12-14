import React from "react";
import "./UserCard.css";


export default function UserCard({userInfo})  {
    let userData = userInfo;
    
    return (
        userInfo && (
            <div id="user-card" className="container bg-white border border-dark rounded-2 h-20 m-3 p-3">
                <div className="row">
                        <div className="col-4">
                            <img id="profile-pic" 
                                className="rounded-circle responsive-img" 
                                src={userData.data.profile_image_url} 
                                alt={userData.data.name}>
                            </img>
                        </div>
                        
                        <div className="col-8 text-center">  
                            <span>{userData.data.name} {userData.data.verified === true ? '*' : null} </span>
                            <p className = "text-center text-secondary">{`@${userData.data.username}`}</p>
                        </div> 
                </div>
                <div id="description-row" className="row">
                    <p id="user-description">{userData.data.description}</p>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <span id="location">{`!`} {userData.data.location} </span>
                        <p id="join">{`# Joined`} {userData.data.created_at}</p>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div id="followers" className="col-5">
                        {`Followers: ${userData.data.public_metrics.followers_count}`}
                    </div> 
                    <div id="following" className="col-5"> 
                        {`Following: ${userData.data.public_metrics.following_count}`}
                    </div>
                </div>
                
            </div>
        )
    )
}




