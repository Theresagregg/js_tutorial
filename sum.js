
function sum(n) {
    let total = 0
    for (let i = 0; i <= n;i++) {
        total = total + i
    }
return total
};
let a = sum(4)
console.log(a);

function isEven(n) {
let answer =n % 2 
return answer === 0
};
let b = isEven(26)
console.log(b)