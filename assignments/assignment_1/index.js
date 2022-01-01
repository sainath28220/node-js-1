function getNameFromCommandLine() {
    // const process = require("process");
    // return process.argv[2];
    // process.argv=[...process.argv,"Yash"]
    // return process.argv[2]
}

function getNameFromEnv() {
    const process = require("process");
    process.env.Name = "Yash";
    return process.env.Name
}

function getNameFromReadLine() {
    // Write your code here
    const readline = require("readline");
    const rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout,
    })
    rl.question("Get user input from readline",(answer)=>{
        return answer
    })
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}