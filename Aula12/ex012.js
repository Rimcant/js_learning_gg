var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao exactamente ${hora} horas`)
if (hora >= 6 && hora < 12) {
    console.log(`bom dia`)
} else if (hora >= 13 && hora <20) {
    console.log(`boa tarde`)
} else if (hora >= 20 && hora < 24 || hora >= 0 && hora < 6) {
    console.log(`boa noite`)
}