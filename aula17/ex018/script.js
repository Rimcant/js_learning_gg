
var ns = []
function adicionar(){ 
    res.innerHTML = ''
    let txtn = document.getElementById('txtn')
let select = document.getElementById('select')   
    let n = Number(txtn.value)
    if (txtn.value.length == 0) {
        alert('tens que escrever um numbaro')
    }   else if (n<=0 || n > 100) {
        alert('o numbaro tem que tar entre 1 e 100')
        
    } else if (-1 !== ns.indexOf(n)) {
        alert('já tenho esse numbaro')
    } else {
        let item = document.createElement('option')
        item.text = ` valor ${n} adicionado`
        select.appendChild(item)
        ns.push(n) 
    }
   // alert(` ${ns} e ${ns.length}`)

} 
var res = document.getElementById('res')
function finalizar() {
    if (ns.length==0) {
        alert(`adiciona numbaros`)
    
    } else {
    var compv = ns.length
    res.innerHTML = (`ao todo temos ${compv} valores`)
let soma = 0
for (let pos in ns ) {
        soma += ns [pos]
    
    }
    //res.innerHTML += (`<br>valor  ${a} valores`)
    res.innerHTML += (`<br> a soma de todos os valores é = ${soma} `)
    res.innerHTML += (`<br> a média é ${soma/compv} `)

   // alert('finalizou')
}
}
