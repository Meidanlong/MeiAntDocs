# Spring装载Bean - 初始化


## 一、PostProcessor
1. 本身也是一种需要注册到容器里的Bean
2. 其里面的方法会在特定的时机被容器调用
3. 实现不改变容器获取Bean核心逻辑的情况下对Bean进行扩展。如：对Bean进行包装，影响其行为、修改Bean的内容等


大类分为容器级别的后置处理器以及Bean级别的后置处理器
1. BeanDefinitionRegistryPostProcessor
2. BeanFactoryPostProcessor
3. BeanPostProcessor


### 1、BeanDefinitionRegistryPostProcessor
1. 负责对BeanDefinition实例的自定义注册

### 2、BeanFactoryPostProcessor
1. 影响容器

### 3、BeanPostProcessor
1. Bean的后置处理器
2. 实现两个方法postProcessBeforeInitialization和postProcessAfterInitialization

## 二、Aware（可感知）
从Bean里获取到容器实例并对其进行操作

## 三、事件驱动模型
三大组成部分
1、 事件：ApplicationEvent抽象类
2、 事件监听器：ApplicationListener
3、 事件发布器：Publisher以及Multicaster


---

## 四、refresh
1. prepareRefresh -> 刷新前准备工作
2. obtainFreshBeanFactory -> 获取子类刷新后的内部beanFactory实例
3. prepareBeanFactory -> 为容器注册必要的系统级别Bean
4. postProcessBeanFactory -> 允许容器的子类去注册postProcessor
5. invokeBeanFactoryPostProcessors -> 调用容器注册的容器级别的后置处理器
6. registerBeanPostProcessors -> 向容器注册Bean级别的后置处理器
7. initMessageSource -> 初始化国际化配置
8. initApplicationEventMulticaster -> 初始化事件发布者组件
9. onFresh -> 在单例Bean初始化之前预留给子类初始化其他特殊bean的口子
10. registerListeners -> 向前面的事件发布者组件注册事件监听者
11. finishBeanFactoryInitialization -> 设置系统级别的服务，实例化所有非懒加载的单例
12. finishRefresh -> 触发初始化完成的回调方法，并发布容器刷新完成的事件给监听者
13. resetCommonCaches -> 重置Spring内核中的公用缓存



<ad/>
<comment/>