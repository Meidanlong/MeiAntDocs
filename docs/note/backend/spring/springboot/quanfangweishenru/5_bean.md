# Bean


## 一、IOC思想
### 1、类不交由Spring容器管理
手动new一个接口的实现类，一旦实现类型更改，则需要更改代码，并且使用者必须非常明确自己要调用哪个实现类，才能保证调用没有问题

### 2、IOC优势
1. 松耦合
2. 灵活性
3. 可维护

## 二、Bean配置方式
### 1、xml
优点：
1. 低耦合
2. 对象关系清晰
3. 集中管理

缺点：
1. 配置繁琐
2. 开发效率低
3. 文件解析耗时
#### 1.1 无参构造
[![WvDm1s.md.png](https://z3.ax1x.com/2021/07/31/WvDm1s.md.png)](https://imgtu.com/i/WvDm1s)
#### 1.2 有参构造
[![WvDNcR.md.png](https://z3.ax1x.com/2021/07/31/WvDNcR.md.png)](https://imgtu.com/i/WvDNcR)
#### 1.3 静态工厂方法
[![WvDrND.md.png](https://z3.ax1x.com/2021/07/31/WvDrND.md.png)](https://imgtu.com/i/WvDrND)
#### 1.4 实例工厂方法
[![WvDOuq.md.png](https://z3.ax1x.com/2021/07/31/WvDOuq.md.png)](https://imgtu.com/i/WvDOuq)

### 2、注解
优点：
1. 使用简单
2. 开发效率高
3. 高内聚（在同一个文件中声明Bean）

缺点：
1. 配置分散
2. 对象关系不清晰
3. 配置修改需要重新编译工程

#### 2.1 @Component声明
```java
@Component
public class HelloService
```

#### 2.2 配置类中使用@Bean
[![WvsKoT.md.png](https://z3.ax1x.com/2021/07/31/WvsKoT.md.png)](https://imgtu.com/i/WvsKoT)

#### 2.3 实现FactoryBean
[![Wvsne0.md.png](https://z3.ax1x.com/2021/07/31/Wvsne0.md.png)](https://imgtu.com/i/Wvsne0)

#### 2.4 实现BeanDefinitionRegistryPostProcessor
[![WvsGl9.md.png](https://z3.ax1x.com/2021/07/31/WvsGl9.md.png)](https://imgtu.com/i/WvsGl9)

#### 2.5 实现ImportBeanDefinitionRegistrar
[![WvsUw6.md.png](https://z3.ax1x.com/2021/07/31/WvsUw6.md.png)](https://imgtu.com/i/WvsUw6)


## 三. 框架refresh()

### 1、简介
1. Bean配置读取加载入口
2. Spring框架启动流程

### 2、流程
[![WvyDEV.md.png](https://z3.ax1x.com/2021/07/31/WvyDEV.md.png)](https://imgtu.com/i/WvyDEV)

#### prepareRefresh
1. 容器状态设置
2. 初始化属性设置
3. 检查必备属性是否存在

#### obtainFreshBeanFactory
1. 设置beanFactory序列化id
2. 后去beanFactory

#### prepareBeanFactory
1. 设置beanFactory一些属性
2. 添加后置处理器
3. 设置忽略的自动装配接口
4. 注册一些组件

#### postProcessBeanFactory
1. 子类重写以在BeanFactory完成创建后做进一步设置

#### invokeBeanFactoryPostProcessors
1. 调用BeanDefinitionRegistryPostProcessor实现向容器内添加bean定义
2. 调用BeanFactoryPostProcessor实现向容器内bean的定义添加属性

[![WxcKU0.md.png](https://z3.ax1x.com/2021/08/01/WxcKU0.md.png)](https://imgtu.com/i/WxcKU0)

[![Wx6s7q.md.png](https://z3.ax1x.com/2021/08/01/Wx6s7q.md.png)](https://imgtu.com/i/Wx6s7q)

[![Wx6W3F.md.png](https://z3.ax1x.com/2021/08/01/Wx6W3F.md.png)](https://imgtu.com/i/Wx6W3F)

[![Wx6IBR.md.png](https://z3.ax1x.com/2021/08/01/Wx6IBR.md.png)](https://imgtu.com/i/Wx6IBR)

#### registerBeanPostProcessor
1. 找到BeanPostProcessor的实现
2. 排序后注册进容器内

#### initMessageSource
1. 初始化国际化相关属性

#### initApplicationEventMulticaster
1. 初始化事件广播器，注册到容器中

#### onRefresh
1. 空实现
2. 创建web容器

#### registerListener
1. 添加容器内事件监听器至事件广播器中
2. 派发早期事件

#### finishBeanFactoryInitialization
1. 初始化所有剩下的单实例bean

#### finishRefresh
1. 初始化生命周期处理器
2. 调用生命周期处理器onRefresh方法
3. 发布ContextRefreshedEvent事件
4. JMX相关处理

#### resetCommonCaches
1. 清除过程中产生的缓存








<ad/>
<comment/>