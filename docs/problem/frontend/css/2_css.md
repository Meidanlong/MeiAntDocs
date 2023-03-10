# CSS padding 属性

## 定义和用法
padding 简写属性在一个声明中设置所有内边距属性。

## 说明
这个简写属性设置元素所有内边距的宽度，或者设置各边上内边距的宽度。行内非替换元素上设置的内边距不会影响行高计算；因此，如果一个元素既有内边距又有背景，从视觉上看可能会延伸到其他行，有可能还会与其他内容重叠。元素的背景会延伸穿过内边距。不允许指定负边距值。

## 举例
```css
// 上内边距是 10px 
// 右内边距是 5px
// 下内边距是 15px
// 左内边距是 20px
padding:10px 5px 15px 20px;
```

```css
// 上内边距是 10px 
// 右内边距和左内边距是 5px
// 下内边距是 15px
padding:10px 5px 15px;
```

```css
// 上内边距和下内边距是 10px
// 右内边距和左内边距是 5px
padding:10px 5px;
```


```css
// 所有 4 个内边距都是 10px
padding:10px;
```

## 参考
[CSS padding 属性](https://www.w3school.com.cn/cssref/pr_padding.asp)







<ad/>
<comment/>