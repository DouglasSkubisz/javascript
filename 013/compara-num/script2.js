function comparaNumeros(num1,num2){
    const primeiraFrase = criaPrimeiraFrase(num1,num2)
    const segundaFrase = criaSegundaFrase(num1, num2)

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1,num2){
    let saoIguais = ''
    if(num1 !== num2){
        saoIguais = 'não'
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}
function criaSegundaFrase(num1,num2){
    const soma = num1 + num2
    let res10 = 'menor'
    let res20 = 'menor'
    const comparaDez = soma >10
    const comparaVinte = soma >20

    if (comparaDez){
        res10 ='maior'
    }
    if(comparaVinte){
        res20= 'maior'
    }
    return `Sua soma é ${soma}, que é ${res10} que 10 e ${res20} que 20.`
}

console.log(comparaNumeros(9,9))