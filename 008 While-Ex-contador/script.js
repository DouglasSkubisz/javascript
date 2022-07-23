function contar(){
    let ini = document.getElementById('txti') //posso tanto usar "var" quanto "let" para pegar ou ler variavel no input
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Preencha com número de "1" pra cima...')
    }else{
        res.innerHTML = 'Contando: <br><br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p<=0){
            window.alert('Valor minimo para passo é "1"...')
            p = 1
        } if (i<f) {
            for(let contador = i; contador <= f; contador += p){
            res.innerHTML += `${contador} 👉 `
            } 
        } else {
            for(let contador = i; contador >= f; contador -= p){
                res.innerHTML += `${contador} 👉 `
            }
        }
        res.innerHTML += 'FIM'
    }
}