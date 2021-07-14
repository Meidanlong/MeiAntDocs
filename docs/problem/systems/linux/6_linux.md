# tmux: error while loading shared libraries: /lib64/libevent-2.0.so.5: file too short

## 原因
在 tmux 工具正常安装完成后，在使用时遇到的 tmux 共享库 libevent 加载失败

## 解决

```sh
yum remove libevent-2.0.21-4.el7.x86_64
yum install -y libevent
yum install -y tmux
tmux
```


