//Exercise 5 - Check data types using typeof
 
let myName = 'Promise'
let isStudent = true
let myScore
let myPet = null
let myAge = 25
let myHeight = 5.6
let hobbies = ['coding', 'reading']
let address = { city: 'Lagos', country: 'Nigeria' }
 
console.log(typeof myName)      // "string"
console.log(typeof isStudent)   // "boolean"
console.log(typeof myScore)     // "undefined"
console.log(typeof myPet)       // "object"  ← known JS quirk: typeof null is "object"
console.log(typeof myAge)       // "number"
console.log(typeof myHeight)    // "number"
console.log(typeof hobbies)     // "object"
console.log(typeof address)     // "object"
 