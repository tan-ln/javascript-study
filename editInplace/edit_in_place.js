/**
 * 
 * author: 唐麟
 * date: 2018-04-27
 * 功能: 就地编辑
 * 参数: @id @parent 挂载的元素 @value 初始值
 */

// 不再是面向业务的流程性编程
// 封装一个类  进行复用

function EditInPlace(id, parent, value) {
    this.id = id;
    this.parentElement = parent;    //父元素 root
    this.value = value || 'default value';
    // 显示 name 元素
    this.createElement();
    // 挂载完毕后，添加事件监听
    this.attachEvent();
}

EditInPlace.prototype = {
    // 构建 html
    createElement: function() {
        this.containerElement = document.createElement('div');
        this.parentElement.appendChild(this.containerElement);

        // 显示静态文字
        // js 动态性添加元素
        this.staticElement = document.createElement('span');
        this.staticElement.innerHTML = this.value;
        this.containerElement.appendChild(this.staticElement);

        // 按钮
        // 对象内部 this 指向对象 在原型链上 方法和属性
        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
        this.fieldElement.value = this.value;
        this.containerElement.appendChild(this.fieldElement);
        this.parentElement.appendChild(this.containerElement);

        // 文字和输入框只能显示一个
        this.convertToText();
    },

    convertToText: function() {
        this.staticElement.style.display = 'inline';
        this.fieldElement.style.display = 'none';
    },

    convertToEdit: function() {
        this.fieldElement.style.display = 'inline';
        this.staticElement.style.display = 'none';
        this.fieldElement.focus();
    },

    attachEvent: function() {
        // 作用域 ：attachEvent 函数
        // 方法被执行时，this 指向对象
        console.log(this);
        var that = this;
        this.staticElement.addEventListener('click', function() {
            // 函数被执行时，并不是对象的方法，而是匿名函数
            // 作为事件处理函数来执行，this 指向事件发生元素
            // 作用域 ：事件的回调函数
            // this 的指向
            console.log(this)
            console.log(this.value)     // undefined
            console.log(that.value)
            // alert(this.value)
            that.convertToEdit()
        }, false)

        this.fieldElement.addEventListener('keydown', function(evt) {
            // console.log(evt.keyCode)
            if (evt.keyCode == 13) {
                that.staticElement.innerHTML = this.value;
                that.convertToText();
            }
        }, false)
    }
}