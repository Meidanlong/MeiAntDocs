# 环境配置

## 一、Spring源码下载和编译

### 1、必要环境配置
1. jdk 1.8
2. maven
3. gradle

### 2、spring下载
1. [Spring官网](https://spring.io)
2. [~~Spring boot~~ git](https://codechina.csdn.net/jarwis/spring-boot)
3. [spring framework git](https://codechina.csdn.net/jarwis/spring-framework)
4. [Build from Source](https://github.com/spring-projects/spring-framework/wiki/Build-from-Source)
5. [Import into your IDE](https://github.com/spring-projects/spring-framework/blob/main/import-into-idea.md)

### 3、配置阿里云镜像
#### build.gradle
配置gradle镜像
```shell
buildscript {
	repositories {
		maven{ url 'https://maven.aliyun.com/nexus/content/groups/public/' }
		maven{ url 'https://maven.aliyun.com/nexus/content/repositories/jcenter'}
	}
}
```
配置项目镜像
```shell
repositories {
    maven{ url 'https://maven.aliyun.com/nexus/content/groups/public/' }
    maven{ url 'https://maven.aliyun.com/nexus/content/repositories/jcenter'}
    mavenCentral()
    maven { url "https://repo.spring.io/libs-spring-framework-build" }
}
```
[build.gradle](https://codechina.csdn.net/jarwis/spring-framework/-/blob/feature/mdl-read/build.gradle)

### 4、编译spring-oxm
使用idea对应的gradle进行编译
```shell
./gradlew :spring-oxm:compileTestJava
```
[![flbWb4.md.png](https://z3.ax1x.com/2021/08/08/flbWb4.md.png)](https://imgtu.com/i/flbWb4)

否则，你可能会遇到以下几个问题：
1. jdk.jfr does not exist
2. Task :spring-core:compileJava FAILED


<ad/>
<comment/>
