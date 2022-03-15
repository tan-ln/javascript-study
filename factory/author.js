function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

// extend Person
function Coder(name, language) {
    // 执行 Person 类构造函数
    Person.call(this, name);
    // 添加父类没有的
    this.language = language;
}
// new Person 新的对象就是 Coder 的原型对象
Coder.prototype = new Person()
// 手动将原型构造重新指向为 Coder 
Coder.prototype.constructor = Coder
Coder.prototype.getLanguages = function() {
    return this.language;
}

var tl = new Person('tl');
// console.log(tl.getName())

var t = new Coder('t', ['js','javascript','python']);
console.log(t.name + ' 会 ' + t.language.join('、'))
console.log('getName: ' + t.getName())
console.log(t.getLanguages())