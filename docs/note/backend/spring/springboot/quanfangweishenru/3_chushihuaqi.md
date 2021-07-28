# 初始化器

## 一、介绍
1、类名：ApplicationContextInitializer
2、介绍：Spring容器刷新之前执行的一个回调函数
3、作用：向SpringBoot容器中注册属性
4、使用：继承接口自定义实现

## 二、使用
1、实现ApplicationContextInitializer接口
2、调用
    1. spring.factories内填写接口实现 -> org.springframework.context.ApplicationContextInitializer
    2. SpringApplication类初始化后设置进去
    3. application.properties内填写接口实现 -> context.initializer.classes



<ad/>
<comment/>