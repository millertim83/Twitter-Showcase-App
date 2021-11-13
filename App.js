const express = require('express');
const path = require('path');
const port = 3002;
const app = express();

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(port, () => console.log(`app listening on ${port}!`));

//want to rename this file "server.js"//