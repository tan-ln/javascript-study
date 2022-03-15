[弹幕](https://juejin.im/post/5ae56927f265da0b7e0c0968)

弹幕的核心原理是什么？
> 我们有一篇文章，在封面图提供一个弹幕效果，让大家的评论滚动输出，如果有新的评论，则立即输出

- 数据流 (data flow)    
    数据可视化，以时间点为因素的弹幕    
    数据流 评论         
    可视化 弹幕 

- 技术分析  
    评论 数组形式 保存动态数据  
    1.ajax fetch    
    2.dom appendChild 动态 DOM  
    3.弹幕位置不要重叠，随机一点，但是可控的弹幕效果    
    定位    
    随机 Math.random()  
    4.更新  
        定时器 setInterval()
