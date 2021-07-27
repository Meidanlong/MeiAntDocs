# AOP登陆检查

## 登陆检查三种方式
1. Servlet过滤器
2. 拦截器
3. Spring AOP

## AOP实现登陆检查

### 1、注释接口

### 2、AOP切面

### 3、获取token
Spring MVC 提供静态方法获取 Request

```java
requestAttributes = RequestContextHolder.getRequestAttributes();
attributes = (ServletRequestAttributes)requestAttributes;
request = attributes.getRequest();
```

获取Request的Header中的token
```java
request.getHeader("wt-token");
```

### 4、校验token










<ad/>
<comment/>