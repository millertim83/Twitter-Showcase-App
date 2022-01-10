import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Search.css";
import TweetCard from "./TweetCard.js";

function Search()  {

    const dogSearch =
    {
        "data": [
            {
                "created_at": "2022-01-08T16:51:49.000Z",
                "text": "RT @LukeOShea3: My sister caught the postman sticking up his middle finger at our dogs yesterday morning 😂😂 he dead right too they’re  litt…",
                "id": "1479858392692936706",
                "public_metrics": {
                    "retweet_count": 222,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "author_id": "1197191872692838400"
            },
            {
                "created_at": "2022-01-08T16:51:49.000Z",
                "text": "@tracypac The Pointer breeds are lap dogs! Very loving.",
                "id": "1479858391673712645",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "author_id": "400982125"
            },
            {
                "created_at": "2022-01-08T16:51:49.000Z",
                "text": "RT @CsArya13: @garyvee i feel like @garyvee  these dark days, everyone asking me about what is NFT! Technology is huge !\n@Cool_Dogs_ @coodl…",
                "id": "1479858389068959747",
                "public_metrics": {
                    "retweet_count": 8,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "author_id": "1469131386724372483"
            },
            {
                "created_at": "2022-01-08T16:51:47.000Z",
                "text": "RT @radishcarton: not this man messaging me from his dogs instagram AS THE DOG https://t.co/gWx4xn3bL2",
                "id": "1479858384258035717",
                "public_metrics": {
                    "retweet_count": 18516,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "author_id": "1313027231552335873"
            },
            {
                "created_at": "2022-01-08T16:51:47.000Z",
                "text": "RT @AdoptionsUk: Please retweet to help Billy find a home #AYRSHIRE #SCOTLAND 🏴󠁧󠁢󠁳󠁣󠁴󠁿\nAged 1 although he's lost a leg it doesn't hold him b…",
                "id": "1479858383389970437",
                "public_metrics": {
                    "retweet_count": 84,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "author_id": "1103393680021434368"
            },
            {
                "created_at": "2022-01-08T16:51:47.000Z",
                "text": "RT @DanielGullotta: The dogs are not happy about all the construction work going today.\nThomas (the cat) isn’t scared, he’s just chilling.…",
                "id": "1479858382618173440",
                "public_metrics": {
                    "retweet_count": 1,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "author_id": "921460356"
            },
            {
                "created_at": "2022-01-08T16:51:46.000Z",
                "text": "@crybabybtzzz its funny but also makes me sad as dogs need to actually walk for exercise lol",
                "id": "1479858380361519109",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "author_id": "1404162472739688449"
            },
            {
                "created_at": "2022-01-08T16:51:45.000Z",
                "text": "RT @AdoptionsUk: Please retweet to help Thelma and Louise find a home together #EDINBURGH #SCOTLAND 🏴󠁧󠁢󠁳󠁣󠁴󠁿\n\nBonded pair, Greyhounds aged 1…",
                "id": "1479858373684342787",
                "public_metrics": {
                    "retweet_count": 141,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "author_id": "3502839022"
            },
            {
                "created_at": "2022-01-08T16:51:45.000Z",
                "text": "@Nigelp89668893 Just back from helping walk my son's dogs,while he's out paintballing and drinking in Norwich on his mate's birthday, and I couldn't agree with you more,cheers mate.enjoy https://t.co/Evzwl9iPHy",
                "id": "1479858373319442440",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "author_id": "405827982"
            },
            {
                "created_at": "2022-01-08T16:51:44.000Z",
                "text": "RT @buitengebieden_: Dogs having fun together.. 😊 https://t.co/tWkqzLUGJH",
                "id": "1479858368592318466",
                "public_metrics": {
                    "retweet_count": 1274,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "author_id": "3192845874"
            }
        ],
        "includes": {
            "users": [
                {
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1477970440773644291/nWbidNpR_normal.jpg",
                    "id": "1197191872692838400",
                    "username": "Of_Hydar",
                    "name": "Aliyu_Official"
                },
                {
                    "profile_image_url": "https://pbs.twimg.com/profile_images/508444696406786048/h7YRjE-h_normal.jpeg",
                    "id": "400982125",
                    "username": "bthefish",
                    "name": "Brian Fitch"
                },
                {
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1478275482202173441/4RIdBPes_normal.jpg",
                    "id": "1469131386724372483",
                    "username": "tdubz707",
                    "name": "Trent Willson"
                },
                {
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1477552360675110912/FmIff5ww_normal.jpg",
                    "id": "1313027231552335873",
                    "username": "PR0FJHK",
                    "name": "Aritae⁷(Stream🎄)"
                },
                {
                    "profile_image_url": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                    "id": "1103393680021434368",
                    "username": "annamac48498443",
                    "name": "anna macdonald"
                },
                {
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1466189521582579714/cTjFlVbv_normal.jpg",
                    "id": "921460356",
                    "username": "varadmehta",
                    "name": "Varad Mehta"
                },
                {
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1477457357625982976/8rlOVHnW_normal.jpg",
                    "id": "1404162472739688449",
                    "username": "RomanianRolf",
                    "name": "Rσɱαɳιαɳ Rσʅϝ"
                },
                {
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1264001664358506496/RokAM3DY_normal.jpg",
                    "id": "3502839022",
                    "username": "janewil82787410",
                    "name": "Jane williams"
                },
                {
                    "profile_image_url": "https://pbs.twimg.com/profile_images/3751860530/631f26fcbdb2c145847a31e2268cf691_normal.jpeg",
                    "id": "405827982",
                    "username": "roadracer1uk",
                    "name": "malcolm wilson"
                },
                {
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1469620418877145092/R2IkIxlQ_normal.jpg",
                    "id": "3192845874",
                    "username": "hous3ofthis",
                    "name": "卂ᗪ卂爪 山ㄖ尺ㄥᗪ"
                }
            ]
        },
        "meta": {
            "newest_id": "1479858392692936706",
            "oldest_id": "1479858368592318466",
            "result_count": 10,
            "next_token": "b26v89c19zqg8o3fpe194xjjh5sgca5jf0k7qu0wjzhj1"
        }
    }

    function mergeArrays() {
        let tweets = dogSearch.data;
        let users = dogSearch.includes.users;
        tweets.map((tweet) => {
            for(let i = 0; i < tweets.length; i++) {
                if (tweet.id === users[i].id) {
                    Object.assign(tweet, users[i]);
                    return tweet
                    console.log(tweets);
                } else return
            }
        }) 
    }
    
    const [searchTerm, setSearchTerm] = useState("");
    const [tweetResults, setTweetResults] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [show, setShow] = useState(false);
    const [topicSearchTweets, setTopicSearchTweets] = useState([]);
    const [topicSearchUsers, setTopicSearchUsers] = useState([]);
    const [topicSearchMergedArray, setTopicSearchMergedArray] = useState([]);
    
    /*
    useEffect(() => {
        console.log(tweetResults)
    }, [tweetResults])
    */

    useEffect(() => {
        console.log(topicSearchTweets)
    }, [topicSearchTweets])
    
    /*
    useEffect(() => {
        console.log(topicSearchUsers)
    }, [topicSearchUsers])
    */
    /*
    useEffect(() => {
        console.log(topicSearchMergedArray)
    }, [topicSearchMergedArray])
    */
    
    async function searchUsers() {
        await axios.get(`/api/searchUsers?search=${searchTerm}`)
        .then(response => {  
            setTweetResults(response.data.data);
            setUserInfo(response.data.includes.users[0]);
            setShow(true);
        })   
    }

    async function searchTopics() {
        await axios.get(`/api/searchTopics?search=${searchTerm}`)
        .then(response => {
            setTopicSearchTweets(response.data);
            //setTopicSearchUsers(response.data.includes.users);
            //setTopicSearchMergedArray(mergeArrays(tweetResults, userInfo));
        })
    }



    let userSearchCards = 
        <div>
            {tweetResults.map((tweet) =>
            <TweetCard
                onClose={() => setShow(false)} 
                show={show}
                tweetResults={tweetResults}
                userInfo={userInfo}
                tweet={tweet}
             />
            )}
        </div>
    


    return (
        <div className = "body">
            <div className = "container">
                <div className = "row text-center align-items">
                    <div className = "col-12 text-center">
                        <h1>Search</h1>
                        <p>Search by username or tweet content.</p>
                        
                    </div>
                    <div>
                        <form className="text-center form-control-lg">
                            <input
                                value={searchTerm}
                                type="text"
                                placeholder="Enter search here.."
                                className="form-control-sm"
                                onChange={(e) => setSearchTerm(e.target.value)}
                                autoFocus
                            >
                            </input>
                            <button type="button" className="btn-warning" onClick={searchUsers}>Search by username</button>
                            <button type="button" className="btn btn-warning" onClick={searchTopics}>Search by topic</button>
                            <button type="button" className="btn btn-warning" onClick={mergeArrays}>Merge Arrays</button>

                        </form>
                        
                    </div>
                    
                    
                    <div id="modal" className="container container-sm">
                        {userSearchCards}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search


                       

            

