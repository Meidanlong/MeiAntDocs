# 设置Linux防火墙


## 一、查看防火墙状态
```shell
systemctl status firewalld.service
```

## 二、关闭防火墙

```shell
systemctl stop firewalld.service
```

## 三、永久关闭防火墙
```shell
systemctl disable firewalld.service
```