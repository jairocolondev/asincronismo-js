function sum(num1, num2) {
  return num1 + num2
}

function callback(num1, num2, sumNumbers) {
  return sumNumbers(num1, num2)
}

console.log(callback(10, 10, sum));

setTimeout( function() {
  console.log('Profundizando en el asincronismo')
}, 3000)

function gretting(name) {
  console.log(`Hola ${name} siempre estudiando para superarte`);
}

setTimeout( gretting, 3000, 'Jairo')