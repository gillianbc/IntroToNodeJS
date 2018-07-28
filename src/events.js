//publisher / subscriber event emitter pattern
//function that returns an event emitter
var EventEmitter = require('events').EventEmitter;

// The publisher
var getResource = function(num){
    var eventEmitter = new EventEmitter();
    process.nextTick(function(){
        var count = 0;
        eventEmitter.emit('start');
        //Every 10 seconds, execute this function
        var t = setInterval(function(){
            eventEmitter.emit('data',++count);
            if (count=== num){
                eventEmitter.emit('end',count);
                clearInterval(t);
            }
        },10)
    });
    return eventEmitter;
};
// The subscriber
var r = getResource(4);

r.on('start', function(){
    console.log('I have started...');
});

r.on('data', function(itemcount){
    console.log('Data received ' + itemcount)
});

r.on('end', function(n){
    console.log('I have processed ' + n + ' events')
});
