const { default: axios } = require('axios');
const express = require('express');
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

const dalaiTweetsEndpoint = "https://api.twitter.com/2/users/20609518/tweets?expansions=author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics";
const sadhTweetsEndpoint = "https://api.twitter.com/2/users/67611162/tweets?expansions=author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics";
const eckhartTweetsEndpoint = "https://api.twitter.com/2/users/14592008/tweets?expansions=author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics";
const headspaceTweetsEndpoint = "https://api.twitter.com/2/users/402025521/tweets?expansions=author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics";
const deepakTweetsEndpoint = "https://api.twitter.com/2/users/15588657/tweets?expansions=author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics";

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
    let tweetTimeline = "";
    await axios
        .get(dalaiTweetsEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            tweetTimeline=response.data;
            res.send(tweetTimeline);
        })
        .catch((error) => console.log(error));
});

app.get("/api/sadhTweets", async(req, res) => {
    let tweetTimeline = "";
    await axios
        .get(sadhTweetsEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            tweetTimeline=response.data;
            res.send(tweetTimeline);
        })
        .catch((error) => console.log(error));
});

app.get("/api/eckhartTweets", async(req, res) => {
    let tweetTimeline = "";
    await axios
        .get(eckhartTweetsEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            tweetTimeline=response.data;
            res.send(tweetTimeline);
        })
        .catch((error) => console.log(error));
});

app.get("/api/deepakTweets", async(req, res) => {
    let tweetTimeline = "";
    await axios
        .get(deepakTweetsEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            tweetTimeline=response.data;
            res.send(tweetTimeline);
        })
        .catch((error) => console.log(error));
});

app.get("/api/headspaceTweets", async(req, res) => {
    let tweetTimeline = "";
    await axios
        .get(headspaceTweetsEndpoint, {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            tweetTimeline=response.data;
            res.send(tweetTimeline);
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
                .get(`https://api.twitter.com/2/users/${userID}/tweets?max_results=5&expansions=author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics`,
                {headers: { Authorization: `Bearer ${token}`,}})
                .then((response) => {
                    tweetResults=response.data;
                    res.send(tweetResults);
                })
                .catch((error) => console.log(error));
        }).catch((error) => console.log(error));
})

app.get("/api/searchTopics", async(req, res) => {
    
    const search = req.query.search;
    await axios
        .get(`https://api.twitter.com/2/tweets/search/recent?tweet.fields=created_at,public_metrics&expansions=author_id&user.fields=name,username,profile_image_url&query=${search}`,
        {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
            let tweets = response.data.data.map((result) => {
                for (let i = 0; i < response.data.data.length; i++) {
                    if (response.data.includes.users[i].id === result.author_id) {
                        //let combinedObj = Object.defineProperty(result, "users", {value: response.data.includes.users[i]} )
                        let combinedObj = Object.assign(result, response.data.includes.users[i]);
                        return combinedObj;
                    } else return
                } 
                
                //search response.includes.users array for corresponding user
                //create new property called 'user' and assign 
                
            })
            console.log(tweets);
            res.send(tweets);
            
        })
        .catch((error) => console.log(error));
})


/*
if (!response.data.data.id) {
    res.send("No user found with that name!")
} else {
    userID=response.data.data.id;
    console.log(userID);
    axios
        .get(`https://api.twitter.com/2/users/${userID}/tweets?max_results=5&expansions=author_id&tweet.fields=attachments,public_metrics,created_at&user.fields=profile_image_url,verified,public_metrics`, 
        {headers: { Authorization: `Bearer ${token}`,}})
        .then((response) => {
        tweetResults=response.data;
        res.send(tweetResults);
        })
        .catch((error) => console.log(error));
        */