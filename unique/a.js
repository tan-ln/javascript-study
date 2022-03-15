const arr = [1, 2, 3, 4, 1, 4, 5, 3, 6]
function unique(arr) {
    // 严谨性
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