const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json(['1', '2', '3']);
});

app.listen(3333, () => {
    console.log('Running on port 3333');
})