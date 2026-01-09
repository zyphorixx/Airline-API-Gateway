const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

const PORT = 3005;

app.get('/home', (req, res) => {
    return res.json({message : 'OK'});
});

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});
