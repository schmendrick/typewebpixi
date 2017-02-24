import {ExampleModule} from "./ExampleClass";
const readline = require('readline');
var Fiber = require('fibers');


let example = new ExampleModule.ExampleClass();

function sleep(ms : number) {
    var fiber = Fiber.current;
    setTimeout(function() {
        fiber.run();
    }, ms);
    Fiber.yield();
}


//process.stdin.setRawMode(true);
process.stdin.resume();

console.log("LET US ECHO SOMETHING: " + example.echo("foo"));
console.log("test");

 //
 // Fiber(function() {
 //        console.log('wait... ' + new Date);
 //        sleep(4000);
 //        process.stdin.
 //        var something = process.stdin.read(1);
 //        console.log("read one char from stdin..." + something);
 //        console.log('ok... ' + new Date);
 // }).run();

/////////////////


///////////////////////

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('What do you think of Node.js? ', (answer: string) => {
//     console.log('Thank you for your valuable feedback:', answer);
//     //rl.close();
// });

//////////////////////////////

// without this, we would only get streams once enter is pressed
//
// process.stdin.setEncoding('utf8');
//
// console.log("sleeping...");
// sleep(2000);
// var something = process.stdin.read(1);
// console.log("read one char from stdin..." + something);

//
// process.stdin.on('readable', () => {
//     var chunk = process.stdin.read();
//     if (chunk !== null) {
//         process.stdout.write(`data: ${chunk}`);
//     }
// });


readline.
readline.emitKeypressEvents(process.stdin);
//
// process.stdin.on('keypress', (str, key) => {
//
//     console.log("<!!>");
//
//     if (key.ctrl && key.name === 'c') {
//
//         process.exit();
//     } else {
//         console.log(`You pressed the "${str}" key`);
//         console.log();
//         console.log(key);
//         console.log();
//     }
// });
console.log('Press any key...');


//
//
// console.log('sleeping 2...');
// sleep(2000);
 console.log('we are at the END!');