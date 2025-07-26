const prices: (number | string)[] = [1,3,2,2,2, 'as'];
prices.push(1);
prices.push('1');

console.log("Prices: " + prices);
console.log(prices);
console.log(JSON.stringify(prices));

let user: [string, number, boolean];
// user = ['nicobytes', 15];
// user = ['12', 15];

// user = [];
// user = ['nico'];
// user = ['nico', 12];
user = ['nico', 12, true];
const [username, age] = user;
console.log(username);
console.log(age);

console.log("");

const [username2, age2, esPersona] = user;
console.log(username2);
console.log(age2);
console.log(esPersona);
