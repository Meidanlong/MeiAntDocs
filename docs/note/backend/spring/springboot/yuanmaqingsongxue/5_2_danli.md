# 单例模式 
Singleton Pattern

确保一个类只有一个实例，并对外提供统一访问方式
1. 饿汉模式：类被加载时就立即初始化并创建唯一实例
2. 懒汉模式：在被客户端首次调用的时候才创建唯一实例（Double Check）

## 真的安全吗？
1. 反射/序列化 -> Enum（饿汉模式）

[![fUS4Qf.png](https://z3.ax1x.com/2021/08/11/fUS4Qf.png)](https://imgtu.com/i/fUS4Qf)

<ad/>
<comment/>