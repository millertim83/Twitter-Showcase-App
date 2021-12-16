import React from "react";
import "./UserCard.css";
import check from "../images/check.png";
import pin from "../images/pin.png";
import calendar from "../images/calendar.png";

export default function UserCard({userInfo})  {
    let userData = userInfo;
    
    return (
        userInfo && (
            <div id="user-card" className="container bg-white h-20 m-3 p-3">
                <div className="row">
                        <div className="col-2">
                            <img id="profile-pic" 
                                className="rounded-circle responsive-img align-middle" 
                                src={userData.data.profile_image_url} 
                                alt={userData.data.name}>
                            </img>
                        </div>
                        
                        <div className="col-5 text-center align-text-bottom">  
                            <p id="name">{userData.data.name} {userData.data.verified === true ? <img id="check" src={check}/> : null} </p>  
                        </div> 
                        <div className="col-5 text-center align-text-bottom">
                            <p id="username" className="text-secondary">{`@${userData.data.username}`}</p>
                        </div>
                </div>
                <div id="description" className="row">
                    <p id="user-description">{userData.data.description}</p>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <span id="location">{userData.data.location ? <img id="pin" src={pin} /> : null } {userData.data.location} </span>
                        <p id="join">{<img id="calendar" src={calendar}/>} {userData.data.created_at}</p>
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




