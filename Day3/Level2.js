//Question1
let base = 20;
let height = 10;
let area = 0.5 * base * height;
console.log("The area of the triangle is", area);

//Question2
let a = 5,
  b = 4,
  c = 3;
let perimeter = a + b + c;
console.log("The perimeter of the triangle is", perimeter);

//Question3;
let length = 10;
let width = 5;
let area1 = length * width;
let perimeter1 = 2 * (length + width);
console.log("Area:", area1);
console.log("Perimeter:", perimeter1);

//Question4
let pi = 3.14;
let r = 7;
let area2 = pi * r * r;
let circumference = 2 * pi * r;
console.log("Area:", area2);
console.log("Circumference:", circumference);

//Question9
let hours = 40;
let ratePerHour = 28;
let weeklyEarning = hours * ratePerHour;
console.log("Your weekly earning is", weeklyEarning);

//Question10
let firstName1 = "Promise";
if (firstName1.length > 7) {
  console.log("Your name is long");
} else {
  console.log("Your name is short");
}

//Question11
let fName = "Promise";
let lName = "Edet";
if (fName.length > lName.length) {
  console.log(
    "Your first name, " + fName + " is longer than your family name, " + lName,
  );
} else if (fName.length < lName.length) {
  console.log(
    "Your family name, " + lName + " is longer than your first name, " + fName,
  );
} else {
  console.log("Your first name and family name are the same length");
}

//Question12
let myAge = 250;
let yourAge = 25;
console.log("I am " + (myAge - yourAge) + " years older than you.");
