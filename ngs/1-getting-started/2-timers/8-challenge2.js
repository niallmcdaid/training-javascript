// Print "Hello World"
// Every second
// And stop after 5 times
// After 5 times. Print "Done" and let Node exit.

let i = 0;
const intervalID = setInterval(
    () => {
        console.log("Hello World");
        i++;

        if (i === 5) {
            clearInterval(intervalID);
            console.log("Done");
        }
    },
    1000
);
