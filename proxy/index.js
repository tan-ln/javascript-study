// 小明表白的故事

// js 具有强大的表现力
// js 弱类型语言 java 静态强类型语言
// js 基础类型：字符串 数字 
// 对象: {} array function
// 布尔值 null undefined symbol
var xiaoming = {
    name: '小明',
    age: 21,
    hasGirlFriend: false,
    job: null,
    city: undefined,
    sendFlower: function(target) {
        var flower = new Flower('满天星');
        if (typeof target.receiveFlower == 'function') {
            target.receiveFlower(flower, this.name);
        } else {
            console.log('呵')
        }
    }
}

// 具有详述性，最简单创造的对象
var xiaomei = {
    name: '小美',
    room: '3206',
    hometown: '宜春',
    receiveFlower: function(flower, name) {
        console.log(this.name + '收到' + name + '送的' + flower.type)
    }
}

var xiaoxue = {
    name: '小雪',
    receiveFlower: function(flower, name) {
        // 实现相同的接口，就能互换对象
        // 实现转送(proxy代理)
        xiaomei.receiveFlower(flower, name)
    }
}

// 空对象字面量
var xueba = {

}

// 类大写，对象小写
var Flower = function(type) {
    this.type = type || 'rose'
}

// 通过小雪转送给小美
// xiaoming.sendFlower(xiaoxue);

xiaoming.sendFlower(xueba);