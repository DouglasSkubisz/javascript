var agora = new Date() // variavel para abrir datas
var hora = agora.getHours() // variavel para pegar hora atual
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <12){
    console.log ('Bom dia!')
}else if (hora <= 18) {
    console.log('Boa tarde')
}else{
    console.log('Boa noite!')
}