# Packet for query is too large



## 解决
可在docker启动mysql是指定
```shell
docker run \
-p 3306:3306 \
--name mysql \
-e MYSQL_ROOT_PASSWORD=xxx \
-e max_allowed_packet=16M \
-d mysql:latest
```

<comment/>