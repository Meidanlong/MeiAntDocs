# There are too many unreachable loose objects; run 'git prune' to remove them.

## 原因
因为提交的改动过多，导致本地缓冲区占用太大

## 解决
```shell
git gc  --prune=now
```
<ad/>
<comment/>