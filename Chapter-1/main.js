console.log("Hello World");
var b = 'smoothie';
console.log(b);
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
console.log(fruits[2]);
fruits[0] = 'pear';
console.log(fruits);
for(let i = 0; i<fruits.length;i++)
{
    console.log(fruits[i]);
}

console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits, 'Hello World');
console.log(fruits.push('blackberries'), fruits);
fruits[4] = 'new fruit';
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('waterMElon');
console.log(fruits); 
let vegetables = ['tomato', 'potato', 'cauliflower', 'broccoli'];

let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);

console.log(allGroceries.slice(1,4));
console.log(fruits.reverse());
let someNumber = [2, 4, 6, 1, 7, 9, 0, 12, 23, 17];
console.log(someNumber.sort(function(a,b){return a-b}));
let emptyArray = new Array();
for(let num=0;num<10;num++)
 {
    emptyArray.push(num);
 }
console.log(emptyArray);


// Objects in JavaScript
// dictionaries in python

let student = {
    first:'Rafeh',
    last:'Qazi',
    age:25, 
    height:170,
    studentInfo: function(){ 
        return this.first +'\n' + this.last;
    }
};
console.log(student.first);
student.first = 'Sejal'
console.log(student.first)
// console.log(student[first]);
console.log(student.studentInfo());


// conditionals, control flows (if else)
let age = 20;
if((age>=18) && (age<=35)){
    status = 'target demo';
}
else{
    status = 'Not my audience';
}

console.log(status);


// switch statement
 var text;
switch(6)
{
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text);