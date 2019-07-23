function anniversary (month, day) {
    if ((month === 'December' && day === 15) 
    || (month === 'dec' && day === 15) 
    || (month === 'Dec' && day === 15))
 { console.log('Happy Anniversary!');
} else {
    console.log('Happy Extended Honeymoon!');
}
};

console.log(anniversary('December', 15));
console.log(anniversary('dec', 15));
console.log(anniversary('Dec', 15));
console.log(anniversary('March',7));



for (let i = 0; i < 100; i ++) {
let num = i + 1

    if (num % 3 === 0 && num % 5 !== 0) {
        console.log('fizz')
    } else if 
        (num % 5 === 0 && num % 3 !== 0) {
        console.log('buzz')
    } else if
        (num % 3 === 0 && num % 5 === 0) {
        console.log('fizzbuzz')
     } else {
    console.log(num)
    }
}




/*for (let i = 0; i < 101; i++ ) {
   let num = i 
    if (num/3) {
        console.log('fizz')
    } else if (num/5) {
        console.log('buzz')
    } else if (numb/3 && num/5) {
        console.log('fizzbuzz')
    } else {
     return num
   console.log(num); 
}
}*/
