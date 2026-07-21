// JavaScript has 7 primitive data types

// 1. String — text
let name = 'Rodrigo'

// 2. Number — integers and decimals
let age = 42
let height = 1.75

// 3. Boolean — true or false
let isStudent = true

// 4. Undefined — declared but no value assigned
let job

// 5. Null — intentional "no value"
let car = null

// 6. Symbol — unique identifier
let id = Symbol('id')

// 7. BigInt — very large integers
let big = 9007199254740991n

// typeof shows the type of each value
console.log(typeof name)      // string
console.log(typeof age)       // number
console.log(typeof height)    // number
console.log(typeof isStudent) // boolean
console.log(typeof job)       // undefined
console.log(typeof car)       // object  <-- known JS quirk, null reports as "object"
console.log(typeof id)        // symbol
console.log(typeof big)       // bigint
