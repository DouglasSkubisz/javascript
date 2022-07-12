function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() 
    var hora = 20//data.getHours()

if(hora >= 4 && hora < 12){
    msg.innerHTML = 'Bom dia!' 
    img.src = 'img/manhã.png'
    document.body.style.background = '#d3d462'
} else if (hora >= 12 && hora < 18){
    msg.innerHTML = 'Boa tarde!'
    img.src = 'img/tarde.png'
    document.body.style.background = '#6273d4'
}else {
    msg.innerHTML = 'Boa noite!'
    img.src = 'img/noite.png'
    document.body.style.background = '#484a53'
}

}