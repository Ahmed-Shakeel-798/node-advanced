/** 
 * run the file: SET UV_THREADPOOL_SIZE=1 && node multitask.js  
*/

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest () {
    https.request("https://www.google.com", res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log('Http: ', Date.now() - start);
        });

    }).end();
}

function doHash () {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`Hash: `, Date.now() - start);
    })
}

console.log('POOL SIZE: ', process.env.UV_THREADPOOL_SIZE);
doRequest();

fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS: ', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
