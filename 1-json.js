const fs = require('fs')
const chalk = require('chalk');
const successLog = chalk.green.inverse.bold;


const book = {

    title:"Ego is the Enemy",
    author:'Rayn Holiday'
}

const bookJson = JSON.stringify(book);

fs.writeFileSync('1-json.json', bookJson);

console.log(successLog('Json is ready!'));

