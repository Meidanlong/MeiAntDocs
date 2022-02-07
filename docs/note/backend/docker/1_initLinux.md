# Linux装机环境搭建

创建新用户啊
1. 创建 -> adduser admin
2. 密码 -> passwd admin

## 一、Docker
1. 需root权限 -> su root
2. 更新yum -> yum -y update
3. 下载docker -> yum install -y docker 
4. DaoCloud加速器 -> https://www.daocloud.io/mirror
5. 修改docker配置文件 -> vi /etc/docker/daemon.json -> 删除结尾的逗号
6. 启动docker -> service docker start
7. 搜索docker镜像 -> docker search java
8. 拉取docker镜像 -> docker pull docker.io/java
9. 查看docker镜像 -> docker images
10. 导出docker镜像 -> docker save docker.io/java > /home/java.tar.gz
11. 导入docker镜像 -> docker load < /home/java.tar.gz
12. 删除docker镜像 -> docker rmi docker.io/java
13. 启动docker容器
14. 