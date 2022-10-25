function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'menino.jpg')
                var genero = 'criança'
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'gajo.jpg')
            
            } else if (idade <65) {
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'gaja.jpg')
            } else if (idade <65) {
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else  {
                //idoso
                img.setAttribute('src', 'velha.jpg')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = (`Detetamos ${genero} com ${idade} anos `)
        res.appendChild (img)
    }

}