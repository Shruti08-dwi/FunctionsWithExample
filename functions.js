// ---------------------------------function expression-------------------------//
console.log("/*-----------------------functions Expression----------------------*/");
// example1
console.log(" example1");
var addTwoNumbers = function (a,b) {
	return a + b;
}
console.log(addTwoNumbers(2, 3));

// example2
console.log(" example2");
const getRectArea = function(width, height) {
    return width * height;
  };
  
  console.log(getRectArea(3, 4));

// ------------------------------------IIFE function-----------------------------//
  console.log("/*--------------------------IIFE function-------------------------*/");
// example1
console.log(" example1");
var student= (function () {
    var stu = "i am student of jspiders";
    console.log(stu);
})();

// example2
console.log(" example2");
 var result = (function () {
        var name = "Barry"; 
        console.log(name);  
    })(); 

//---------------------------------------- naming function
console.log("/*--------------------------naming function-------------------------*/");

// example1
console.log(" example1");
var x = myFunction(6, 9);   

function myFunction(a, b) {
  return a * b;             
}
console.log(x); 
// example2
console.log(" example2");
var y = myFunction( 12 ,30) ;
function myFunction(length, width){
    return length * width;
}
console.log(y); 

// ---------------------------------------arrow functon-------------------------//
console.log("/*--------------------------Arrow function-------------------------*/");
// example1
console.log(" example1");
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  console.log(materials.map(material => material.length));

// example2
console.log(" example2");
let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers); 

// ---------------------------------------callback function--------------------------//
console.log("/*--------------------------callback function-------------------------*/");
// example1
console.log(" example1");
function greeting(name) {
     console.log(name);
  }
  
  function processUserInput(callback) {
    var name = "shruti Dwivedi";
    callback(name);
  }
  console.log(processUserInput(greeting));

console.log(" example2");
//   example2
var numbers1 = [1, 2, 4, 7, 3, 5, 6];
let oddNumbers = numbers1.filter(function(number) {
    return number % 2;
});
console.log(oddNumbers);


// ---------------------------------------Anonymous function------------------------//
console.log("/*--------------------------Anonymous function-------------------------*/");
// example1
console.log(" example1");
let show = function () {
    console.log('Its a First Anonymous function');
};
show();

// example2
console.log(" example2");
let display = function(){
    console.log("its a Second Anonymous function")
};
display();

//-------------------------------------- function with  default parameter------------//
console.log("/*-------------------function with default parameter-------------------*/");
// example1
console.log(" example1");
function users(First_name ="shruti",Last_name = "Dwivedi", age = 24)
    {
    return{First_name , Last_name,age};
    
}
console.log(users("shruti","Dwivedi",24));

// example2
console.log(" example2");
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));

  //------------------------- function with parameter and argument---------------------*/
console.log("/*----------------function with parameter and argument------------------*/");
// example1
console.log(" example1");
function user(name,age,company,salary){
    
return{name,age,company,salary};
}
console.log(user("shruti",24,"IBM",30000));

// example2
console.log(" example2");
function area(length,width){
    return(length * width);

}
console.log(area(3,6));



// ----------------------check the number is even or odd--------------------------------*/
console.log("// --------------------check the number is even or odd--------------------*/");
// example
console.log("example");
let number = 26;

// if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd.");
}


//---------------------------check the number is prime or not---------------------------*//
console.log("// --------------------check the number is prime or not--------------------*/");
// example
console.log("example");
function isPrime(num) {

    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }
  
  console.log(isPrime(121));


  //-----------------------------------------fabonaci series---------------------------*//
console.log("// ---------------------------print fabonacci series----------------------*/");
// example
console.log("example");
function fibonacci(num) 
{ 
    var num1=0; 
    var num2=1; 
    var sum; 
    var i=0; 
    for (i = 0; i < num; i++)  
    { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    return num2; 
} 
console.log("Fibonacci(5): "+fibonacci(5)+"<br>");
console.log("Fibonacci(8): "+fibonacci(8)+"<br>");

//-----------------------------------------palindrome or not---------------------------*//
console.log("// ---------------------------palindrome or not----------------------*/");
// example
console.log("example");
function Palindrome(str) {
    let len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
let string = 'nitin';
let value = Palindrome(string);
console.log(value);

//----------------------------------------find biggest among three---------------------------*//
console.log("// --------------------------find biggest among three number----------------------*/");
// example
console.log("example");
let num1 = 12;
let num2 = 34;
let num3 = 50;
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
console.log("The largest number is " + largest);


//----------------------------------------factorial of a number---------------------------*//
console.log("// --------------------------factorial of a number----------------------*/");
// example
console.log("example");
let numb = 5;
if (numb < 0) {
    console.log('invalid');
}
else if (number === 0) {
    console.log("The factorial of ${numb} is 1.");
}
else {
    let fact = 1;
    for (i = 1; i <= numb; i++) {
        fact *= i;
    }
    console.log("The factorial of "+numb+"= "+fact);
}


//----------------------------------------reverse a string------------------------------*//
console.log("// --------------------------reverse a string--------------------------*/");
// example
console.log("example");
function revString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
let string1= 'ShrutiDwivedi';
let result1 = revString(string1);
console.log(result1);