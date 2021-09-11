# Spring装载Bean - 资源装配 


## 一、Resource、ResourceLoader

### 1、Resource
1. 定义了资源的基本操作

### 1.2、EncodedResource

### 1.3、ClassPathResource
访问 WEB-INF/classes

### 1.4、FileSystemResource

### 2、ResourceLoader
实现不同的Resource加载策略，按需返回特定类型的Resource

1. getResource()：根据地址返回资源实例
2. getClassLoader()：获取ClassLoader


## 四、BeanDefinitionReader
- 读取BeanDefinition
- BeanDefinitionRegistry -> 将BeanDefinition注册到容器中
- 提供多种类型的loadBeanDefinition方法

### 1、BeanDefinitionRegistry
- registerBeanDefinition -> 向注册表中注册bean实例 -> beanDefinitionMap(ConcurrentHashMap)
- BeanDefinitionRegistry -> abstractBeanDefinition

<ad/>
<comment/>