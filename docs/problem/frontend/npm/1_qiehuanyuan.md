# 快速切换npm源

## 解决

### 一、安装nrm
```shell
npm install -g nrm
```

### 二、增加源
```shell
nrm add <registry> <url> [home]

# nrm add taobao http://registry.npm.taobao.org/
```

### 三、切换源
```shell
nrm use <registry>

# nrm use taobao
```

### 四、删除源
```shell
nrm del <registry>

# nrm del taobao
```

### 五、测试源(响应时间)
```shell
nrm test
```
<comment/>
<ad/>