# Dubbo 调用流程 与 多协议解析

## 一、调用流程
[![WYgrDO.png](https://z3.ax1x.com/2021/07/20/WYgrDO.png)](https://imgtu.com/i/WYgrDO)

- 0、Container是Dubbo提供的容器，用于承载Provider。
- 1、Provider会在启动时，将自己的“家庭地址”注册在注册中心里。
- 2、Consumer这个私家侦探，会在注册中心留下眼线【subscribe】
- 3、当注册中心出现变化时，就通知【notify】相关的Consumer，Consumer会将这些地址缓存在本地中，产生一个Provider住址列表
- 4、当Consumer需要时，就会根据本地缓存的住址列表，抄家伙去对应的家庭住址找Provider的麻烦
- 5、dubbo本身是有监控的【Monitor】，provider和consumer都会将一些统计信息进行监控。


## 二、协议剖析
Dubbo框架默认支持的阿里的dubbo协议，同时还支持包括rmi、hessian、http、webservice、thrift、redis在内的多种协议，下面我们来了解一下这些协议的区别与适用场景。
[![WY2SqU.md.png](https://z3.ax1x.com/2021/07/20/WY2SqU.md.png)](https://imgtu.com/i/WY2SqU)

- Dubbo协议特点： 传入传出参数数据包较小（建议小于100K），消费者比提供者个数多，单一消费者无法压满提供者，尽量不要用dubbo协议传输大文件或超大字符串，基于以上描述，我们一般建议Dubbo用于小数据量大并发的服务调用，以及服务消费者机器数远大于服务提供者机器数的情况。
- RMI协议特点： 传入传出参数数据包大小混合，消费者与提供者个数差不多，可传文件。基于以上描述，我们一般对传输管道和效率没有那么高的要求，同时又有传输文件这一类的要求时，可以尝试采用RMI协议。
- Hessian协议特点： 传入传出参数数据包大小混合，提供者比消费者个数多，可用浏览器查看，可用表单或URL传入参数，暂不支持传文件。比较适用于需同时给应用程序和浏览器JS使用的服务，Hessian协议的相关内容与HTTP基本差不多，这里就不再赘述了。
- WebService协议特点： 基于CXF的frontend-simple和transports-http实现，适用于系统集成，跨语言调用。 不过如非必要，强烈不推荐使用这个方式，WebService是一个相对比较重的协议传输类型，无论从性能、效率和安全性上都不太能满足微服务的需要，如果确实存在异构系统的调用，建议可以采用其他的形式。
- 其余的memcached、Redis的协议之类的，使用的场景比较少

---

::: 划重点 
1. Consumer 会将注册中心中的地址缓存在本地
2. Dubbo协议用于小数据量大并发的服务调用
:::