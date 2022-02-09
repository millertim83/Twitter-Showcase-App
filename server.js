const { default: axios } = require('axios');
const express = require('express');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 3001;
const app = express();
const token = process.env.BEARER_TOKEN;

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(port, () => console.log(`app listening on ${port}!`));

//try BASE_URL and add string variables

const favoriteTwitterUser = {
    dalaiLama: {
        username: 'dalailama', 
        user_id: '20609518', 
        infoEndpoint: '/api/info/dalaiInfo',
        tweetEndpoint: '/api/tweets/dalaiTweets'
    },
    eckhartTolle: {
        username: 'eckharttolle', 
        user_id: '14592008', 
        infoEndpoint: '/api/info/eckhartInfo',
        tweetEndpoint: '/api/tweets/eckhartTweets'
    },
    sadhGuru: {
        username: 'sadhgurujv', 
        user_id: '67611162', 
        infoEndpoint: '/api/info/sadhInfo',
        tweetEndpoint: '/api/tweets/sadhTweets'
    },
    deepakChopra: {
        username: 'deepakchopra', 
        user_id: '15588657', 
        infoEndpoint: '/api/info/deepakInfo',
        tweetEndpoint: '/api/tweets/deepakTweets'
    },
    headspace: {
        username: 'headspace', 
        user_id: '402025521', 
        infoEndpoint: '/api/info/headspaceInfo',
        tweetEndpoint: '/api/tweets/headspaceTweets'
    },
}

generateInfoEndpoints();

function generateInfoURL(username) {
    return `https://api.twitter.com/2/users/by/username/${username}?user.fields=location,created_at,profile_image_url,verified,public_metrics,description`;
}

function generateTweetURL(user_id) {
    return `https://api.twitter.com/2/users/${user_id}/tweets?expansions=attachments.media_keys,author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics&media.fields=url,preview_image_url,type`;
}

function generateInfoEndpoints() {
    Object.values(favoriteTwitterUser).forEach((user) => {
        app.get(user['infoEndpoint'], async(req, res) => {
            const queryURL = generateInfoURL(user['username']);
            let userInfo = "";
            await axios
                .get(queryURL, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                .then((response) => {
                    userInfo=response.data;
                    res.send(userInfo);
                })
                .catch((error) => console.log(error));
        });

    })
}

function generateTweetEndpoints() {
    Object.values(favoriteTwitterUser).forEach((user) => {
        app.get(user['tweetEndpoint'], async(req, res) => {
            let tweets = [];
            let media = [];
            let user = {};
            await axios
                .get(dalaiTweetsEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
                .then((response) => {
                    tweets = response.data.data;
                    media = response.data.includes.media;
                    user = response.data.includes.users[0];
        
                    function mergeMedia(tweetData, mediaData) {
                        return tweetData.map((tweet) => {
                            if (tweet.attachments) {
                                const matchMedia = mediaData.map((media) => media.media_key).includes(tweet.attachments.media_keys[0]);
                                if (matchMedia) {
                                    const mediaObj = mediaData.find((media) => media.media_key === tweet.attachments.media_keys[0]);
                                    return { ...tweet, ...mediaObj };
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
                
                    let tweetsWithMedia = mergeMedia(tweets, media); 
                    let fullResponse = tweetsWithMedia.push(user);
                    res.send(tweetsWithMedia); 
                    
                })
                .catch((error) => console.log(error));
        });

    })
    

}





//Search page functions//

app.get("/api/searchUsers", async(req, res) => {
    let userID = "";
    let tweets = [];
    let media = [];
    let user = {};
    const search = req.query.search;
    await axios
        .get(`https://api.twitter.com/2/users/by/username/${search}`, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            userID=response.data.data.id;
            axios
                .get(`https://api.twitter.com/2/users/${userID}/tweets?max_results=5&expansions=attachments.media_keys,author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics&media.fields=url,preview_image_url,type`,
                {headers: { Authorization: `Bearer ${token}`,}})
                .then((response) => {
                    tweets = response.data.data;
                    media = response.data.includes.media;
                    user = response.data.includes.users[0];

                    function mergeMedia(tweetData, mediaData) {
                        return tweetData.map((tweet) => {
                            if (tweet.attachments) {
                                const matchMedia = mediaData.map((media) => media.media_key).includes(tweet.attachments.media_keys[0]);
                                if (matchMedia) {
                                    const mediaObj = mediaData.find((media) => media.media_key === tweet.attachments.media_keys[0]);
                                    return { ...tweet, ...mediaObj };
                                } 
                            } else return tweet;
                        });
                    }

                    function addUserObj(array, obj) {
                        for (let i = 0; i < array.length; i++) {
                            array[i].user = obj;
                        }
                    }
            
                    let tweetsWithMedia = mergeMedia(tweets, media); 
                    let fullResponse = addUserObj(tweetsWithMedia, user);
                    res.send(tweetsWithMedia); 
                })
                .catch((error) => console.log(error));
        }).catch((error) => {
            console.log(error);
            res.send({ error: error });
        });
})

app.get("/api/searchTopics", async(req, res) => {
    const search = req.query.search;
    let tweets = []
    let users = []
    await axios
        .get(`https://api.twitter.com/2/tweets/search/recent?tweet.fields=created_at,public_metrics&expansions=author_id&user.fields=name,username,profile_image_url&media.fields=url,preview_image_url&query=${search}`,
        {headers: { Authorization: `Bearer ${token}`}})
        .then((response) => {
            for (i = 0; i < 5; i++) {
                tweets.push(response.data.data[i]);
                users.push(response.data.includes.users[i]);
            }
                
            function mergeArrays(arr1, arr2) {
                return arr1.map((item, i) => {
                    if (item.author_id === arr2[i].id) {
                        return Object.assign({}, item, arr2[i]);
                    }
                });
            } 
            const mergedArray = mergeArrays(tweets, users);
            res.send(mergedArray);
        })
        .catch((error) => {
            console.log(error);
            res.send({ error: error });
        });                
})
    
