import React, { useState } from "react";
import "./Favorites.css";
import UserCard from "./UserCard";



function Favorites() {
    

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

    let sadhInfo = {
        "data": {
            "created_at": "2009-08-21T13:49:35.000Z",
            "verified": true,
            "profile_image_url": "https://pbs.twimg.com/profile_images/1132191777195085824/KbxIQUxJ_normal.png",
            "username": "SadhguruJV",
            "description": "A Yogi, Mystic & Visionary. This account is managed by volunteers @Ishafoundation. Tweets from Sadhguru himself are signed - Sg",
            "id": "67611162",
            "name": "Sadhguru",
            "public_metrics": {
                "followers_count": 3762975,
                "following_count": 3,
                "tweet_count": 11507,
                "listed_count": 1760
            },
            "location": "India"
        }
    };

    let eckhartInfo = {
        "data": {
            "created_at": "2008-04-29T22:27:32.000Z",
            "verified": true,
            "profile_image_url": "https://pbs.twimg.com/profile_images/1308563975119032321/rpNxathB_normal.png",
            "username": "EckhartTolle",
            "description": "",
            "id": "14592008",
            "name": "Eckhart Tolle",
            "public_metrics": {
                "followers_count": 719894,
                "following_count": 13,
                "tweet_count": 2071,
                "listed_count": 7786
            }
        }
    };

    let head_spaceInfo = {
        "data": {
            "name": "Headspace",
            "public_metrics": {
                "followers_count": 271624,
                "following_count": 1603,
                "tweet_count": 52056,
                "listed_count": 2220
            },
            "description": "Your guide to health and happiness. \nLearn to meditate and live mindfully.\nNeed help? Send us a message @HeadspaceHelp\nhttps://t.co/xPRbzJPs4A",
            "verified": true,
            "profile_image_url": "https://pbs.twimg.com/profile_images/1157021554280058880/yWiCuBSR_normal.jpg",
            "username": "Headspace",
            "location": "Los Angeles | London",
            "created_at": "2011-10-31T12:52:24.000Z",
            "id": "402025521"
        }
    };

    let deepakInfo = {
        "data": {
            "description": "Founder of @chopraglobal @ChopraFNDN #Metahuman #DailyBreath #digitaldeepak #Neveralone Get your copy of #TotalMeditation through my website👇",
            "username": "DeepakChopra",
            "location": "Global",
            "name": "Deepak Chopra",
            "public_metrics": {
                "followers_count": 3206078,
                "following_count": 790,
                "tweet_count": 81619,
                "listed_count": 26433
            },
            "created_at": "2008-07-24T20:41:29.000Z",
            "id": "15588657",
            "verified": true,
            "profile_image_url": "https://pbs.twimg.com/profile_images/1244678658951909381/TabEMtZk_normal.jpg"
        }
    };

    
    const [dalaiLamaInfo, setDalaiLamaInfo] = useState(dalaiInfo.data);
    const [sadhGuruInfo, setSadhGuruInfo] = useState(sadhInfo.data);
    const [eckhartTolleInfo, setEckhartTolleInfo] = useState(eckhartInfo.data);
    const [headspaceInfo, setHeadspaceInfo] = useState(head_spaceInfo.data);
    const [deepakChopraInfo, setDeepakChopraInfo] = useState(deepakInfo.data);
    
    const [currentTweet, setCurrentTweet] = useState();

    function getRandomTweet(timeline) {
        let randomTimelineIndex = Math.floor(Math.random() * 10);
        let randomTweet = timeline.data[randomTimelineIndex].text;
        //console.log(`random tweet: ' ${randomTweet}`);
        setCurrentTweet(randomTweet);    
    };

    function getFavesInfo() {
        console.log(dalaiInfo, sadhInfo, eckhartInfo, head_spaceInfo, deepakInfo);
    }

    return (
        <div className = "body">
            <div className = "row h-100">
                <div className =  "col-4">
                    <button onClick = {() => {getFavesInfo()}}>Get Faves Info</button>
                    <h3 className = "pt-5">My Faves</h3>
                    <h6 className = "pt-3 pl-3">Click on a user to display a random tweet!</h6>
                    
                    <div className = "container faves rounded-2 border border-light ml-2 mr-2"
                        onClick = {() => {getRandomTweet(timeline)}}
                        >
                            <div>
                                <UserCard userInfo={dalaiLamaInfo} />
                            </div>
                            
                            
                            

                        
                    </div>
                </div>
                <div className = "col-8">
                    <div className = "container-sm mt-4 bg-white border tweet-container">
                        <p>{currentTweet}</p>

                    </div>
                </div>
            </div>
                
                 
        </div>
             
        
    );
}

export default Favorites;


/*<div className = "row">
                            <div className = "col-4 img-container">
                                <div className = "container dalailamabackground border rounded-2 border-light">
                                </div>
                            </div>
                            <div className = "col-7">
                                <h6>Dalai Lama</h6>
                                <p className = "twittername">@DalaiLama</p>
                            </div>
                        </div>
                        */

const timeline = {
    "data": [
        {
            "id": "1461627868279017472",
            "text": "The only thing that will bring happiness is affection and warmheartedness. When you have a more compassionate mind and cultivate warmheartedness, the whole atmosphere around you becomes more positive and friendlier. You see friends everywhere."
        },
        {
            "id": "1460178300274282498",
            "text": "Anger and aggression sometimes seem to be protective because they bring energy to bear on a particular situation, but what needs to be acknowledged is that that energy is blind. It takes a calm mind to be able to consider things from different angles and points of view."
        },
        {
            "id": "1459091418526273536",
            "text": "Materialistic values cannot give us peace of mind. So we really need to focus on our inner values, our true humanity. Only this way can we have peace of mind—and more peace in our world."
        },
        {
            "id": "1458004172565991426",
            "text": "Please don’t think that compassion, love and tolerance only belong to religion. They belong to human life. From compassion we develop self-confidence; that brings inner strength, allowing us to act with transparency and candour."
        },
        {
            "id": "1456554447501357062",
            "text": "In order to develop our mind, we must look at a deeper level. Everyone seeks happiness, joyfulness, but from outside—from money, from power, from big car, from big house. Most people never pay much attention to the ultimate source of a happy life, which is inside, not outside."
        },
        {
            "id": "1454622894487523334",
            "text": "His Holiness the Dalai Lama's message to COP26. https://t.co/sRYFUbH2Jr"
        },
        {
            "id": "1454017670748139522",
            "text": "On the occasion of the United Nations Climate Change Conference (COP26) HHDL speaks on the need to tackle climate change as the future of our planet is in our hands. https://t.co/AgEYAEpjJl"
        },
        {
            "id": "1452568034485301248",
            "text": "These days it’s realistic to work for co-existence on global level. It’s no longer appropriate to thinking only of ‘my country’. We must educate the young in the ways to achieve genuine world peace, taking the entire world, the whole of humanity, into account on a global level."
        },
        {
            "id": "1451481635170373634",
            "text": "Everyone wants to live in a peaceful world, but it’s necessary to understand that what destroys peace is anger and hatred. This is why the long term goal is to create inner peace within individuals, so contributing to a more compassionate humanity."
        },
        {
            "id": "1450129558686945280",
            "text": "Compassion in Action - HHDL's message to the 8th Parliament of the World's Religions held virtually on October 17-18, 2021. https://t.co/JAc3iJPGyl"
        }
    ],
    "meta": {
        "oldest_id": "1450129558686945280",
        "newest_id": "1461627868279017472",
        "result_count": 10,
        "next_token": "7140dibdnow9c7btw3z2vfguwoevhida86ky2bafkt0kw"
    }
};


/*<div>
                                <UserCard userInfo={sadhGuruInfo} />
                            </div>
                            <div>
                                <UserCard userInfo={eckhartTolleInfo} />
                            </div>
                            <div>
                                <UserCard userInfo={headspaceInfo} />
                            </div>
                            <div>
                                <UserCard userInfo={deepakChopraInfo} />
                            </div>
                            */