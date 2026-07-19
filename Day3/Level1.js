//Question 1
let firstName = "Promise";
let lastName = "Edet";
let country = "Nigeria";
let city = "Lagos";
let age = 25;
let isMarried = false;
let year = 2025;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

//Question 2
console.log(typeof "10" === 10); // false — typeof returns a string
console.log(typeof "10" === "number"); // false — it's 'string' not 'number'
console.log(typeof "10"); // 'string'

//Question 3
console.log(parseInt("9.8") === 10); // false — parseInt gives 9, not 10
console.log(parseInt("9.8")); // 9

//Question 4
// Truthy — any value JS treats as true
console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true

// Falsy — values JS treats as false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false

//Question 5
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false  — loose, so '4' becomes 4
console.log(4 == "4"); // true   — loose equality, type coercion
console.log(4 === "4"); // false  — strict, different types

// Length comparison
console.log("python".length !== "jargon".length); // false (falsy comparison)

//Question 6
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true

// No 'on' in both dragon and python
console.log(!("dragon".includes("on") && "python".includes("on"))); // false

//Question 7
const now = new Date();

console.log("Year:   ", now.getFullYear());
console.log("Month:  ", now.getMonth() + 1); // 0-indexed, so +1
console.log("Date:   ", now.getDate());
console.log("Day:    ", now.getDay()); // 0=Sun, 6=Sat
console.log("Hours:  ", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds since Jan 1 1970:", Date.now());
