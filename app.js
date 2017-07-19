const express = require('express');
const bodyParser = require('body-parser');
const resume = require('./resume');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

let r = new resume('./templates/index.html');

app.use(bodyParser.urlencoded());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.static('web'));

app.post('/generate', (req, res) => {
    let data = req.body;
    console.log(data);
    let result = r.compile(data);
    res.send(result);
});

let port = process.env.PORT || 3001;

app.listen(port, function(err) {
    if(err) throw err;
    console.log('listening on', port);
});
