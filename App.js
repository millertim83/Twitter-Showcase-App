const { default: axios } = require('axios');
const express = require('express');
const path = require('path');
const port = 3002;
const app = express();
require('dotenv').config();

let accessToken = '';

const getToken = () => {
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
    return axios
        .post(
            'https://api.twitter.com/oauth2/token',
            'grant_type=client_credentials',
            config
        )
        .then((res) => {
            //console.log(res);
            axios.defaults.headers.common = {
                Authorization: `Bearer ${res.data.acces_token}`
            };
            console.log('token: ', res.data.access_token);
            return res.data.acces_token;
        })
        .catch((error) => console.log(error));
};

getToken();

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(port, () => console.log(`app listening on ${port}!`));

//want to rename this file "server.js"//

