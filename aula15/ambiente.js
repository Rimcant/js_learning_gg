let num = [5,8,2,9,3]
//acrescentar valor à posiçao 5
num [5] = 6
//acrescentar valor sem saber a posiçao
num.push(7)
//comprimento
console.log(num)
console.log('o vetor tem '+ num.length + ' posiçoes')
console.log (`o primeiro valor do vetor é ${num[0]}`)
//metodo sort
num.sort()

console.log(`nosso vetor ordenado é ${num}`)
console.log (`o primeiro valor do vetor é ${num[0]}`)


console.log('vamos dar inicio ' + num[0])
for (let pos = 0; pos < num.length; pos++) {
    console.log(`a posiçao ${pos} tem o valor ${num[pos]} `) ; 
}
console.log ('fim')

pos = ''

//mais facil

/*
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/

for (let pos in num ) { //para cada posiçao dentro de num
    console.log(num[pos])
}

//buscar valores la dentro
console.log ('buscar valores dentro dum vetor:')
console.log(`tem o valor 7? em q posiçao? ` + num.indexOf(7))
console.log ('vou adicionar o valor 7 ao fim' + num.push (7))
console.log('o vetor agora é' + num)
console.log('o valor 7 ta em 2 posiçoes '+ num.indexOf(7))
console.log('tem o valor 0?  ' + num.indexOf(0) )
var a = num.reduce((a, b) => a + b, 0)
console.log (`a soma e' ${a} e a media e'  ${a/ num.length} `)