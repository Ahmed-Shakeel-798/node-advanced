const cluster = require("cluster");

if(cluster.isMaster){
    // I am the master/cluster manager
    console.log(`Am I master? ${cluster.isMaster}.`);

    cluster.fork(); // causes index.js to be executed again but in child mode
    cluster.fork();
    cluster.fork();
    cluster.fork();
}else{
    // I am a child, and my job is to run the server
    console.log(`Am I master? ${cluster.isMaster}.`);

    const express = require("express");
    const app = express();

    function doWork(duration){
        const start = Date.now();
        while(Date.now() - start < duration){}
    }
    
    app.get('/', (req, res) => {
        doWork(5000);
        res.send("Hi there!!!");
    });
    
    app.listen(3000);
}


