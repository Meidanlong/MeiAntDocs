# IoC

控制反转（Inversion of Control）
## 一、特点
1. 依托一个类似工厂的IoC容器
2. 将对象的创建、依赖关系的管理以及声明周期交由IoC容器管理
3. 降低系统在实现上的复杂性和耦合度，易于扩展，满足开闭原则

## 二、依赖注入（Dependency Injection）
上层建筑决定下层注入

### 方式：
1. Setter
2. Interface
3. Constructor
4. Annotation

[![fleoNR.md.png](https://z3.ax1x.com/2021/08/08/fleoNR.md.png)](https://imgtu.com/i/fleoNR)

## 三、IoC容器优势
1. 避免在各处使用new来创建类，并且可以做到统一维护
2. 创建实例的时候不需要了解其中的细节
3. 反射+工厂模式的合体，满足开闭原则

## 四、框架基本功能
[![fGIJRx.md.jpg](https://z3.ax1x.com/2021/08/10/fGIJRx.md.jpg)](https://imgtu.com/i/fGIJRx)
1、 解析配置
2、 定位与注册对象
3、 注入对象
4、 提供通用工具类

### IOC容器的实现
1、 创建对象
2、 提取标记对象
    1、 指定范围，获取范围内的所有类
        1、 获取到`类加载器`（目的：获取项目发布的实际路径）
        2、 通过类加载器获取到加载的资源信息
        3、 依据不同的资源类型，采用不同的方式获取资源的集合
    2、 遍历所有类，获取被注解标记的类并加载进容器里
3、 实现容器
4、 依赖注入

#### 类加载器 ClassLoader
[![fG7VJA.md.png](https://z3.ax1x.com/2021/08/10/fG7VJA.md.png)](https://imgtu.com/i/fG7VJA)

1、 根据一个指定的类的名称，找到或者生成其对应的字节码
2、 加载java应用所需资源

```java
Thread.currentThread().getContextClassLoader();
```

#### URL
统一资源定位符：某个资源的唯一地址

1、 通过获取java.net.URL实例获取协议名、资源名路径等信息
    [![fJ1Fv4.md.png](https://z3.ax1x.com/2021/08/10/fJ1Fv4.md.png)](https://imgtu.com/i/fJ1Fv4)


<ad/>
<comment/>