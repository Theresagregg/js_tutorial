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