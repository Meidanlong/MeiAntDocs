# There are too many unreachable loose objects; run 'git prune' to remove them.

## 原因
- 因为提交的改动过多，导致本地缓冲区占用太大

- 使用`git fsck`可以看到很多摇晃的提交记录（dangling commit）
    ```shell
    git fsck --lost-found
    ```
  [![W72mvV.md.png](https://z3.ax1x.com/2021/07/28/W72mvV.md.png)](https://imgtu.com/i/W72mvV)
  

## 解决
```shell
git gc  --prune=now
```
<ad/>
<comment/>