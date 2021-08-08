# 门面模式

## 一、单一职责原则
引起一个类变化的因素不要多于一个
1. 尽可能让一个类负责相对独立的业务
2. 保证类之间的耦合度低，降低类的复杂度


## 二、门面（外观）模式 Facade Pattern
子系统的外部与其内部的通信必须通过统一的对象进行
1. 提供一个高层次的接口（访问资源的入口），使得子系统更易于使用
   [![fQIb4K.md.png](https://z3.ax1x.com/2021/08/08/fQIb4K.md.png)](https://imgtu.com/i/fQIb4K)
2. 包装内部不同的方法（可按照内部所需逻辑编排），对外提供统一的方法（如：建房子）
   [![fQo32F.md.png](https://z3.ax1x.com/2021/08/08/fQo32F.md.png)](https://imgtu.com/i/fQo32F)
3. slf4j（Simple Logging Facade for Java）使用门面模式对多种日志框架进行整合兼容，对外只暴露一个api接口
   [![fQ7i6g.png](https://z3.ax1x.com/2021/08/08/fQ7i6g.png)](https://imgtu.com/i/fQ7i6g)
<ad/>
<comment/>