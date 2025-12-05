// console.log("1"+2);
// console.log("sece"+true); 
// console.log("2"+3);//when do operation(+) with string and number then number convert into string
// console.log("5"-2);//when do operation(-,*,/) with string and number then string convert into number
// console.log("10"*2);
// console.log("20"/2);
// console.log("10"%"4");
// console.log("hello"-2);//NaN Not a Number
// console.log("hello"*2);
// console.log(true+2);//1+2=3(true convert into 1 and false convert into 0)
// console.log(false+5);

// // Explicit Conversion
// console.log(Number("123"));//string to number
// console.log(String(123));//number to string
// console.log(Number("abc"));//undefined to number -> NaN
// console.log(String(undefined));
// console.log(Boolean(1));//0, "", null, undefined, NaN -> false
// console.log(Boolean(0));
// console.log(Boolean("hello"));
// console.log(Boolean(""));

// // if condition

// if(""){
//     console.log(" ''-- This is true");
// }

// if("hello"){
//     console.log("hello -- This is true");
// }
// if(0){
//     console.log("0 -- This is true");
// }       
// if(5){
//     console.log("5 -- This is true");
// }   
// if([]){
//     console.log(" [] -- This is true");
// }

// //=== vs ==
// console.log(5=="5");//true(value check)
// console.log(5==="5");//false(type and value check)  

// let age = 18;
// age=30;
// console.log(age);//reassigning value

// let age = 18;
// age=30;
// let age = 25;//error: Identifier 'age' has already been declared
// let age = 18;//re declaration we can't do in let
// console.log(age);//reassigning value

// var score = 100;
// var score = 200;//re declaration we can do in var
// score = 300;//reassigning value
// console.log(score);//200

// const pi = 3.14;
// // pi = 3.14159;//error: Assignment to constant variable.
// // const pi = 3.14159;//error: Identifier 'pi' has already been declared
// console.log(pi);

//hositing

// console.log(marks);//undefined
// var marks = 90;

// console.log(height);//error: Cannot access 'height' before initialization
// let height = 180;

// console.log(weight);//error: Cannot access 'weight' before initialization
// const weight = 75;

// function

// function greet(){
//     if(1){
//         var count = 5;
//     }
//     console.log(count);//5(var is function scoped)
 
// }
// greet();

// function show(){
//     if(1){
//         let total = 10;
//     }   
//     console.log(total);//error: total is not defined(let is block scoped var variable)
// }   
// show();

// function display(){
//     if(1){
//         const level = 3;
//         console.log(level);
//     }       
//     //console.log(level);//error: level is not defined(const is block scoped variable)
// }       
// display();

// function add(a, b){
//     return a + b;
// }
// console.log(add(5, 10));
// console.log(add("Hello ", "World"));


//function expression

// const multiply = function(x, y){
//     return x * y;
// }   
// console.log(multiply(4, 5));
// console.log(multiply("4", "5"));//"4""5"="45"

//named function expression

// const divide = function div(x, y){
//     return x / y;
// }   
// console.log(divide(20, 4));
//console.log(div(20,4));//error: div is not defined

// const factorial = function fact(n){
//     if(n===0 || n===1){
//         return 1;
//     }
//     return n * fact(n - 1);
// }
// console.log(factorial(5));

//callback function

// function greet(callback){
//     console.log("Hello!");
//     callback();
// }
// function done(){
//     console.log("Done greeting.");
// }   
// greet(done);

// // greet(function(){
// //     console.log("Done greeting.");
// // });


//higher order function


// function higherorder(func){
//     console.log("Before calling the function");
//     func();
// }
// function callbackFunction(){
//     console.log("After calling the function");
// }

// higherorder(callbackFunction);

// // higherorder(function(){
// //     console.log("After calling the function");
// // });

// Arrow function
// const greetarrow = (name) => {
//     return "hello " + name;
// }

// console.log(greetarrow("santhiya"));

// const add = (x, y) => x + y;
// console.log(add(10, 20));

// const square = x => x * x;
// console.log(square(5));

// const sub =(x, y,z) => x - y -z;
// console.log(sub(20,5,3));//output:12
// console.log(sub(50,20));//output:NaN

//arrays functions

// const fruits = ["apple", "banana", "cherry", "date"];
// const upperFruits = fruits.push("elderberry");
// console.log(fruits);//["apple", "banana", "cherry", "date", "elderberry"]
// console.log(upperFruits);//5(length of the array after adding new element)

// const removedFruit = fruits.pop();
// console.log(fruits);//["apple", "banana", "cherry", "date"]
// console.log(removedFruit);//elderberry

// const firstFruit = fruits.shift();
// console.log(fruits);//["banana", "cherry", "date"]
// console.log(firstFruit);//apple 

// const number=[10,20,30,40,50];
// const addedNumber=number.unshift(5);
// console.log(number);//[5,10,20,30,40,50]
// console.log(addedNumber);//6(length of the array after adding new element at the beginning)

// const index=[1,2,3,4,5];
// for(let i=0;i<index.length;i++){
//     console.log(index[i]);
// }

// const colors=["red","green","blue"];
// let i = colors.length ;

// let fruits = ["apple", "banana", "cherry", "date"];
// //sclice(1,3) means start from index 1 to index 3-1=2
// let sliced= fruits.slice(1,3);
// console.log(fruits);//["apple", "banana", "cherry", "date"]

// console.log(sliced);//["banana", "cherry"]   


// let lasttwo= fruits.slice(-2);
// console.log(lasttwo);//["cherry", "date"]

// let spliced= fruits.splice(1,2,"mango","kiwi");
// console.log(fruits);//["apple", "mango", "kiwi", "date"]
// console.log(spliced);//["banana", "cherry"]     


// let indexofcherry= fruits.indexOf("cherry");
// console.log(indexofcherry);//-1(not found)


// let indexofkiwi= fruits.indexOf("kiwi");
// console.log(indexofkiwi);//2(found)     


// let includesdate= fruits.includes("date");
// console.log(includesdate);  //true   


// let includesbanana= fruits.includes("banana");
// console.log(includesbanana);  //false   


// let joined= fruits.join(", ");
// console.log(joined);//"apple, mango, kiwi, date"    


// let reversed= fruits.reverse();
// console.log(reversed);//["date", "kiwi", "mango", "apple"]      


// let sorted= fruits.sort();
// console.log(sorted);//["apple", "date", "kiwi", "mango"]    

// let numbers = [40, 100, 1, 5, 25, 10];
// console.log(numbers.indexOf(25));//4
// numbers.sort();
// console.log(numbers);//[1, 10, 100, 25, 40, 5] incorrect sorting


// let numbers = [40, 100, 1, 5, 25, 10];
// let found = numbers.find(numbers => numbers > 20);
// console.log(found);//40(first element >20)

// let numbers = [40, 100, 1, 5, 25, 10];
// let even=numbers.find(numbers => numbers % 2 === 0);
// console.log(even);//40(first even element) 

// let numbers = [40, 100, 1, 5, 25, 10];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);//[80, 200, 2, 10, 50, 20]

//arrays of objects
// let students = [
//     {name: "Alice", age: 20,grade: "A"},
//     {name: "Bob", age: 22,grade: "B"},
//     {name: "Charlie", age: 19,grade: "A"}
// ];  
// let names = students.map(student => student.name);
// console.log(names);//["Alice", "Bob", "Charlie"]
// let ages = students.map(student => student.age);
// console.log(ages);//[20, 22, 19]
// let adultStudents = students.filter(student => student.age >= 21);
// console.log(adultStudents);//[{name: "Bob", age: 22}]   
// let totalAge = students.reduce((sum, student) => sum + student.age, 0);
// console.log(totalAge);//61(20+22+19)
// let gradeAStudents = students.filter(student => student.grade === "A");
// console.log(gradeAStudents);//[{name: "Alice", age: 20,grade: "A"},{name: "Charlie", age: 19,grade: "A"}]

//chaning array methods
// let students = [
//     {name: "Alice", age: 20,grade: "A"},
//     {name: "Bob", age: 22,grade: "B"},  
//     {name: "Charlie", age: 19,grade: "A"}
// ];
// let namesOfGradeA = students
//     .filter(student => student.grade === "A")
//     .map(student => student.name);
// console.log(namesOfGradeA);//["Alice", "Charlie"]
// let totalAgeOfGradeA = students
//     .filter(student => student.grade === "A")
//     .reduce((sum, student) => sum + student.age, 0);
// console.log(totalAgeOfGradeA);//39(20+19)   

// let students = [
//     {name: "Alice", marks: 85},
//     {name: "Bob", marks: 92},
//     {name: "Charlie", marks: 78},
// ];
// let topScorer = students.fitter(stu =>stu.marks>80).map(stu => stu.name);
// console.log(topScorer);//["Alice","Bob"]

//looping
// let colors = ["red", "green", "blue"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);//output: red green blue
// }
// while (colors.length > 0) {
//     let color = colors.pop();
//     console.log(color);//output: blue green red
// }
// //for in

// let person = { name: "Alice", age: 25, city: "New York" };
// for (let key in person) {
//     console.log(key + ": " + person[key]);
//     //output:
//     //name: Alice
//     //age: 25
//     //city: New York
// }

// //for of

// let fruits = ["apple", "banana", "cherry","data","elderberry"];
// for (let f of fruits) {
//     console.log(f);
//     //output:
//     //apple
//     //banana
//     //cherry
//     //data
//     //elderberry
// }

//forEach--we can pass three parameters(value,index,array),callback function

// let numbers = [10, 20, 30, 40, 50];
// numbers.forEach(function(num, index, arr) {
//     console.log("Index " + index + ": " + num);
//     //output:
//     //Index 0: 10
//     //Index 1: 20   
//     //Index 2: 30
//     //Index 3: 40
//     //Index 4: 50
// });

//REDUCE
//(accumulator, currentValue, currentIndex, array)
// let numbers = [1, 2, 3, 4, 5];
// let total = numbers.reduce((sum,current) => sum + current, 0);
// console.log(total);//15(1+2+3+4+5)       

// let product = numbers.reduce((prod,current) => prod * current, 1);
// console.log(product);//120(1*2*3*4*5)

// //finding maximum value
// let max = numbers.reduce((a,b) => (a > b ? a : b));
// console.log(max);//5

//concatenating strings,array

// let numbers = [1, 2, 3];
// let number2 = [4, 5, 6];
// let com = numbers.concat(number2);
// console.log(com);//[1,2,3,4,5,6]

//spread operator(...)

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combined = [...arr1, ...arr2];
// console.log(combined);//[1,2,3,4,5,6]

//synchronous code

// console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 2000);
// console.log("third");   
// //output:
// //first
// //third
// //second(after 2 seconds delay)

//callback hell

// setTimeout(() => {
//     console.log("first");
//     setTimeout(() => {
//         console.log("second");
//         setTimeout(() => {
//             console.log("third");
//         }, 2000);
//     }, 2000);
// }, 2000);
// output:
// first
// second(after 2 seconds delay)
// third(after 2 seconds delay)

//promise
let icecreampromise = new Promise((resolve, reject) => {
    let iceCreamready = false;
    if (iceCreamready) {
        resolve("Ice cream is ready!"); 
    } else {
        reject("Ice cream is not ready.");
    }
});
icecreampromise
    .then((message) => {
        console.log( "👌yay!" +message);
    })
    .catch((error) => {
        console.log("oops" + error);
    });