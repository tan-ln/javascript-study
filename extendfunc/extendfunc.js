Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}

// 去除首位空格
String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
})

console.log("  neat  ".trim());