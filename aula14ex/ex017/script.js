function gerar() {
    var num = document.getElementById ('numero')
    var select = document.getElementById('select')
    var res = document.getElementById('res')
    var index = ''
    var resultado = ''
    var num = Number(num.value)

    for (var index = 1; index <= 10; index++) {
        var resultado = num*index
        let item = document.createElement('option')
        item.text = ` ${num} x ${index} = ${resultado}`
        select.appendChild(item)
        //res.innerHTML += (`<br> ${num} x ${index} = ${resultado}`)        
    } 
    
}