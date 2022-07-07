process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");

if(cluster.isMaster){
    // I am the master/cluster manager
    console.log(`Am I master? ${cluster.isMaster}.\nMy thread size is: ${process.env.UV_THREADPOOL_SIZE}`);

    cluster.fork(); // causes index.js to be executed again but in child mode
    cluster.fork();
    cluster.fork();
    // cluster.fork();
}else{
    // I am a child, and my job is to run the server
    console.log(`Am I master? ${cluster.isMaster}.\nMy thread size is: ${process.env.UV_THREADPOOL_SIZE}`);

    const express = require("express");
    const crypto = require('crypto');

    const app = express();

    
    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send("Hi there!!!");
        })
        
    });
    
    app.listen(3000);
}


