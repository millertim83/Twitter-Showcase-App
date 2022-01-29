import React, { useEffect, useState } from "react";
import "./Favorites.css";
import UserCard from "./UserCard";
import FavoritesModal from "./FavoritesModal";
import axios from "axios";

function Favorites() {
const deepakTweetData =    
    {
        "data": [
            {
                "public_metrics": {
                    "retweet_count": 23,
                    "reply_count": 11,
                    "like_count": 134,
                    "quote_count": 2
                },
                "attachments": {
                    "media_keys": [
                        "3_1486027377402691595"
                    ]
                },
                "created_at": "2022-01-27T02:00:01.000Z",
                "id": "1486519330070171650",
                "author_id": "15588657",
                "text": "https://t.co/NWsWDWsFGk"
            },
            {
                "public_metrics": {
                    "retweet_count": 5,
                    "reply_count": 3,
                    "like_count": 21,
                    "quote_count": 1
                },
                "created_at": "2022-01-27T01:21:27.000Z",
                "id": "1486509624471793664",
                "author_id": "15588657",
                "text": "Thanks for a great review ! It's a great book ! Will benefit many 🙏 https://t.co/KUloYIzEeR"
            },
            {
                "public_metrics": {
                    "retweet_count": 4,
                    "reply_count": 2,
                    "like_count": 20,
                    "quote_count": 3
                },
                "created_at": "2022-01-26T23:00:01.000Z",
                "id": "1486474031737892864",
                "author_id": "15588657",
                "text": "#AskDeepak \n\n\"I have read and heard this many times to love oneself. I am unable to understand loving myself…Is this statement body-related or spirit-related?\"\n\nhttps://t.co/xom8pEKQK0"
            },
            {
                "public_metrics": {
                    "retweet_count": 16,
                    "reply_count": 4,
                    "like_count": 48,
                    "quote_count": 6
                },
                "created_at": "2022-01-26T20:00:00.000Z",
                "id": "1486428729156911105",
                "author_id": "15588657",
                "text": "Creating a clear path from the source to the physical domain is the Vedic secret for powerful #manifestation. 💞\n\nYou may read this article to learn more: https://t.co/PiEXDwbjUp"
            },
            {
                "public_metrics": {
                    "retweet_count": 3,
                    "reply_count": 1,
                    "like_count": 14,
                    "quote_count": 1
                },
                "created_at": "2022-01-26T17:27:23.000Z",
                "id": "1486390321684815872",
                "author_id": "15588657",
                "text": "#nft #nftart #nftartists #nftforgood #nftcommunity #joinjara #nepal #india #love #community #art #culture #ganesha \n\n@MetaSeva @ThePoonacha @LadyGWright @DhimantVyas @SorayaFaloudi @JoinJara @TheRulesGuyNFT @whisbe"
            },
            {
                "public_metrics": {
                    "retweet_count": 26,
                    "reply_count": 9,
                    "like_count": 101,
                    "quote_count": 3
                },
                "attachments": {
                    "media_keys": [
                        "13_1486382967597453318"
                    ]
                },
                "created_at": "2022-01-26T17:26:05.000Z",
                "id": "1486389997947310091",
                "author_id": "15588657",
                "text": "We hope to invoke Ganesha, the remover of obstacles, as we share #Natura. We hope to remove the obstacle of artists reaching the #community and children reaching quality resources and education.  Join me, @MetaSeva @JoinJara &amp; @dhimantvyas in overcoming obstacles and sharing joy. https://t.co/LspesSymG8"
            },
            {
                "public_metrics": {
                    "retweet_count": 33,
                    "reply_count": 8,
                    "like_count": 200,
                    "quote_count": 2
                },
                "attachments": {
                    "media_keys": [
                        "3_1486024953090748429"
                    ]
                },
                "created_at": "2022-01-26T02:00:00.000Z",
                "id": "1486156938903703554",
                "author_id": "15588657",
                "text": "https://t.co/gIgIQmoAs6"
            },
            {
                "public_metrics": {
                    "retweet_count": 7,
                    "reply_count": 5,
                    "like_count": 40,
                    "quote_count": 0
                },
                "attachments": {
                    "media_keys": [
                        "3_1486024459152773128"
                    ]
                },
                "created_at": "2022-01-26T01:00:00.000Z",
                "id": "1486141839052705794",
                "author_id": "15588657",
                "text": "Meditations and Affirmations is a set cards with affirmation prompts to aid in your meditation practices. Just pick a card, let it inspire and motivate you and help you set intentions. The cards are available now -  https://t.co/OarYTscqCn https://t.co/qRc5oRc2e8"
            },
            {
                "public_metrics": {
                    "retweet_count": 13,
                    "reply_count": 5,
                    "like_count": 50,
                    "quote_count": 1
                },
                "created_at": "2022-01-25T23:00:01.000Z",
                "id": "1486111646632198144",
                "author_id": "15588657",
                "text": "#AskDeepak \n\"How do you know you are on the right path? I am learning how to let go of pain, being more present and aware in the moment. What confuses me is, how can I detach myself from difficult things that are happening and still care? \"\nhttps://t.co/nQItAd6bxu"
            },
            {
                "public_metrics": {
                    "retweet_count": 5,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "created_at": "2022-01-25T22:12:23.000Z",
                "id": "1486099659923861510",
                "author_id": "15588657",
                "text": "RT @BrainHealth: Are you ready for a peek into the future of wellbeing? Learn about the connection between wellbeing &amp; brain health from on…"
            }
        ],
        "includes": {
            "media": [
                {
                    "media_key": "3_1486027377402691595",
                    "type": "photo",
                    "url": "https://pbs.twimg.com/media/FJ9uBsSXwAsKIrk.jpg"
                },
                {
                    "media_key": "13_1486382967597453318",
                    "preview_image_url": "https://pbs.twimg.com/amplify_video_thumb/1486382967597453318/img/XWL1-n9ffFy8ZpVG.jpg",
                    "type": "video"
                },
                {
                    "media_key": "3_1486024953090748429",
                    "type": "photo",
                    "url": "https://pbs.twimg.com/media/FJ9r0lBXMA045wm.jpg"
                },
                {
                    "media_key": "3_1486024459152773128",
                    "type": "photo",
                    "url": "https://pbs.twimg.com/media/FJ9rX09X0Ag4Tk6.jpg"
                }
            ],
            "users": [
                {
                    "name": "Deepak Chopra",
                    "verified": true,
                    "public_metrics": {
                        "followers_count": 3205892,
                        "following_count": 792,
                        "tweet_count": 81837,
                        "listed_count": 26406
                    },
                    "id": "15588657",
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1244678658951909381/TabEMtZk_normal.jpg",
                    "username": "DeepakChopra"
                }
            ]
        },
        "meta": {
            "oldest_id": "1486099659923861510",
            "newest_id": "1486519330070171650",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3z4592r215sbencgfyua2qr18mk0"
        }
    }
    
    const deepakTweets = deepakTweetData.data;
    const deepakMedia = deepakTweetData.includes.media;
    const deepakUser =  deepakTweetData.includes.users;
    
    function mergeMedia(tweetData, mediaData) {
        return tweetData.map((tweet) => {
            if (tweet.attachments) {
                const matchMedia = mediaData.map((media) => media.media_key).includes(tweet.attachments.media_keys[0]);
                if (matchMedia) {
                    const mediaObj = mediaData.find((media) => media.media_key === tweet.attachments.media_keys[0]);
                    return { ...tweet, ...mediaObj  };
                }
            } else return tweet;
        });
    }

    function mergeUser(tweetsArray, userArray) {
        return tweetsArray.map((tweet) => {
            const userObj = userArray.find((user) => user.id === tweet.author_id);
            return { ...tweet, ...userObj  };
        });
    }
    
    const [dalaiLamaInfo, setDalaiLamaInfo] = useState("");
    const [sadhGuruInfo, setSadhGuruInfo] = useState("");
    const [eckhartTolleInfo, setEckhartTolleInfo] = useState("");
    const [headspaceInfo, setHeadspaceInfo] = useState("");
    const [deepakChopraInfo, setDeepakChopraInfo] = useState("");
    
    const [tweetTimeline, setTweetTimeline] = useState("");
    const [show, setShow] = useState(false);

    let randomIndex = Math.floor(Math.random() * 10);

    useEffect(() => {
        console.log(tweetTimeline)
    }, [tweetTimeline]);
    

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

    async function getDalaiInfo() {
        await axios.get("/api/dalaiInfo")
        .then(response => setDalaiLamaInfo(response.data));
    }

    async function getSadhInfo() {
        await axios.get("/api/sadhInfo")
        .then(response => setSadhGuruInfo(response.data));
    }

    async function getEckhartInfo() {
        await axios.get("/api/eckhartInfo")
        .then(response => setEckhartTolleInfo(response.data));
    }

    async function getheadspaceInfo() {
        await axios.get("/api/headspaceInfo")
        .then(response => setHeadspaceInfo(response.data));
    }

    async function getdeepakInfo() {
        await axios.get("/api/deepakInfo")
        .then(response => setDeepakChopraInfo(response.data));
    }

    async function getDalaiTweet() {
        await axios.get("/api/dalaiTweets")
        .then(response => setTweetTimeline (response.data));
    }

    async function getSadhTweet() {
        await axios.get("/api/sadhTweets")
        .then(response => setTweetTimeline(response.data));
    }

    async function getEckhartTweet() {
        await axios.get("/api/eckhartTweets")
        .then(response => setTweetTimeline(response.data));
    }

    async function getHeadspaceTweet() {
        await axios.get("/api/headspaceTweets")
        .then(response => setTweetTimeline(response.data));
    }

    async function getDeepakTweet() {
        await axios.get("/api/deepakTweets")
        .then(response => setTweetTimeline(response.data));
    }

    return (
        <div className = "body">
            <div id="banner" className = "row">
                <h2 className = "pt-2">My Faves</h2>
                <h6 className = "pt-1">Click on a user to display a random tweet!</h6>
            </div>
            <div id="user-container" className="container-lg mx-auto">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="user-card text-center"
                            onClick = {() => { setShow(true); getDalaiTweet() }}>
                            <UserCard userInfo={dalaiLamaInfo} />  
                        </div> 
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row"> 
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="user-card text-center"
                            onClick = {() => {setShow(true); getSadhTweet() }}>
                            <UserCard userInfo={sadhGuruInfo} />
                        </div> 
                    </div>
                    <div className="col-2"></div>
                </div> 
                    
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="user-card text-center"
                            onClick = {() => { setShow(true); getEckhartTweet() }}>
                            <UserCard userInfo={eckhartTolleInfo} />
                        </div> 
                    </div>
                    <div className="col-2"></div>
                </div>

                <div className="row"> 
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="user-card"
                            onClick = {() => { setShow(true); getHeadspaceTweet() }}>
                            <UserCard userInfo={headspaceInfo} />
                        </div>
                    </div> 
                    <div className="col-2"></div>
                </div> 
                    
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="user-card"
                            onClick = {() => { setShow(true), getDeepakTweet() }}>
                            <UserCard userInfo={deepakChopraInfo} />
                        </div>
                    </div> 
                    <div className="col-2"></div>
                </div>
            </div>   
               
                <div id="modal" className="container-sm">
                    <FavoritesModal
                        randomIndex={randomIndex} 
                        onClose={() => setShow(false)}
                        onClose={() => setTweetTimeline("")} 
                        show={show} 
                        tweetTimeline={tweetTimeline} />
                </div>
            
                
                 
        </div>
             
        
    );
}

export default Favorites;



//onClick = {() => { setTweetTimeline(mergeMedia(deepakTweets, deepakMedia)) }}>
//onClick = {() => { setTweetTimeline(mergeUser(deepakTweets, deepakUser)) }}>
