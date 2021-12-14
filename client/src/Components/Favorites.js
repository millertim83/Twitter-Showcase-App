import React, { useEffect, useState } from "react";
import "./Favorites.css";
import UserCard from "./UserCard";
import FavoritesModal from "./FavoritesModal";



function Favorites() {
    //Temporary hardcoded data to be removed later
    
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


    const dalaiTimeline = 
    {
        "data": [
            {
                "public_metrics": {
                    "retweet_count": 4285,
                    "reply_count": 286,
                    "like_count": 17615,
                    "quote_count": 205
                },
                "id": "1470325310532976643",
                "text": "If the education system fostered inner peace, compassion and non-violence, or the idea of doing no harm, students would learn how to achieve peace of mind. This is what is required if we are to fulfil the goal of a genuinely peaceful and demilitarized world.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 4764,
                    "reply_count": 400,
                    "like_count": 21005,
                    "quote_count": 262
                },
                "id": "1469237993424965632",
                "text": "If we focus too much on ourselves, we’ll not be happy, whereas to concern ourselves with the well-being of others is the gateway to great joy. If we’re really serious about happiness, we need to open our hearts and focus on others as well as ourselves.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 5389,
                    "reply_count": 271,
                    "like_count": 20129,
                    "quote_count": 271
                },
                "id": "1467788417337475080",
                "text": "Cultivating compassion is not a religious practice focused on ensuring we go to heaven or a good future life. It’s about living a good day-to-day life here and now. It’s about being a happy person. Warm-heartedness is a fundamental good human quality.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 4616,
                    "reply_count": 352,
                    "like_count": 20780,
                    "quote_count": 251
                },
                "id": "1466702162805673990",
                "text": "Someone may be very rich and powerful but without any trusted friends they will never be happy. Someone else may be poor but if they are surrounded by trusting friends they’ll be happy. Therefore, taking care of others is the best way to fulfil our own interests.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 3481,
                    "reply_count": 258,
                    "like_count": 15351,
                    "quote_count": 165
                },
                "id": "1465251863243091970",
                "text": "One of my commitments is to promote human values based on common sense and scientific findings. What we need is more self-confidence, which comes from concern for others' well-being. The real source of inner strength and self-confidence is warm-heartedness.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 6382,
                    "reply_count": 333,
                    "like_count": 24269,
                    "quote_count": 280
                },
                "id": "1464164704184463368",
                "text": "We’re social creatures, we depend on each other, which is why we need a sense of concern for others’ well-being. Compassion is what’s important and you don’t have to be religious to practise it. Practising compassion here and now—living a meaningful life—is what is most important",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 4308,
                    "reply_count": 322,
                    "like_count": 18397,
                    "quote_count": 188
                },
                "id": "1462715703799156737",
                "text": "If we make consistent effort, based on proper education, we can change the world. We are selfish, that’s natural, but we need to be wisely selfish, not foolishly selfish. We have to concern ourselves more with others’ well-being, that’s the way to be wisely selfish.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 5544,
                    "reply_count": 315,
                    "like_count": 21923,
                    "quote_count": 302
                },
                "id": "1461627868279017472",
                "text": "The only thing that will bring happiness is affection and warmheartedness. When you have a more compassionate mind and cultivate warmheartedness, the whole atmosphere around you becomes more positive and friendlier. You see friends everywhere.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 4690,
                    "reply_count": 343,
                    "like_count": 19821,
                    "quote_count": 244
                },
                "id": "1460178300274282498",
                "text": "Anger and aggression sometimes seem to be protective because they bring energy to bear on a particular situation, but what needs to be acknowledged is that that energy is blind. It takes a calm mind to be able to consider things from different angles and points of view.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 5130,
                    "reply_count": 315,
                    "like_count": 21892,
                    "quote_count": 238
                },
                "id": "1459091418526273536",
                "text": "Materialistic values cannot give us peace of mind. So we really need to focus on our inner values, our true humanity. Only this way can we have peace of mind—and more peace in our world.",
                "author_id": "20609518"
            }
        ],
        "includes": {
            "users": [
                {
                    "id": "20609518",
                    "name": "Dalai Lama",
                    "profile_image_url": "https://pbs.twimg.com/profile_images/529214699041067008/fqPBAr5s_normal.jpeg",
                    "verified": true,
                    "public_metrics": {
                        "followers_count": 19230385,
                        "following_count": 0,
                        "tweet_count": 1748,
                        "listed_count": 73606
                    },
                    "username": "DalaiLama"
                }
            ]
        },
        "meta": {
            "oldest_id": "1459091418526273536",
            "newest_id": "1470325310532976643",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3z2vyn3qtc4kccemzyfl7gcg808m"
        }
    }

    //End temporary hardcoded data
    
    const [dalaiLamaInfo, setDalaiLamaInfo] = useState("");
    const [sadhGuruInfo, setSadhGuruInfo] = useState("");
    const [eckhartTolleInfo, setEckhartTolleInfo] = useState("");
    const [headspaceInfo, setHeadspaceInfo] = useState("");
    const [deepakChopraInfo, setDeepakChopraInfo] = useState("");
    
    const [tweetTimeline, setTweetTimeline] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        retrieveData()
    }, []);

    function retrieveData() {
        getDalaiInfo();
        getSadhInfo();
        getEckhartInfo();
        getheadspaceInfo();
        getdeepakInfo();
    }

    /*function getRandomTweet(timeline) {
        let randomTimelineIndex = Math.floor(Math.random() * 10);
        let randomTweet = timeline.data[randomTimelineIndex].text;
        setCurrentTweet(randomTweet);    
    };*/

    function getDalaiInfo() {
        setDalaiLamaInfo(dalaiInfo);
    }

    function getSadhInfo() {
        setSadhGuruInfo(sadhInfo);
    }

    function getEckhartInfo() {
        setEckhartTolleInfo(eckhartInfo);
    }

    function getheadspaceInfo() {
        setHeadspaceInfo(head_spaceInfo);
    }

    function getdeepakInfo() {
        setDeepakChopraInfo(deepakInfo);
    }

    function getRandomTweet(tweetTimeline) {
        let randomTimelineIndex = Math.floor(Math.random() * 10);
        let randomTweet = tweetTimeline.data[randomTimelineIndex];
        return randomTweet;
    }

    function getDalaiTweet() {
        setTweetTimeline (dalaiTimeline);
        //getRandomTweet(tweetTimeline);
        //console.log(getRandomTweet());
        
    }

    

    

    return (
        <div className = "body">
            <div className = "row h-100">
                <h3 className = "pt-5">My Faves</h3>
                <h6 className = "pt-3 pl-3">Click on a user to display a random tweet!</h6>

                <div className="d-flex flex-wrap flex-fill">
                    <div className="container col-sm"
                        onClick = {() => { setShow(true); getDalaiTweet() }}>
                        <UserCard userInfo={dalaiLamaInfo} />  
                    </div> 
                    
                    <div className="container col-sm"
                        onClick = {() => {setShow(true)}}>
                        <UserCard userInfo={sadhGuruInfo} />
                    </div> 
                    
                    <div className="container col-sm"
                        onClick = {() => { setShow(true)}}>
                        <UserCard userInfo={eckhartTolleInfo} />
                    </div> 
                    
                    <div className="container col-sm"
                        onClick = {() => {setShow(true)}}>
                        <UserCard userInfo={headspaceInfo} />
                    </div> 
                    
                    <div className="container"
                        onClick = {() => {setShow(true)}}>
                        <UserCard userInfo={deepakChopraInfo} />
                    </div> 
                </div>   
                
                <div>
                    <FavoritesModal onClose={() => setShow(false)} show={show} 
                        tweetTimeline={tweetTimeline} />
                </div>
            </div>
                
                 
        </div>
             
        
    );
}

export default Favorites;



  