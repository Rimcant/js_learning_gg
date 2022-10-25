//calcular o factorial de um numero 5! = 5x4x3x2x1

function factorial(n) {
    let fat =1
    for (let c = n; c>1; c--) {
        fat *= c // fat = fat*c
    }
return fat
}

console.log (factorial(3))