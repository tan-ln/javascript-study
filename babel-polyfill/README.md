# babel-polyfill 例子

1. `npm init -y`
2. 安装 `yarn add @babel/core @babel/cli @babel/preset-env -D`
3. 创建 `babel.config.json`
```json
{
  "presets": [
    "@babel/preset-env"
  ]
}
```
4. 运行查看

两种方式

- 命令行 通过 @bable/cli
```bash
npx babel index.js --watch -o output.js
# 或
./node_modules/.bin/babel src --out-dir lib
```

- 官方提供的 babel 语法编译器
[https://babeljs.io/repl](https://babeljs.io/repl)


## `@babel/preset-env`
`@babel/preset-env` 可以理解为一堆 `plugin` 集合的包，这种 `plugin` 的集合也可以叫做 预设

配置：
```json
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

编译前：
```js
const fn = () => {
  console.log("babel-----------");
};

const p = new Promise((resolve, reject) => {
  resolve("*********babel");
});

p.finally(() => {
  console.log('promsie finally')
})

const list = [1, 2, 3, 4].map(item => item * 2);
```

编译后：
```js
"use strict";

// index.js
var fn = function fn() {
  console.log("babel-----------");
};

var p = new Promise(function (resolve, reject) {
  resolve("*********babel");
});
p["finally"](function () {
  console.log('promsie finally');
});
var list = [1, 2, 3, 4].map(function (item) {
  return item * 2;
});
```

## `@babel/plugin-transform-runtime`

`yarn add @babel/plugin-transform-runtime -D`

解决的问题
1. polyfill
2. 避免重复打包的使用的辅助函数
3. API 的全局污染

配置：
```json
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
}
```
编译前：
```js
class A {}
class B {}
```
编译后：
```js
"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var A = /*#__PURE__*/_createClass(function A() {
  _classCallCheck(this, A);
});

var B = /*#__PURE__*/_createClass(function B() {
  _classCallCheck(this, B);
});
```
```js
// 配置 @babel/plugin-transform-runtime
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var A = /*#__PURE__*/(0, _createClass2["default"])(function A() {
  (0, _classCallCheck2["default"])(this, A);
});
var B = /*#__PURE__*/(0, _createClass2["default"])(function B() {
  (0, _classCallCheck2["default"])(this, B);
});
```

使用 `@babel/plugin-transform-runtime` 后 辅助函数已变成引用的形式，而非每个文件再声明一遍，导致重复打包体积增加


## `polyfill`

`@babel/preset-env` 默认配置只能为我们转换ES新语法，而不能 shim API

配置/引入：
1. 全局引入
```js
// 代码入口
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// 旧版本的引入方式，不推荐
import '@babel/polyfill'
```
```json
// `babelrc` / `babel.config.json`
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "entry",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```
```js
// webpack.config.js
module.exports = {
  entry: ["@babel/polyfill", "./app/js"],
};
```

2. 按需引入

编译前：
```js
const fn = () => {
  console.log("babel-----------");
};

const p = new Promise((resolve, reject) => {
  resolve("*********babel");
});

p.finally(() => {
  console.log('promsie finally')
})

const list = [1, 2, 3, 4].map(item => item * 2);
```

编译后：
```js
"use strict";

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

const fn = () => {
  console.log("babel-----------");
};

const p = new Promise((resolve, reject) => {
  resolve("*********babel");
});
p.finally(() => {
  console.log('promsie finally');
});
const list = [1, 2, 3, 4].map(item => item * 2);
```
