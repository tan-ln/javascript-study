// 泡一杯咖啡 talk in js
// 流程: 把水煮沸、用水冲泡咖啡、把咖啡倒进杯子、加糖和牛奶

// 语义 转化为 代码
// 方法 method
//     boilWater()
//     brewCoffeeGriends()
//     pourInCup()
//     addSuguarAndMilk()

// 咖啡类
// var Coffee = function() {
// }

// Coffee.prototype.boilWater = function() {
//     console.log('把水煮沸')
// }

// Coffee.prototype.brewCoffeeGriends = function() {
//     console.log('用沸水泡咖啡')
// }

// Coffee.prototype.pourInCup = function () {
//     console.log('吧咖啡倒进杯子')
// }

// Coffee.prototype.addSuguarOrMilk = function() {
//     console.log('加糖和牛奶')
// }

// Coffee.prototype.init = function() {
//     this.boilWater();
//     this.brewCoffeeGriends();
//     this.pourInCup();
//     this.addSuguarOrMilk();

// }

// // 茶类
// var Tea = function() {
// }

// Tea.prototype = {
//     boilWater: function() {
//         console.log('把水烧开')
//     },
//     steepTeaBag: function() {
//         console.log('用沸水浸泡茶叶')
//     },
//     pourInCup: function() {
//         console.log('把茶水倒进杯子')
//     },
//     addLemon: function() {
//         console.log('加柠檬')
//     },
//     init: function() {
//         this.boilWater();
//         this.steepTeaBag();
//         this.pourInCup();
//         this.addLemon();
//     }
// }

// var coffee = new Coffee();
// coffee.init();

// var tea = new Tea();
// tea.init()

// 泡杯茶
// 流程: 把水烧开、用沸水浸泡茶叶、把茶水倒进杯子、加柠檬

//------------------------------------------
// 重复代码
// 把水烧开、把水倒进杯子 
// 如何实现代码复用 
// 封装不怎么完美 继承？
// Coffee   Tea    并不是父子关系
// 兄弟关系，
// 构建一个同父类 
// 饮料类 drink
// 抽象类 abstract class 一切皆抽象
// 共同点：boilWater()、pourInCup()
// 不同点：steepTeaBag()   brewCoffeeGriends()
// 抽象出来方法 
// 用水泡(饮品)    brew() 点到即止
// addSuguarOrMilk()   addLemon()
// 抽象出   addCondiments()

// 抽象类 模板模式
// 优化方法 给抽象类
// function Beverage() {
// }

// Beverage.prototype.boilWater = function() {
//     console.log('把水煮沸')
// }

// // 原型不一样，方法不去具体实现，只提供 这个接口
// // 子类一定要实现这个方法
// Beverage.prototype.brew = function() {}
// Beverage.prototype.pourInCup = function() {}

// Beverage.prototype.addCondiments = function() {}

// Beverage.prototype.init = function() {
//     this.boilWater();
//     this.brew();
//     this.pourInCup();
//     this.addCondiments();
// }

// // Constructor
// var Coffee = function() {}
// // prototype 链指向父类
// Coffee.prototype = new Beverage();
// Coffee.prototype.brew = function() {
//     console.log('用沸水泡咖啡')
// }
// Coffee.prototype.pourInCup = function() {
//     console.log('将咖啡倒进杯子')
// }
// Coffee.prototype.addCondiments = function() {
//     console.log('加糖和牛奶')
// }


// var Tea = function() {}
// Tea.prototype = new Beverage()
// // 覆盖父类方法
// // brew 就是一个接口 interface
// Tea.prototype.brew = function() {
//     console.log('用沸水浸泡茶叶')
// }
// Tea.prototype.pourInCup = function() {
//     console.log('将茶水倒进杯子')
// }
// Tea.prototype.addCondiments = function() {
//     console.log('加柠檬')
// }

// var coffee = new Coffee()
// coffee.init()

// var tea = new Tea()
// tea.init()

//--------------------------
// js way 模板模式
// 何为模板? 大体的结构已经确定 例如 有四个步骤 动作概念都有
// 有差异点 通过继承 抽象类来实现
// js 可以更优雅，差异点不就是个参数吗

var Beverage = function(param) {
    var boilWater = function() {
        console.log('把水煮沸')
    }

    var brew = param.brew || function() {
        throw new Error('必须传brew方法')
    }

    var pourInCup = param.pourInCup || function() {
        throw new Error('必须传pourInCup方法')
    }

    var addCondiments = param.addCondiments || function() {
        throw new Error('必须传addCondiments方法')
    }

    var F = function() {}
    F.prototype.init = function() {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    }
    return F;
}

// 模板可配置部分，作为参数传给模板对象
var Coffee = Beverage({
    brew: function() {
        console.log('用沸水泡咖啡')
    },
    pourInCup: function() {
        console.log('将咖啡倒进杯子')
    },
    addCondiments: function() {
        console.log('加糖和牛奶')
    }
});
var coffee = new Coffee()
coffee.init()