//my age
const myAge = 28;
//will change
let earlyYears = 2;
earlyYears *= 10.5;

let laterYears = myAge - 2;
//dog years
laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

let myName = 'Adam';


console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years in dog years.`);