# 2-9 Dubbo 整合 Nacos


## 一、Dubbo 整体架构
[![W1sLPU.md.png](https://z3.ax1x.com/2021/07/17/W1sLPU.md.png)](https://imgtu.com/i/W1sLPU)

利用Nacos作为注册中心，无缝整合Dubbo

## 二、引入Dubbo依赖

三板斧：依赖、注解、配置

1、在provider层引入Dubbo依赖
```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-dubbo</artifactId>
</dependency>
```

2、在启动类上添加注解
```javascript
@EnableDubbo
```

3、添加配置


<ad/>
<comment/>