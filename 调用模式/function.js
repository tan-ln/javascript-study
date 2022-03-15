var myObject = {
    value: 0
}

myObject.double = function() {
    var that = this;

    var helper = function() {
        console.log(this.value)         // undefined
        console.log(that.value)         // 0
    }

    helper();
}

myObject.double()