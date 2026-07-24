alert('Example message')
number1 = prompt('Type number1')
number2 = prompt('Type number2')

// Scenario 1: prompt always returns string, so + concatenates instead of adding
result = number1 + number2
console.log(result)
document.getElementById('concat').textContent = 'String (concatenation): ' + result

// Scenario 2: convert both to number with parseFloat, then the sum works
number1 = parseFloat(number1)
number2 = parseFloat(number2)

result = number1 + number2
console.log(result)
document.getElementById('sum').textContent = 'Number (sum): ' + result
