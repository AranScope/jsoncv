const express = require('express');
const bodyParser = require('body-parser');
const resume = require('./resume');
const morgan = require('morgan');
const app = express();

let r = new resume('./templates/index.html');

app.use(bodyParser.json());
app.use(morgan('tiny'));

app.post('/generate', (req, res) => {
    let data = req.body;
    let result = r.compile(data);
    res.send(result);
});

app.get('/', (req, res) => {
    res.send('hello');
});

let port = process.env.PORT || 3001;

app.listen(port, function(err) {
    if(err) throw err;
    console.log('listening on', port);
});
