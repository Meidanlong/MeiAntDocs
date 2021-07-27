# fatal: remote origin already exists.

## 原因
.git 已存在远程地址

## 解决
### 1、先删除远程Git仓库
```shell script
git remote rm origin
```

### 2、再添加新的远程 Git 仓库
```shell script
git remote add origin git@github.com:...
```



<comment/>
<ad/>