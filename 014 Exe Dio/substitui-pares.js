function substituiPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log('Você já é 0!')
        }else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0
        }
    }
}
let array = [0,2,3,4,5,6,7,8]
console.log(substituiPares(array))
console.log(array)