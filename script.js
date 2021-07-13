
// console.log("testing js file...")

// Number to binary converter
// num = 12 
// 12 % 2 = 0
// 6 % 2 = 0
// 3 % 2 = 1
// 1 % 2 = 1

// binary -> reverse of ouput of above results 

// bin_num = 1100


// function to reverse a string
function reverse(str){
  var reverse = "";
  for(var i = str.length - 1; i >= 0; i--){
    reverse += str.charAt(i);
  }
  return reverse;
}



// user input 
var num = 234;
var input = num;

var binStr = "";
while(num != 1 ){
  // num = num / 2; 
  binStr += (num % 2).toString();

  num = Math.floor(num / 2);
  if(num == 1){
    binStr += 1;
  }

  // console.log(num);
  // console.log(binStr)
}
var binary = reverse(binStr);

console.log(`The binary of ${input} is ${binary}`);
