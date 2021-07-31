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









<ad/>
<comment/>