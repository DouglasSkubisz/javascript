function arrayNumero(arr,num){

    try{

        if(!arr || !num) throw new ReferenceError('Envie os parâmetros')

        if(typeof arr !== 'object') throw new TypeError('Envie um array válido')

        if(typeof num !== 'number') throw new TypeError('Envie um número válido')

        if(arr.length !== num) throw new RangeError('O tamanho do array deve ser igual número informado')

        return arr

        } catch(e){
            if (e instanceof RangeError) {
                console.log('RangeError!')
                console.log(e.stack)
            } else if (e instanceof ReferenceError) {
                console.log('ReferenceError!')
                console.log(e.stack)
            } else {
                console.log('Outro tipo de erro!')
                console.log(e.stack)
            }
        }
}
console.log(arrayNumero([5,'s', 'e']))
