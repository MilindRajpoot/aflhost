const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/aflSite'));

app.get('*', (req, res) => {
    res.sendFile('/dist/aflSite/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


app.listen(process.env.PORT || 8080);