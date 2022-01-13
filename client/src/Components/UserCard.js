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
            <div id="user-card" className="container bg-white m-3 p-3">
                <div className="row">
                        <div className="col-2">
                            <img id="profile-pic" 
                                className="rounded-circle responsive-img align-middle" 
                                src={userData.data.profile_image_url} 
                                alt={userData.data.name}>
                            </img>
                        </div>
                        
                        <div className="col-5 text-center pt-2">  
                            <p id="name">{userData.data.name} {userData.data.verified === true ? <img id="check" src={check}/> : null} </p>  
                        </div> 
                        <div className="col-5 text-center pt-2">
                            <p id="username" className="text-secondary">{`@${userData.data.username}`}</p>
                        </div>
                </div>
                <div  className="row">
                    <div className="col-3">

                    </div>
                    <div id="description" className="col-8">
                        <p id="user-description">{userData.data.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-5 text-center">
                        <p id="location">{userData.data.location ? <img id="pin" src={pin} /> : null } {userData.data.location} </p>
                    </div>
                    <div className="col-5">
                        <p id="join">{<img id="calendar" src={calendar}/>} {`Joined ${joinedTwitterDate(userData.data.created_at)}`}</p>
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




