const { default: axios } = require('axios');
const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const port = 3001;
const app = express();
const config = require('dotenv').config();
const token = process.env.BEARER_TOKEN;

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(port, () => console.log(`app listening on ${port}!`));

const dalaiInfoEndpoint = "https://api.twitter.com/2/users/by/username/dalailama?user.fields=location,created_at,profile_image_url,verified,public_metrics,description";
const sadhInfoEndpoint = "https://api.twitter.com/2/users/by/username/sadhgurujv?user.fields=location,created_at,profile_image_url,verified,public_metrics,description";
const eckhartInfoEndpoint = "https://api.twitter.com/2/users/by/username/eckharttolle?user.fields=location,created_at,profile_image_url,verified,public_metrics,description";
const headspaceEndpoint = "https://api.twitter.com/2/users/by/username/headspace?user.fields=location,created_at,profile_image_url,verified,public_metrics,description";
const deepakEndpoint = "https://api.twitter.com/2/users/by/username/deepakchopra?user.fields=location,created_at,profile_image_url,verified,public_metrics,description";

const dalaiTweetsEndpoint = "https://api.twitter.com/2/users/20609518/tweets?expansions=attachments.media_keys,author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics&media.fields=url,preview_image_url,type";
const sadhTweetsEndpoint = "https://api.twitter.com/2/users/67611162/tweets?expansions=attachments.media_keys,author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics&media.fields=url,preview_image_url,type";
const eckhartTweetsEndpoint = "https://api.twitter.com/2/users/14592008/tweets?expansions=attachments.media_keys,author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics&media.fields=url,preview_image_url,type";
const headspaceTweetsEndpoint = "https://api.twitter.com/2/users/402025521/tweets?expansions=attachments.media_keys,author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics&media.fields=url,preview_image_url,type";
const deepakTweetsEndpoint = "https://api.twitter.com/2/users/15588657/tweets?expansions=attachments.media_keys,author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics&media.fields=url,preview_image_url,type";

app.get("/api/dalaiInfo", async(req, res) => {
    let userInfo = "";
    await axios
        .get(dalaiInfoEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            userInfo=response.data;
            res.send(userInfo);
        })
        .catch((error) => console.log(error));
});

app.get("/api/sadhInfo", async(req, res) => {
    let userInfo = "";
    await axios
        .get(sadhInfoEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            userInfo=response.data;
            res.send(userInfo);
        })
        .catch((error) => console.log(error));
});

app.get("/api/eckhartInfo", async(req, res) => {
    let userInfo = "";
    await axios
        .get(eckhartInfoEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            userInfo=response.data;
            res.send(userInfo);
        })
        .catch((error) => console.log(error));
});

app.get("/api/headspaceInfo", async(req, res) => {
    let userInfo = "";
    await axios
        .get(headspaceEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            userInfo=response.data;
            res.send(userInfo);
        })
        .catch((error) => console.log(error));
});

app.get("/api/deepakInfo", async(req, res) => {
    let userInfo = "";
    await axios
        .get(deepakEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            userInfo=response.data;
            res.send(userInfo);
        })
        .catch((error) => console.log(error));
});

app.get("/api/dalaiTweets", async(req, res) => {
    let tweets = [];
    let media = [];
    let user = [];
    await axios
        .get(dalaiTweetsEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            tweets = response.data.data;
            media = response.data.includes.media;
            user = response.data.includes.users;

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
            let fullResponse = mergeUser(tweetsWithMedia, user);
            res.send(fullResponse); 
            
        })
        .catch((error) => console.log(error));
});

app.get("/api/sadhTweets", async(req, res) => {
    let tweets = [];
    let media = [];
    let user = [];
    await axios
        .get(sadhTweetsEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            tweets = response.data.data;
            media = response.data.includes.media;
            user = response.data.includes.users;

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
            let fullResponse = mergeUser(tweetsWithMedia, user);
            res.send(fullResponse);
        })
        .catch((error) => console.log(error));
});

app.get("/api/eckhartTweets", async(req, res) => {
    let tweets = [];
    let media = [];
    let user = [];
    await axios
        .get(eckhartTweetsEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            tweets = response.data.data;
            media = response.data.includes.media;
            user = response.data.includes.users;

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
            let fullResponse = mergeUser(tweetsWithMedia, user);
            res.send(fullResponse); 
        })
        .catch((error) => console.log(error));
});

app.get("/api/deepakTweets", async(req, res) => {
    let tweets = [];
    let media = [];
    let user = [];
    await axios
        .get(deepakTweetsEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            tweets = response.data.data;
            media = response.data.includes.media;
            user = response.data.includes.users;

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
            let fullResponse = mergeUser(tweetsWithMedia, user);
            res.send(fullResponse); 
 
        })
        .catch((error) => console.log(error));
});

app.get("/api/headspaceTweets", async(req, res) => {
    let tweets = [];
    let media = [];
    let user = [];
    await axios
        .get(headspaceTweetsEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            tweets = response.data.data;
            media = response.data.includes.media;
            user = response.data.includes.users;

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
            let fullResponse = mergeUser(tweetsWithMedia, user);
            res.send(fullResponse);   
        })
        .catch((error) => console.log(error));
});

//Search page functions//

app.get("/api/searchUsers", async(req, res) => {
    let userID = "";
    let tweetResults = "";
    const search = req.query.search;
    await axios
        .get(`https://api.twitter.com/2/users/by/username/${search}`, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            userID=response.data.data.id;
            axios
                .get(`https://api.twitter.com/2/users/${userID}/tweets?max_results=5&expansions=author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics&media.fields=url,preview_image_url`,
                {headers: { Authorization: `Bearer ${token}`,}})
                .then((response) => {
                    tweetResults = response.data;
                    res.send(tweetResults);
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
    
