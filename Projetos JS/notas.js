/*
  Transfomrar notas escolares 

  Crie um algoritmo que transforme as notas escolares do sistema numérico para sistema de notas em caracteres
  tipo A,B,C,D e F .

  * de 90 para cima - A 
  * de 80 a 89 - B
  * de 70 a 79 - C
  * de 60 a 69 - D
  * menor que 60 - F
*/

let nota = 80
function getNota(nota) 
{

let notaA = nota >= 90 && nota <= 100
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaF = nota <= 60 && nota >= 0
let notaFinal

if (notaA) {
    notaFinal = "A"
} else if (notaB) {
    notaFinal = "B"
} else if (notaC) {
    notaFinal = "C"
} else if (notaD) {
    notaFinal = "D"
} else if(notaF) {
    notaFinal = "F"
} else {
    notaFinal = "Nota inválida"
    }
 return notaFinal
}


console.log(getNota(80))
console.log(getNota(95))
console.log(getNota(65))
console.log(getNota(10))
console.log(getNota(78))
console.log(getNota(105))
