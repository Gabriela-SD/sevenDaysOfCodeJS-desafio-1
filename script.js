/*a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros: */ 

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm){
    console.log(`As variáveis numeroUm "${numeroUm}" e stringUm "${stringUm}" tem o mesmo valor, mas tipos diferentes`)
} else {
  console.log(`As variáveis ${numeroUm} e ${stringUm} não tem o mesmo valor`)
}
console.log(typeof(numeroUm))
console.log(typeof(stringUm))

if (numeroTrinta != stringTrinta) {
  console.log(`As variáveis numeroTrinta ${numeroTrinta} e ${stringTrinta}stringTrinta tem o mesmo valor e mesmo tipo`)
} else {
  console.log(`As variáveis numeroTrinta "${numeroTrinta}" e stringTrinta "${stringTrinta}" não tem o mesmo tipo`)
}
console.log(typeof(numeroTrinta))
console.log(typeof(stringTrinta))

if (numeroDez == stringDez) {
  console.log(`As variáveis numeroDez "${numeroDez}" e stringDez "${stringDez}" tem o mesmo valor, mas tipos diferentes`)
} else {
  console.log(`As variáveis numeroDez "${numeroDez}" e stringDez "${stringDez}" não tem o mesmo valor`)
}
console.log(typeof(numeroDez))
console.log(typeof(stringDez))