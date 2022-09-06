/*
 Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
   * receitas [] 
   * despesas []

   Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família 
   está com saldo positivo ou negativo, seguido do valor do saldo. 
  

*/

    let Gastos =
    {
        receitas: [100,200,300,5000,5000],
        despesas: [1000, 50, 800, 900, 30, 2500.8,800]  
    }

function soma(array) // Função para somar os valores dos arrays
{
    let total = 0

    for (let value of array) { //For que percorre os valores do array 
        total += value
    }
    return total
}

function calcularGastos() //Função para Verificar o saldo é positivo ou negativo ? 
{
    const calcularReceitas = soma(Gastos.receitas) //Somando todos os Gastos chamando a função de soma
    const calcularDespesas = soma(Gastos.despesas) //Somando todas as receitas chamando a função de soma
    let totalV = calcularReceitas - calcularDespesas // Calculando a diferença das receitas e despesas
    let totalP = totalV >= 1
    let totalF = totalV < 0 

    if (totalP) { //Se total positivo
        console.log ("Total positivo saldo: " + totalV)
    } else if (totalF) { //Se não se saldo negativo
        console.log("Total negativo saldo: " + totalV)
    } else // se saldo for exatamente 0 
    {
      console.log("Valor neutro ou seja saldo = 0")    
    }
}

calcularGastos()
