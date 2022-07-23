let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function numeroDigitado(n){ //numeroDigitado vai ser lido como variavel n
    if(Number(n) >=1 && Number(n) <=100){ //Number(n) = converte para número // entre 1 e 100
        return true
    }else{
        return false
    }
}

function naLista(n, l){
    if(l.indexOf(Number(n)) != -1){ // indexOf verificar se existem variaveis com mesmo valor // "-1" diz que não tem com mesmo valor
        return true
    } else{
        return false
    }
}

function Adicionar(){ //função ao clicar no botao adicionar numeroDigitado na lista
    if(numeroDigitado(num.value) && !naLista(num.value, valores)){ //se numeroDigitado E naLista forem diferentes(True)        
        valores.push(Number(num.value))
        let item = document.createElement('option') //criei elemento ('option' do html) dentro da variavel "item"
        item.text = `Valor ${num.value} adicionado` //cada item(option) vai ter o texto + num.value escrito
        lista.appendChild(item) // cada item(option) é acrescentado na lista(select)
        res.innerHTML= '' // limpar resultado após o número ser acrescentado na lista
    }else{
        window.alert('Valor invalido ou repetido na lista.')
    }
    num.value = '' // limpa a variavel numdigitado (deixa o campo em branco)
    num.focus() // seleciona automaticamente variavel num
}
function Finalizar(){
    if(valores.length == 0){
        window.alert('Adicionar valores antes de finalizar!')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            media = soma / total

            if(valores[pos] >maior)
            maior = valores[pos]
            if(valores[pos] <menor)
            menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML+= `<p>Ao todo temos ${total} números cadastrados </p>`
        res.innerHTML+= `<p>O maior valor informado foi ${maior} </p>`
        res.innerHTML+= `<p>O menor valor informado foi ${menor} </p>`
        res.innerHTML+= `<p>A soma de todos os valores é ${soma} </p>`
        res.innerHTML+= `<p>A média de todos os valores é ${media} </p>`
    }
}