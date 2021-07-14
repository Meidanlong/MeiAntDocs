# Centos 7 docker 拉取镜像慢

## 原因
未指向国内镜像

## 解决

### 1. 打开docker/daemon.json
```shell
vi /etc/docker/daemon.json
```

### 2. 指定镜像
```shell
{
  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
}
```

## 3. 重启docker
```sh
systemctl daemon-reload
systemctl restart docker
```
