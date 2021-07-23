# 如何降低node版本？

## 解决

### 1、安装node版本管理模块n
```shell
sudo npm install n -g
```

### 2、下载对应版本
```shell
# 稳定版
sudo n stable

# 最新版
sudo n latest

# 指定版本
sudo n version
```

### 3、检测node版本
```shell
n
```

### 4、切换指定版本
```shell
n version
```

### 5、删除版本
```shell
sudo n rm version
```
<comment/>