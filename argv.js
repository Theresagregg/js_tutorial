// Splice of the argv cuts out everything in the 
// commandline argument that falls within the numbers listed.
// The first number (0) is the first index to cut, 
// the second number (2) is the index at which you want to start.
process.argv.splice(0, 2);

// The only problem with the above is that it makes the string entered
// into the command line an array. This shows that result.
console.log(process.argv);

// This joins the elements of the array as a string; joined by a space.
console.log(process.argv.join(' '));

let name = process.argv.splice(0, 2);

function testNum(name) {
if  (name.length > 5) {
    return console.log(`<${name}>`)
} else {
    return console.log(`//${name}//`)
}
}
