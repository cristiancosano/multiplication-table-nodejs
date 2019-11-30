
const fs = require('fs');
const colors = require('colors');

let createFile = (base, limite) => {
    return new Promise((resolve, reject)=>{

        if(!Number(base)){
            reject(`The base '${ base }' is not a number`)
            return;
        }
        if(!Number(limite)){
            reject(`The limit '${ limite }' is not a number`)
            return;
        }

        let path = './tables/';
        let filename = `Table-${base}-${limite}.txt`;
        let filecontent = ''; 

        for( let i = 1; i <= limite; i++){
            filecontent += `${ base } * ${ i } = ${ base*i }\n`;
        }

        fs.writeFile(path+filename, filecontent, (error) => {
            if(error) reject(error);
            else resolve(filename);

        });


    })
}

let list = (base, limit) => {
    console.log('===========================')
    console.log(`Table of ${base} (1 to ${limit})`.green)
    console.log('===========================')
    for (let i = 1; i <= limit; i++) 
        console.log(`${ base } * ${ i } = ${ base*i }`);
}

module.exports = {
    createFile,
    list
}