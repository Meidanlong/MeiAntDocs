# Spring装载Bean - 实例化


## 一、PostProcessor
1、 本身也是一种需要注册到容器里的Bean
2、 其里面的方法会在特定的时机被容器调用
3、 实现不改变容器获取Bean核心逻辑的情况下对Bean进行扩展。如：对Bean进行包装，影响其行为、修改Bean的内容等


大类分为容器级别的后置处理器以及Bean级别的后置处理器
1、 BeanDefinitionRegistryPostProcessor
2、 BeanFactoryPostProcessor
3、 BeanPostProcessor

<ad/>
<comment/>