function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} hora e ${minutos} minutos.`
    if (hora >= 5 && hora <=12) {
        //BOM DIA!
        img.src = './imagens/dia.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 13 && hora <= 18) {
        //BOA TARDE!
        img.src = './imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = './imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}