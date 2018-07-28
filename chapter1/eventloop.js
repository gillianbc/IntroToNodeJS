let count = 0;
//Every 10 seconds, log to console
const t = setInterval(function() {
    count++;
    console.log("Interval of 10 ms, count = " + count);
    if (count === 10) {
        clearInterval(t);
    }
}, 10);
//Log to console after x milliseconds
setTimeout(function() {
    console.log("Timeout at 50 ms");
},50);

console.log("Running!");