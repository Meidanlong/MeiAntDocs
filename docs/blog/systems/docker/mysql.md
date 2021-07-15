# Docker 运行 Mysql


## 拉取镜像
```shell
docker pull mysql:latest
```

## 查看本地镜像
```shell
docker images
```

## 运行容器
```shell
docker run -itd --name mysql-model -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root123 mysql
```

## 是否安装成功
```shell
docker ps
```

## 查看已经关闭的容器
```shell
docker ps -a
```

## 通过容器id启动
```shell
docker start ${container_id}

docker update --restart=always {containerId}
```



<comment/>