# Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?

## 原因
未启动docker服务

## 解决
```shell
su root # 先切换到root用户, 再执行以下命令
systemctl enable docker # 开机自动启动docker

systemctl start docker # 启动docker
systemctl restart docker # 重启dokcer
```



<comment/>
<ad/>