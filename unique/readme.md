**数组去重** 是常考的 js 基础题 
七种方法      
> 时间复杂度  是一个函数，定性描述了算法的运行时间 (O 表示)

1.  双重循环
```js
const arr = [1, 2, 3, 4, 1, 4, 5, 3, 6]
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error')
        return
    }
    // 准备一个空数组 结果数组 没有重复的元素了
    // 事先存放第一个元素
    const resultArr = [arr[0]]
    // 从第二个元素开始遍历
    for (let i = 1; i < arr.length; i++) {
        let flag = true
        for (let j = 0; j < resultArr.length; j++) {
            if (arr[i] === resultArr[j]) {
                flag = false
                break
            }
        }
        if (flag) {
            resultArr.push(arr[i])
        }
    }
    return resultArr
}
console.log(unique(arr))
```
在双重循环里 O(n^2) 内存消耗大

2. es6 set 数组去重
> set 创建新的数据结构，是值的集合，并且 set 值不会重复，可以用来**数组去重**
```js
const arr = [1, 2, 3, 4, 1, 4, 5, 3, 6]
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error')
        return        
    }
    // 类数组
    // Array.from()方法可以将 Set 结构转换为数组
    return Array.from(new Set(arr))     
}
console.log(unique(arr))
```