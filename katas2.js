// comece a criar a sua função add na linha abaixo
function add(x, y) {
    let total = 0

    total = x + y
    return total
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(x, y) {

    let total = 0

    for (let i = 0; i < y; i++) {
        total = add(x, total)
    }
    return total
}


// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(x, y) {
    let total = 1
    for (let i = 0; i < y; i++) {
        total = multiply(x, total)
    }
    return total
}
console.log(power(2, 8))

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(x) {

    let total = x
    for (let i = 1; i < x; i++) {
        total = (multiply(total, i))
    } 
    return total
}
console.log(factorial(4));
// console.log(factorial(4))
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(x) {

    let soma = 0
    let ant = 0
    let prox = 1

    for (let i = 0; i < x; i++) {
        soma = add(ant, prox)
        ant = prox
        prox = soma
    } 
    return ant
}
console.log(fibonacci(6))
// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
