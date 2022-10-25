function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas `
    if (hora >= 6 && hora <13) {
    //bom dia!
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 13 && hora <20) {
    //boa tarde!
    img.src = 'fototarde.jpg'
    document.body.style.background = '#b9846f'
} else {
    //boa noite!
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}
}