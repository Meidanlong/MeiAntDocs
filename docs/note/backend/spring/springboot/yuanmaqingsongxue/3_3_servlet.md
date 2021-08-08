# Servlet

[![fQqCp6.md.png](https://z3.ax1x.com/2021/08/08/fQqCp6.md.png)](https://imgtu.com/i/fQqCp6)

1. 一旦servlet被初始化且未被销毁，那么再次发送请求不会重新init。servlet会保留在tomcat容器中

## DispatcherServlet

目标：减少Servlet创建

1. 拦截所有请求
2. 解析请求
3. 派发给对应的Controller（根据servletPath和请求method -> 工厂模式）里面进行处理
<ad/>
<comment/>