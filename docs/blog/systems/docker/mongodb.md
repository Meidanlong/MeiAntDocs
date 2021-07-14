# Docker 运行 mongoDB

[Docker 运行 mongoDB](https://blog.csdn.net/weixin_43972437/article/details/106299316)

## 一、拉取镜像
```shell
docker pull mongo:latest
```

## 二、启动mongoDB
```shell
docker run --name mongo -p 27017:27017 -v /data/db:/data/db -d mongo --auth
```

> `—-name` 指定镜像的名字，如果不指定会使用 Docker 镜像 ID。 </br>
> `-p 27018:27017` 官方的 mongo 镜像默认端口是27017，我们将它映射到主机的端口上27018。 27018端口可自定义，但是不能是在使用的接口。</br> 
> `-v /data/db:/data/db` -v 是挂载路径，将 mongo 镜像里的目录挂载到本地目录，mongo 镜像默认目录是/data/db。 </br>
> `-d` 在后台运行。 `—auth` 以 auth 模式运行 mongo。


<comment/>