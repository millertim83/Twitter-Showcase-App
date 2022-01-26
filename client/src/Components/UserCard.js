import React from "react";
import "./UserCard.css";
import check from "../images/check.png";
import pin from "../images/pin.png";
import calendar from "../images/calendar.png";

export default function UserCard({userInfo})  {
    let userData = userInfo;

    function joinedTwitterDate(dateString) {
        let dateArray = dateString.split("-");
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
        return(`${month} ${year}`) ;
    } 


    return (
        userInfo && (
            <div id="user-card" className="container m-2 p-2 bg-white shadow mx-auto rounded-1">
                <div className="row">
                        <div className="col-2">
                            <img id="profile-pic" 
                                className="rounded-circle responsive-img align-middle" 
                                src={userData.data.profile_image_url} 
                                alt={userData.data.name}>
                            </img>
                        </div>
                        
                        <div className="col-5 pt-2"> 
                                <p id="name" className="mb-0 pb-0">{userData.data.name} {userData.data.verified === true ? <img id="check" src={check}/> : null} </p> 
                                <p id="username" className="text-secondary mt-0 pt-0">{`@${userData.data.username}`}</p> 
                        </div> 
                        <div className="col-5 text-center pt-2">
                            <p id="location" className="mb-0">{userData.data.location ? <img id="pin" src={pin} /> : null } {userData.data.location} </p>
                            <p id="join" className="mt-1">{<img id="calendar" src={calendar}/>} {`Joined ${joinedTwitterDate(userData.data.created_at)}`}</p>
                        </div>
                </div>
                <div  className="row">
                    <div className="col-3"></div>
                    <div id = "followers" className="col-6">
                        {`Followers: ${userData.data.public_metrics.followers_count}`}
                    </div>
                    <div className="col-3"></div>
                </div>    
            </div>
        )
    )
}




