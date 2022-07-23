let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let res = document.getElementById('res')

function Comparar(){
    if (num1.value === num2.value){
        res.innerHTML = `Os valores ${num1.value} e ${num2.value} são iguais`
    }else{
        res.innerHTML += `Os valores ${num1.value} e ${num2.value} são diferentes`
    }
    
    let soma = Number(num1.value) + Number(num2.value)
    let comparaDez = 'menor'
    let comparaVinte = 'menor'

    if(soma > 10){
        comparaDez = 'maior'
    } if(soma > 20){
        comparaVinte = 'maior'
    }   
        res.innerHTML+= `<p>A soma dos números é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20. </p>`   
}

function Resetar(){
    num1.value = ''
    num2.value = ''
    res.innerHTML = ''
} 