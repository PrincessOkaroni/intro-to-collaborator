// arrays

const days = ["mon", "tue", "wed"];

//.push method

days.push("thu", "fri", "sat");

console.log(days); // ['mon', 'tue', 'wed', 'thu']

//.unshift
days.unshift("sun");

console.log(days); // ['sun', 'mon', 'tue', 'wed', 'thu']

// .shift()

console.log(days); // ['mon', 'tue', 'wed', 'thu']
// console.log(days[1]);

// .slice -> non destructive
const deleted = days.slice(2);
console.log(deleted); // ['wed', 'thu']
console.log(days); // ['mon', 'tue', 'wed', 'thu']

// .splice -> destructive (mutaes the array)

const deletedTwo = days.splice(2, 1);
console.log(deletedTwo); // ['wed']
console.log(days); // ['mon', 'tue', 'thu']

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul"];

months.push("aug", "sep", "oct", "nov", "dec");
console.log(months);
months.unshift("dec", "nov", "oct", "sep", "aug");
console.log(months);
