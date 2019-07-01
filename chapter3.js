let a = "A man, a plane, a canal, Panama".split (", ");
console.log(a);
console.log(a.reverse());


//exercise 3.2
let b = "honey badger".split ("");
console.log (b);

for (let x = 0; x < b.length; x++) {
    console.log(b[x]);
}

console.log(!!b[13]);

for (let i = 0; i <= 10; i++) {             // in class i wrote on the board <== ???
    console.log (i);
}


//Chapter 3.3
a = [42, 8, 17, 99]
console.log(a)

console.log (a.slice (1))                  // the number within the parenthesis is the new start
console.log (a.slice (3))

console.log (a.slice (1, 3))              // Start with the first array and cut off the third array element

console.log (a.length)                    // how many pieces in the array
console.log (a[a.length-1])               // to access the last element in the array (can be confusing if long variable name)

console.log (a.slice(-1))               // a second way to pick off last array element from the end
console.log (a.slice (-2))              // show last two elements in the array

console.log (a.slice(-1)[0])




//3.3.1 exercises
t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log (t)
console.log (t.slice(2, 8))                 //list the third through the third to last
console.log (t.slice(2, t.length-2))        // 3rd to 3rd to last using slice and length
console.log (t.slice(-8,-2))               //accomplish the same task using a negative index




//chapter 3.4
console.log (t.includes (7))
console.log (t.includes("foo"))

console.log (a)                         // 42, 8, 17, 99
console.log (a.sort())                  //sorts according to alphabetical, 1 comes before 8, (17, 42, 8, 99)
console.log (a)                         // a is forever changed because it was sorted (mutated)

console.log (a.reverse())               // reverse() also mutates your string forever

console.log (a.push (6));               // at this point it returns the new length of the array
console.log (a)                         // this prints the new array with added 6 at the end

console.log (a.pop (6));                //pop returns the value of the final element (while removing it as a side-effect)
console.log (a)                         //pop() removes last array element

let lastElement = a.pop();
console.log (lastElement)
console.log (a)
let theAnswerToLifeTheUniverseandEverything = a.pop ();
console.log (theAnswerToLifeTheUniverseandEverything)

//chapter3.4.3
b = ["ant", "bat", "cat", 42];
console.log (b);
console.log (b.join());                //join on default, (comma)
console.log (b.join (", "));           //join on comma, space
console.log (b.join ("--"));            //join on double dashes --
console.log (b.join(""));




//exercise 3.4.4
console.log (b.join (" ").split (" ") == b)
// Why is it not the same? it turned 42 from an integer to a string

console.log (b.shift ());               //removing from the front of the array
console.log (b);
console.log (b.unshift('strawberry'));  //adding to the front of an array(double quotes didn't work)
console.log (b);

//chapter3.5





