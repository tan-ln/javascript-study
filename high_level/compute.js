function add(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

// 函数是一等对象，fn => object
// fn 要做什么操作，传进来
function compute(a, b, fn) {
    return fn(a, b)
}

// 高阶函数 函数的参数或者返回值是函数
console.log(compute(6, 2, add))

console.log(compute(6, 2, minus))

// 将函数作为参数