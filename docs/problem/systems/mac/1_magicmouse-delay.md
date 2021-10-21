# 苹果Magic2蓝牙鼠标延时

## 问题
在使用苹果的magic2蓝牙鼠标时总是出现鼠标飘有延时的情况

## 解决
更改全局设置
### 1、查看当前数值
```shell
# 默认为3
defaults read -g com.apple.mouse.scaling
```

### 2、修改默认值
```shell
# 更改为7以上
defaults write -g com.apple.mouse.scaling 7
```

### 3、重启
重启电脑生效

### 4、注意
不要在系统偏好设置里调鼠标跟随速度，否则恢复默认值3
<ad/>
<comment/>