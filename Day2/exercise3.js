//Question 1
let sentence1 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

let matches = sentence1.match(/love/gi); // /gi = global + case-insensitive
console.log("Count:", matches.length); // 3
console.log("Matches:", matches);

//Question 2
let sentence2 =
  "You cannot end a sentence with because because because is a conjunction";

let matches = sentence2.match(/because/g);
console.log("Count:", matches.length); // 3
console.log("Matches:", matches);

//Question 3

//Question 4
