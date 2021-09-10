# Spring装载Bean - 初始化


## 一、PostProcessor
1、 本身也是一种需要注册到容器里的Bean
2、 其里面的方法会在特定的时机被容器调用
3、 实现不改变容器获取Bean核心逻辑的情况下对Bean进行扩展。如：对Bean进行包装，影响其行为、修改Bean的内容等


大类分为容器级别的后置处理器以及Bean级别的后置处理器
1、 BeanDefinitionRegistryPostProcessor
2、 BeanFactoryPostProcessor
3、 BeanPostProcessor


### 1、BeanDefinitionRegistryPostProcessor
1、 负责对BeanDefinition实例的自定义注册

### 2、BeanFactoryPostProcessor
1、 影响容器

### 3、BeanPostProcessor
1、 Bean的后置处理器
2、 实现两个方法postProcessBeforeInitialization和postProcessAfterInitialization

## 二、Aware（可感知）
从Bean里获取到容器实例并对其进行操作


<ad/>
<comment/>