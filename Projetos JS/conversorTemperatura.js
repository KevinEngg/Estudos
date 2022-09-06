/*
  Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação 
  de uma unidade para outra.

  C = (F-32)* 5/9
  F = C* 9/5 + 32
*/

function TransformGrau(valor)
{
    const celciusExists = valor.toUpperCase().includes('C') //Verificando se contém o C
    const fahrenheitExists = valor.toUpperCase().includes('F') // Verificando se contém F

    //fluxo de erro
    if (!celciusExists && !fahrenheitExists) {
        throw new Error('Grau inválido')
    } 
    //Fluxo ideal, F to C 
    let Novovalor = Number(valor.toUpperCase().replace("F", "")) //Transformando a string em número
    let formula = fahrenheit => (fahrenheit - 32) * 5 / 9
    let grauC = ' C°'
    

    //fluxo alternativo C to F

    if (celciusExists) {
        Novovalor = Number(valor.toUpperCase().includes("C", "")) //Transformando a string em número
        formula = celcius => celcius * 9 / 5 + 32
        grauC = ' F°'
    }

    return formula(Novovalor) + grauC
}

try {

    console.log(TransformGrau('50F'))
    console.log(TransformGrau('70C'))
    console.log(TransformGrau('80f'))
    console.log(TransformGrau('30c'))
    console.log(TransformGrau('50x'))
   
    
    
} catch (error) {
    console.log(error.message)
}
