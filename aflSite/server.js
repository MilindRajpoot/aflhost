const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/aflSite'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname, '/dist/aflSite}/index.html'));
});


app.listen(process.env.PORT || 8080);