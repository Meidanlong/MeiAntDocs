# c3p0连接mysql异常

## 现象

> com.mchange.v2.resourcepool.TimeoutException: A client timed out while waiting to acquire a resource from com.mchange.v2.resourcepool.BasicResourcePool@79207381 -- timeout at awaitAvailable()

## 解决
### 1、驱动配置有误
```markdown
driver=com.mysql.jdbc.Driver
```

### 2、数据库连接地址有误
```markdown
url=jdbc:mysql://localhost:3306/test?3useUnicode=true&characterEncoding=utf8
```

配置应该加上`时区`

```markdown
jdbc.url=jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai
```

### 3、账号密码有误

### 4、数据库未启动或无权访问

### 5、项目未引入对应的驱动jar包

### 6、mysql root没有远程访问的权限
进入mysql数据库
```sql
grant all privileges on *.* to 'root'@'%' identified by 'root' with grant option;
flush privileges;
```

### 7、jdbc驱动要放到jre里面
<comment/>