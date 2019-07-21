//function sayHello(name){
  //  console.log('hello ' + name)  
//};

function sayGbye(name){
    console.log('good bye ' + name )
};


sayHello('Matt');
sayGbye('Theresa');


function double(number){
    console.log (number * 2);
}
double(1);

function crazyMath(numA,numB){
    let first = numA * 2
    let second = numB * 3
    console.log(first + second)
};
crazyMath(7,8);

function sayHello(name){
    return('hello ' + name)  
};
let greeting = sayHello('Theresa')
console.log(greeting);




function saygoodbye(name){
    return ('goodbye ' + name)
};
let out = saygoodbye('Theresa')
console.log(out);

function namee(num,name,){
    let temp = ""
    for (let i = 0; i < num; i++){
      temp = temp + name + " "
    }
return(temp);
}



let answer = namee(4,'Theresa')
console.log(answer);

function namee(num,name){
    const temp = nam + " "
    return temp.repeat(num)
}