const {parentPort} = require("worker_threads");

parentPort.on('message', (msg) => {
    console.log(msg);
    let counter = 0;

    while(counter < 1e9){
        counter++;
    }
    
    parentPort.postMessage(`Counted it: ${counter}`);
})
