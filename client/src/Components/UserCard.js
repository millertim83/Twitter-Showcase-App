import React from "react";


export default function UserCard({userInfo})  {
    let dalaiInfo = {
        "data": {
            "verified": true,
            "location": "Dharamsala, India",
            "public_metrics": {
                "followers_count": 19222760,
                "following_count": 0,
                "tweet_count": 1744,
                "listed_count": 73647
            },
            "profile_image_url": "https://pbs.twimg.com/profile_images/529214699041067008/fqPBAr5s_normal.jpeg",
            "name": "Dalai Lama",
            "created_at": "2009-02-11T18:34:22.000Z",
            "id": "20609518",
            "description": "Welcome to the official twitter page of the Office of His Holiness the 14th Dalai Lama.",
            "username": "DalaiLama"
        }
    };
    let userData = dalaiInfo;
    
    return (
            <div id="user-card" className="container">
                <div className="row">
                        <div className="col-4">
                            <img id="profile-pic" 
                                className="circle responsive-img" 
                                src={userData.data.profile_image_url} 
                                alt={userData.data.name}>
                            </img>
                        </div>
                        
                        <div className="col-8">  
                            <span>{userData.data.name} {userData.data.verified === true ? 'check' : null} </span>
                        </div> 
                        <div className="row">
                            <p className = "text-light">{`@${userData.data.username}`}</p>
                        </div>
                </div>
                <div className="row">
                    <p>{userData.data.description}</p>
                </div>
                
            </div>
    )
}

/*<img id="profile-pic" 
    className="circle responsive-img" 
    src={favoriteInfo.data.profile_image_url} 
    alt={favoriteInfo.data}>

</img>
*/



