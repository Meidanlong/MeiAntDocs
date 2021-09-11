# Spring IoC源码

Spring骨架脉络：
1. 解析配置
2. 定位与注册对象
3. 注入对象

Spring解决的关键问题：将对象之间的关系转而用配置来管理
1. 依赖注入：依赖关系在Spring的IoC容器中管理
2. 通过把对象包装在Bean中以达到管理对象和进行额外操作的目的

## 一、Bean与BeanDefinition
1. Bean的本质就是Java对象，只是这个对象的生命周期由容器来管理
2. 不需要为了创建Bean而在原来的Java类上添加任何额外的限制

### 1、BeanDefinition--Bean定义
根据配置，生成用来描述Bean的BeanDefinition，常用属性（前为spring-config.xml，后为注解）：
1. 作用范围scope(@Scope)
2. 懒加载lazy-init(@Lazy)：决定Bean实例是否延迟加载
3. 首选primary(@Primary)：设置为true的bean会是优先的实现类
4. factory-bean和factory-method(@Configuration和@Bean)

#### 1.1、容器初始化主要脉络

[![fhn9KS.md.png](https://z3.ax1x.com/2021/08/17/fhn9KS.md.png)](https://imgtu.com/i/fhn9KS)

## 二、BeanFactory
### 1、BeanFactory和FactoryBean的区别

BeanFactory：
1. SpringIoC容器的根接口
2. 定义了Bean工厂最基础的特性
    1. getBean(String name) / getBean(Class<T> requiredType)
    2. isSingleton(String name)
    3. Class<?> getType(String name)
3. 只对IoC容器中的基本行为做了定义，不关心Bean是如何创建的

FactoryBean:
1. 本质是一个Bean
2. Spring把实现FactoryBean的子类取出，调用其实现的getObject()，来生成Bean
3. 声明FactoryBean的子类为Bean，spring初始化之后获得Bean却是getObject()返回类类型的Bean。
而在获取FactoryBean对应的Bean name前面加上一个`&`（FACTORY_BEAN_PREFIX）， 才能返回FactoryBean类类型的Bean

### 2、BeanFactory
结构：
1. 以BeanFactory为主的简单容器
    [![h8stLF.md.png](https://z3.ax1x.com/2021/08/29/h8stLF.md.png)](https://imgtu.com/i/h8stLF)
2. 以ApplicationContext（应用上下文接口）为核心的高级容器
    [![h8s0iR.md.png](https://z3.ax1x.com/2021/08/29/h8s0iR.md.png)](https://imgtu.com/i/h8s0iR)


#### 2.1、ListableBeanFactory
1. 以列表的形式提供Bean的相关信息
2. 批量列出工厂生产的实例信息

#### 2.2、HierarchicalBeanFactory
1. 使得容器具备层级的关系

#### 2.3、AutowireCapableBeanFactory
1. 赋予容器自动装配Bean的能力
2. 根据Bean定义装配Bean，执行前后处理器等

#### 2.4、ApplicationContext

基于XML配置的经典容器
1. FileSystemXmlApplicationContext（文件系统）
2. ClassPathXmlApplicationContext（classpath）
3. XmlWebApplicationContext（用于Web应用程序的容器）

目前比较流行的容器
1. AnnotationConfigApplicationContext

#### 2.5、ConfigurableApplicationContext
提供set方法，如:
1. setId(String id)
2. setParent(ApplicationContext parent)
3. setEnvironment(ConfigurableEnvironment environment)

核心抽象类AbstractApplicationContext实现该接口

### 3、AbstractApplicationContext#refresh()
1. 容器初始化、配置解析
2. BeanFactoryPostProcessor和BeanPostProcessor的注册和激活
3. 国际化配置
4. web容器构造






<ad/>
<comment/>