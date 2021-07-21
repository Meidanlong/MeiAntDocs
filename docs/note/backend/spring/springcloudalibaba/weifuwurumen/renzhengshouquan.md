# 认证授权

## 有状态和无状态

一、有状态

[![RA1hm8.md.png](https://z3.ax1x.com/2021/06/21/RA1hm8.md.png)](https://imgtu.com/i/RA1hm8)

服务器维护Session Store（Redis），记录用户登陆状态

二、无状态
[![RAG2lR.md.jpg](https://z3.ax1x.com/2021/06/21/RAG2lR.md.jpg)](https://imgtu.com/i/RAG2lR)

1. 所有微服务依赖Session Store。对于Session Store的宕机、迁移和性能瓶颈
2. 用户携带token信息，客户端临时存储token，服务器只进行token的解密和校验

## 登陆认证方案
### 一、处处安全
优点：
- 安全性好

缺点：
- 成本高

### 二、外部无状态，内部有状态
[![RAJyHf.md.jpg](https://z3.ax1x.com/2021/06/21/RAJyHf.md.jpg)](https://imgtu.com/i/RAJyHf)

### 三、网关认证授权，内部裸奔
[![RAYGxs.md.jpg](https://z3.ax1x.com/2021/06/21/RAYGxs.md.jpg)](https://imgtu.com/i/RAYGxs)

- 网关负责token的解密和校验
- 一旦用户解析成功，则其他微服务都携带用户信息，不再校验

### 四、内部裸奔改进
[![RAtSzj.md.jpg](https://z3.ax1x.com/2021/06/21/RAtSzj.md.jpg)](https://imgtu.com/i/RAtSzj)

1. 添加认证授权中心，负责认证、授权、颁发token
2. 用户携带token，网关透传token给各微服务。
3. 各微服务解密token，校验token是否合法。并解析token，获取用户信息

好处：
- 降低了网关的复杂度
- 相对内部裸奔安全

--- 思考

应在四、内部裸奔改进版本上，抽离各微服务校验和解密token功能到认证授权中心。从而将认证授权中心转变为全面的用户中心



<comment/>