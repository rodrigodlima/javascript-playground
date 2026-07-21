# Primitive Data Types

## What is a primitive?

A primitive is the simplest kind of value in JavaScript. It holds a single value, has no methods or properties of its own, and it is **immutable** — you can replace the value in a variable, but you can never change the value itself.

JavaScript has 7 primitive types:

| Type        | Example                | `typeof` result |
| ----------- | ---------------------- | --------------- |
| `string`    | `'Rodrigo'`            | `"string"`      |
| `number`    | `42`, `1.75`           | `"number"`      |
| `boolean`   | `true`, `false`        | `"boolean"`     |
| `undefined` | `let job`              | `"undefined"`   |
| `null`      | `null`                 | `"object"` ⚠️   |
| `symbol`    | `Symbol('id')`         | `"symbol"`      |
| `bigint`    | `9007199254740991n`    | `"bigint"`      |

⚠️ `typeof null` returns `"object"`. This is a bug from the first version of JavaScript in 1995. It was never fixed because too much existing code depends on it.

See [`index.js`](./index.js) for a runnable example:

```bash
node primitives/index.js
```

## What is non-primitive?

Everything that is not a primitive is an **object**. That includes plain objects, arrays, and functions.

```js
let person = { name: 'Rodrigo', age: 42 }  // object
let colors = ['red', 'green', 'blue']      // array (an object)
let greet = function () {}                 // function (an object)
```

Objects can hold multiple values, can have properties and methods, and are **mutable** — their contents can be changed after creation.

## The 3 key differences

### 1. Immutable vs mutable

A primitive value can never be modified. Any "change" creates a brand new value.

```js
let name = 'Rodrigo'
name.toUpperCase()   // returns a NEW string
console.log(name)    // 'Rodrigo' — the original never changed
```

An object can be modified in place.

```js
let person = { name: 'Rodrigo' }
person.name = 'Silva'
console.log(person.name)  // 'Silva' — the original changed
```

### 2. Copied by value vs copied by reference

When you assign a primitive, JavaScript copies the **value**. The two variables are completely independent.

```js
let a = 10
let b = a   // b gets its own copy of 10
b = 20
console.log(a)  // 10 — unaffected
```

When you assign an object, JavaScript copies the **reference** (the memory address). Both variables point at the *same* object.

```js
let x = { value: 10 }
let y = x        // y points to the same object as x
y.value = 20
console.log(x.value)  // 20 — both changed!
```

This is the single most common source of confusion for beginners.

### 3. Compared by value vs compared by identity

Primitives are equal when their values match.

```js
console.log('abc' === 'abc')  // true
console.log(10 === 10)        // true
```

Objects are only equal when they are literally the *same* object in memory.

```js
console.log({ a: 1 } === { a: 1 })  // false — two different objects
let obj = { a: 1 }
console.log(obj === obj)            // true — same object
```

## Bonus: why does `'abc'.toUpperCase()` work?

If primitives have no methods, how can you call one on a string?

JavaScript temporarily wraps the primitive in a matching object (`String`, `Number`, `Boolean`), calls the method, returns the result, and throws the wrapper away. This is called **autoboxing**. The primitive itself stays untouched.
