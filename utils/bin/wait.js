var waitTime = 60000;
var interval = 5000;
var pollCount = 1;
var pollInterval;
var timeOutId;
statTimer();
function timer() {
    var flag;
    console.log(pollCount);
    flag = getValue();
    console.log(flag);
    if (pollCount >= waitTime / interval || flag) {
        stopTimer();
    }else{
        setTimeout(repeat, 1000);
    }
    pollCount++;
}

function stopTimer() {
    clearInterval(pollInterval);
}

function statTimer(){
    timeOutId = setTimeout(timer, interval);
}

function timer() {
    console.log('Hello, world!');
    setTimeout(repeat, 1000);
  }


function getValue() {
    var fs = require("fs");
    var customer;
    try {
        // Note that jsonString will be a <Buffer> since we did not specify an
        // encoding type for the file. But it'll still work because JSON.parse() will
        // use <Buffer>.toString().
        const jsonString = fs.readFileSync("./customer.json");
        customer = JSON.parse(jsonString);
    } catch (err) {
        console.log(err);
        return;
    }
    return customer.value;
}