let firstnumber = prompt('Digite o primeiro número')
let secondnumber = prompt('Digite o segundo número')

firstnumber = Number(firstnumber)
secondnumber= Number(secondnumber)

const sum = firstnumber + secondnumber
const sub = firstnumber - secondnumber
const multi = firstnumber * secondnumber
const div = firstnumber / secondnumber
const restDiv = firstnumber % secondnumber



alert('soma:' + sum)
alert('subtração:' + sub)
alert('multiplicação:' + multi)
alert('divisão:' + div)
alert('Resto da divisão:' + restDiv)