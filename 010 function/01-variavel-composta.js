let num = [5,8,2,9,3]
num[3]=6 /**adiciona ou altera o número do indice entre colchetes*/
num.push(7) //adiciona mais um número no final do array
num.length
// num.sort() // deixa o array em ordem crescente

console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor é o ${num.sort()}`)
console.log(num[5])

let valores = [8,1,7,6,9,5,2]

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//mais simples ainda fazer com o for each

let numeros = [6,5,4,3,2,1]
numeros.sort() //ORGANIZA EM ORDEM CRESCENTE
let indice = 0

for(let indice in numeros){ //FOR EACH = PARA CADA INDICE DENTRO DA VARIAVEL
    console.log(`O indice ${indice} tem o valor ${numeros[indice]}`)
}

let pos = valores.indexOf(2) // index.OF serve para mostrar se a variavel existe e em qual array
    console.log(pos)