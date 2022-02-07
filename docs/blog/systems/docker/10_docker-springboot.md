# docker部署springBoot

## 一、配置maven
在provider的pom.xml文件中添加以下
```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                // 指定main方法
                <mainClass>com.wtrue.jobcenter.JobCenterProvider</mainClass>
<!--                    <layout>ZIP</layout>-->
            </configuration>
            <executions>
                <execution>
                    <goals>
                        <goal>repackage</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

## 二、设置数据卷
```shell
docker volume create job-center-1
```

## 三、程序打包并上传
1、打包provider程序
```shell
mvn clean install -Dmaven.teat.skip=true
```
2、上传到卷内对应目录
```shell
# 查看对应路径
docker inspect job-center-1
```

## 三、设置容器
```shell
docker run -d -it --name jobCenter1 -v job-center-1:/home/app --net=host java
```

## 四、进入容器运行jar包
```shell
docker exec -it jobCenter1 bash

nohup /home/app/job-center.provider-1.0.0-SNAPSHOT.jar &
```

查看运行日志
```shell
tail -f nohup.out
```