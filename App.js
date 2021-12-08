const { default: axios } = require('axios');
const express = require('express');
const path = require('path');
const port = 3001;
const app = express();
require('dotenv').config();

let accessToken = '';

const getToken = async () => {
    if (accessToken) return accessToken;
    const config = {
        headers: {
            Content_Type: 'application/json'
        },
        auth: {
            username: process.env.API_KEY,
            password: process.env.API_SECRET_KEY
        }
    };
    
    try {
        const response = await axios.post(
            'https://api.twitter.com/oauth2/token',
            'grant_type=client_credentials',
            config
        );

        axios.defaults.headers.common = {
            Authorization: `Bearer ${response.data.access_token}`
        };
        console.log('token: ', response.data.access_token);
    } catch (err) {
        console.log(err);
    }

    
    try {
        const getResponse = await axios.get('https://api.twitter.com/2/users/by/username/elonmusk'); 

        console.log(getResponse.data);
    } catch (err) {
        console.log(err);
    }
};

getToken();

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(port, () => console.log(`app listening on ${port}!`));

app.get('/api/muskTimeline', function(req, res) {
    res.send('Hello World!');
})

const muskTimeline = {
    "data": [
        {
            "id": "1461942451053252612",
            "text": "@WSBChairman Bitcoin cures cancer"
        },
        {
            "id": "1461890824057282568",
            "text": "@Teslarati @SpaceX @RDAnglePhoto I love these shots"
        },
        {
            "id": "1461885253493170179",
            "text": "@teslaownersSV @UniverCurious Electrical &amp; mechanical engineering"
        },
        {
            "id": "1461884161233494019",
            "text": "@UniverCurious What my father’s work looked like when I was growing up"
        },
        {
            "id": "1461883543081078793",
            "text": "@tesla_addicted One of the improvements to FSD vision involves training with actual photon counts, so removing the filters used to make pictures pretty to the human eye"
        },
        {
            "id": "1461879721797603331",
            "text": "@hohocho @Tesla Should be coming back online now. Looks like we may have accidentally increased verbosity of network traffic.\n\nApologies, we will take measures to ensure this doesn’t happen again."
        },
        {
            "id": "1461813021127421956",
            "text": "@archillect https://t.co/jwK7GKAvoQ"
        },
        {
            "id": "1461809183205036035",
            "text": "A simpler time, it was https://t.co/RIkkgfKAk1"
        },
        {
            "id": "1461807570138640387",
            "text": "@hohocho @Tesla Checking …"
        },
        {
            "id": "1461802264058859521",
            "text": "https://t.co/sRFHbGZ89m https://t.co/qoccnMXSz9"
        }
    ],
    "meta": {
        "oldest_id": "1461802264058859521",
        "newest_id": "1461942451053252612",
        "result_count": 10,
        "next_token": "7140dibdnow9c7btw3z3an9mez981eaiyxlt8fqjqa90x"
    }
}



