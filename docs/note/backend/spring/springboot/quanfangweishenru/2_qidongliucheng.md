# SpringBoot 启动流程

## 一、框架初始化

### 1、资源加载器

### 2、配置primarySources

### 3、应用环境检测

### 4、配置系统初始化器

### 5、配置应用监听器

### 6、配置main方法所在类

## 二、框架启动

### 1、计时器开始及时

### 2、Headless模式赋值

### 3、发送ApplicationStartingEvent

### 4、配置环境模块

### 5、发送ApplicationEnvironmentPreparedEvent

### 6、打印banner

### 7、创建应用上下文对象

### 8、初始化失败分析器

### 9、关联springboot组件与应用上下文对象

### 10、发送ApplicationContextInitializedEvent

### 11、加载sources到context

### 12、发送ApplicationPreparedEvent

### 13、刷新上下文

### 14、计时器停止计时

### 15、发送ApplicationStartedEvent

### 16、调用框架启动扩展类

### 17、发送ApplicationReadyEvent

## 三、自动化装配

### 1、收集配置文件中的配置工厂类

### 2、加载组件工厂

### 3、注册组件内定义Bean

## 四、启动流程图

[![WoT7iF.png](https://z3.ax1x.com/2021/07/28/WoT7iF.png)](https://imgtu.com/i/WoT7iF)
<ad/>
<comment/>