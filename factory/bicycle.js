// console.log('工厂模式')
// 函数属于 对象
// 函数是一等对象
// 类，简单的只有一个构造函数
// 类跟函数没有区别
// JS 本身没有类，只是用的人多了，给了这个实现
// JS 只有对象 Object原型对象的鼻祖

// 卖车
var Bicycle = function() {
// 构造函数 constructor
// new 时执行
    // this.brand = brand || '凤凰';
}

// 原型(凤凰、永久)链
// 原型基础上 + 二维码、手机支付
// JS 继承关系
// 共享单车，完全颠覆了自行车
// 原型 prototype 参照物
// js 中不需要传统继承，只需要一个参照物就可实现原型式继承
Bicycle.prototype = {
    sellBicycle: function(model) {
        var bicycle = null;
        switch(model) {
            case 'Speedster':
                bicycle = new Speedster()
                break;
            case 'Giant':
                bicycle = new Giant()
                break;
            case 'U2':
                bicycle = new U2()
                break;
        }
        bicycle.assemble();
        bicycle.wash();
        bicycle.provideRepaire();
        // 把车卖出去
        return bicycle;
        // console.log('卖车啦...');
        // return null;
        // 卖车行为需要有商店、很多车、维修、仓库
        // 这些统称为工厂
        // 面向对象们
    }
}

// 雷速达
function Speedster() {}

Speedster.prototype = {
    assemble : function() {
        console.log('组装完成！')
    },
    wash : function() {
        console.log('清洗完成！')
    },
    provideRepaire : function() {
        console.log('保修2年')
    }
}

// 捷安特
function Giant() {}
Giant.prototype = {
    assemble : function() {
        console.log('组装完成！')
    },
    wash : function() {
        console.log('清洗完成！')
    },
    provideRepaire : function() {
        console.log('保修3年')
    }
}

// 优兔
function U2() {}

U2.prototype = {
    assemble : function() {
        console.log('组装完成！')
    },
    wash : function() {
        console.log('清洗完成！')
    },
    provideRepaire : function() {
        console.log('保修2年')
    }
}

// js 基本类型：字符串，数字，布尔值，undefined，null
// 复杂类型 object <-- prototype array function json

var bicycle = new Bicycle();
console.log(bicycle.sellBicycle('U2'))
