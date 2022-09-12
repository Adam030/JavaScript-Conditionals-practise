let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 18;
if (age >= 18 && registeredEarly) {
  raceNumber *= 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am, and your race number is ${raceNumber}.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am, and your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You will race at 12:30, and your race number is ${raceNumber}.`);
} else{
  console.log('See the registration desk');
}