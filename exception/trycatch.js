var add = function(a) {
    if (a != 'number') {
        throw {
            name: 'TypeError',
            message: 'a need to be number'
        }
    }
}


try {
    add('a')
} catch (error) {
    console.log(error)
    // console.log(error.name + error.message)
}