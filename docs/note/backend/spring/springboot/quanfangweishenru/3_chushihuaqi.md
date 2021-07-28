# 初始化器

## 一、介绍
1. 类名：ApplicationContextInitializer
2. 介绍：Spring容器刷新之前执行的一个回调函数
3. 作用：向SpringBoot容器中注册属性
4. 使用：继承接口自定义实现

## 二、使用
1. 实现ApplicationContextInitializer接口
2. 调用
    1. spring.factories内填写接口实现 -> org.springframework.context.ApplicationContextInitializer
    2. SpringApplication类初始化后设置进去
    3. application.properties内填写接口实现 -> context.initializer.classes

## 三、SpringFactoriesLoader
1. 框架内部使用的通用工厂加载机制
2. 从classpath下多个jar包特定的位置读取文件并初始化类
3. 文件内容必须是kv形式，即properties类型
4. key是全限定名（抽象类|接口）、value是实现，多个实现用","分隔

### 1、loadFactories流程
1. 查找缓存是否存在
2. 读取指定资源文件
3. 构建properties对象
4. 获取指定key对应value
5. 逗号分割value
6. 保存结果到缓存
7. 依次实力话结果对象
8. 对结果对象进行排序
9. 返回结果



<ad/>
<comment/>