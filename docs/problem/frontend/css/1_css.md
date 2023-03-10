# CSS position 属性

## 定义和用法

position 属性规定元素的定位类型。

### 说明
这个属性定义建立元素布局所用的定位机制。任何元素都可以定位，不过绝对或固定元素会生成一个块级框，而不论该元素本身是什么类型。相对定位元素会相对于它在正常流中的默认位置偏移。

|  值   | 描述  |
|  ----  | ----  |
| absolute  | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。</br> 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。  |
| fixed  | 生成绝对定位的元素，相对于浏览器窗口进行定位。</br>元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。  |
| relative  | 生成相对定位的元素，相对于其正常位置进行定位。</br>因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。  |
| static  | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。  |
| inherit  | 规定应该从父元素继承 position 属性的值。 |


## 参考
[CSS position 属性](https://www.w3school.com.cn/cssref/pr_class_position.asp)
[CSS 参考手册](https://www.w3school.com.cn/cssref/index.asp)




<ad/>
<comment/>