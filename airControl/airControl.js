const TV = {
    open: function () {
        console.log('open the TV')
    },
    close: function () {
        console.log('close the TV')
    }

}

const AirConditional = {
    open: function () {
        console.log('open the airCondition')
    },
    close: function () {
        console.log('close the airCondition')
    }
}

const touying = {
    touying: function () {
        console.log('open the TV')
    },
    undo: function () {
        console.log('close the TV')
    }

}

// 统一的接口 对方法进行 代理
function setCommand(obj) {
    const o = {}
    if ("open" in obj) {
        o.execute = obj.open
    }
    if ("execute" in obj) {
        o.execute = obj.execute
    }
    return o
}

const tvCommand = setCommand(TV)
tvCommand.execute()