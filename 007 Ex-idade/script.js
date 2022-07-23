function verificar() {
    var data =new Date() // VARIAVEL PARA LOCALIZAR DATA ATUAL
    var anoatual = data.getFullYear() // "pegar ano atualizado"
    var fano = document.getElementById('txtano') //"ler variavel escrita no input"
    var res = document.getElementById('res') //"enviar variavel escrita no input"
    if(fano.value.length == 0 || Number(fano.value) > anoatual){ //"Se o tamanha da var fano == 0 ou valor da var fano (em numero) > var anoatual"
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') //selecionar por nome o input:radio [1]masculino [2] feminino
        var idade = anoatual - Number(fano.value) // fórmula da idade // (anoatual - fano)
        var gênero = '' // apenas criei variavel gênero como string para ser lida depois da seleção do input:radio
        var img = document.createElement('img')
        
        if (fsex[0].checked) { //condição aninhada
            gênero = 'Homem' //input:radio [0] masculino é declarado como variavel HOMEM
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'imgs/Hcriança.png')
            }else if (idade <21) {
                img.setAttribute('src', 'imgs/Hjovem.png') 
            }else if (idade < 55) {
                img.setAttribute('src', 'imgs/Hadulto.png')
            }else if (idade < 100){ 
                img.setAttribute('src', 'imgs/Hidoso.png')
            }else {
                img.setAttribute('src', 'imgs/mumia.png')
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher' //input:radio [1] feminino é declarado como variavel MULHER
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imgs/Mcriança.png')
            }else if (idade <21) {
                img.setAttribute('src', 'imgs/Mjovem.png') 
            }else if (idade < 55) {
                img.setAttribute('src', 'imgs/Madulta.png')
            }else if (idade < 100){ 
                img.setAttribute('src', 'imgs/Midosa.png')
            }else {
                img.setAttribute('src', 'imgs/mumia.png')
            }
        }
        res.style.textAlign = 'center' //alinhar resultado centralizado
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //inclusão da imagem
    }
}