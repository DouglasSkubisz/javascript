//SOLUÇÃO 1

function verificaPalindromo(string){
    if(string === string.split('').reverse().join('')){
        console.log(`1 - a palavra ${string} é um palindromo `)
    }else{
        console.log(`1 - a palavra ${string} NÃO é um palindromo `)
    }
}

verificaPalindromo('amor')

// SOLUÇÃO 2

function verificarPalindromo(string){
    for (let i = 0; i < string.length / 2; i++){
        if(string[i] === string[string.length -1 -i]){
            console.log(`2 - a palavra ${string} é um palindromo `)
        }else {
            console.log(`2 - a palavra ${string} NÃO é um palindromo `)
        }
    }
}
verificarPalindromo('ovo')