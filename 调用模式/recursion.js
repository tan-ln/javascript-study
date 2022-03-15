// 递归

// function flexisum(a) {
//     // var total = 0;
//     for (let i = 0; i < arguments; i++) {
//         // var ele = arguments[i], n;
//         console.log(typeof arguments[i])
//         console.log(arguments[i])
//         // return
//         // if (Array.isArray(ele)) n = flexisum.apply(this, ele);
//         // total += n;
//     }
//     // return total;
// }

// flexisum(20)
// console.log(flexisum(20))

const args = [1, 3 ,2]
function f(x, y, z) {
    console.log(x, y, z)
    for (let i = 0; i < arguments; i++) {
        console.log(arguments[i])
    }
}


f(...args)
