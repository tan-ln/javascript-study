# js 防抖
## 前端事件编程模型 `window resize监听窗口改变调整窗口大小、scroll滚动(多屏应用)、mousedown、mousemove、keyup、keydown`，这些方法触发时会被频繁调用，回调如果不节制，就会致使页面产生性能问题，所以我们使用函数节流和函数防抖来解这个决问题