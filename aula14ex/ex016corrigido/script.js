function verificar() {
    var inicio = window.document.getElementById ('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById ('res')

if (inicio.value.length == 0 || fim.value.length == 0 || passo == 0){
    window.alert('[ERRO] Verifique os dados novamente!')
}
var i = Number(inicio.value)
var f = Number(fim.value)
var p = Number(passo.value)
res.innerHTML = ('contado ')
    
   for ( i; i<=f; i=i+p) {


    res.innerHTML += (`${i} &#128073 `)

   }
   res.innerHTML += (` &#128378  `)
   
   /*

   while (contar < f) {
    contar = contar + p
    res.innerHTML = (`imprimir ${contar} ${i}`)
   }
    //res.innerHTML = (`esta variavel é inicio ${i} f ${f} p ${p}`)
    
    //imprimir sequencia
    //res.innerHTML = ('print') */

}