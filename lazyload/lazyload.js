/**
 * author: 唐麟
 * date: 2018-05-04
 * 功能：图片的懒加载
 */

// 服务于任何图片元素，img 幕后再将 origin_src 设置过去
// LazyLoadImage 为返回值
var LazyLoadImage = (function() {
    // 变量的冒泡查找
    const a = 1
    return {
        setSrc: function(ele) {
            // console.log('开始下载图片吧')
            const url = ele.getAttribute('origin_src') ? ele.getAttribute('origin_src') : ''
            if (!url) return

            const oImg = document.createElement('img')
            // 不会影响页面 none 会离开文档流
            // opacity: 0 会撑长页面
            oImg.style.display = 'none'

            document.body.appendChild(oImg)

            // 注册事件 像 addEventListener
            // 设置了图片的 src 之后，就会启动 http 请求
            // 图片下载完成后 onload 注册事件回调
            // 函数就会被执行
            // 异步
            oImg.onload = function() {
                // 不会立即执行
                console.log('图片下载完成')
                ele.src = url

                document.body.removeChild(this)
            }

            // 先执行
            console.log('设置 src')
            oImg.src = url
        }
    }
})();

