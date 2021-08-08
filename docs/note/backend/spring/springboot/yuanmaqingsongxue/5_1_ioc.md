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
<ad/>
<comment/>