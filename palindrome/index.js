module.exports = function isPalindrome(x){
  let str = x.split('')
  let revStr= str.reverse().join('')
//console.log(x,revStr)


  let answer = x === revStr
  return answer
 
}

