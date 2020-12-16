const fs = require('fs')
const chalk = require('chalk');
const successLog = chalk.green.inverse.bold;

const user = {
    name: "max",
    planet: "Earth",
    age: 33
}


//function writeJsinFile(){
// const bookJson = JSON.stringify(user);
//
// fs.writeFileSync('1-json.json', bookJson);
//
// console.log(successLog('Json is ready!'));
//
//}


function updateJson(name,age){
    const dataBuffer = fs.readFileSync('1-json.json');
    const dataJson = dataBuffer.toString();
    const data = JSON.parse(dataJson);
    data.name = name;
    data.age = age;
    const dataToStrinf = JSON.stringify(data)
    fs.writeFileSync('1-json.json',dataToStrinf)
    console.log(successLog('json update to :' + dataToStrinf));
}

//writeJsinFile()
updateJson('daniel',23);







