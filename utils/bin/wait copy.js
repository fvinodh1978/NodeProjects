abc()
function abc() {
    const waitUntil = (condition, checkInterval = 5000) => {
        return new Promise(resolve => {
            let interval = setInterval(() => {
                console.log(condition());
                if (!condition()) return;
                clearInterval(interval);
                resolve();
            }, checkInterval)
        })
    }

    async function start() {
        let flag = false;
        var timeOut = 60000;
        console.log('wait 5 sec');
        setTimeout(() => { flag = true }, timeOut); // set flag=true after 5 seconds
        await waitUntil(() => flag == getValue()); // wait
        console.log('do something when flag is true...');
    }

    start();
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