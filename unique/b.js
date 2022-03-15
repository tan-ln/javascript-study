// es6 set 做数组去重
const arr = [1, 2, 3, 4, 1, 4, 5, 3]
// let mySet = new Set(arr)
// for (const num of mySet) {
//     console.log(num)        
// }

function unique(arr) {
    // 检测 注意严谨性
    if (!Array.isArray(arr)) {
        console.log('type error')
        return        
    }
    // 类数组
    // array of | from
    // for of 
    return Array.from(new Set(arr))     // Array.from()方法可以将Set结构转换为数组
}
console.log(unique(arr))