const express = require("express");
const crypto = require('crypto');

const app = express();

    
app.get('/', (req, res) => {
    const start = Date.now();
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`This request took ${Date.now() - start} seconds`);
        res.send("Hi there!!!");
    })
    
});

app.listen(3000);

