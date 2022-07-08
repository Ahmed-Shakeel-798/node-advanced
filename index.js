const express = require("express");
const { Worker } = require("worker_threads");

const app = express();

    
app.get('/', (req, res) => {
    const worker = new Worker('./worker.js');
    worker.on('message', data => {
        res.send(data);
    });
    worker.postMessage('Start!');
});

app.listen(3000, () => { 
    console.log("Server running at 3000");
});

