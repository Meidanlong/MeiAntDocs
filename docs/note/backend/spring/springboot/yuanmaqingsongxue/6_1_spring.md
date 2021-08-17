# Spring 源码

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
<ad/>
<comment/>