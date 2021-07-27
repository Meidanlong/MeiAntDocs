# Mybatis建表

如果建表语句的静态的那完全不用Mybatis，在数据库就可以建。最近工作中遇到问题需要在Mybatis动态建表，尝试来解决这个问题。


首先我们拿到建表语句 **String sqlText = "..."** 。
## 正确方案
应该将表名跟建表语句分开，使之大致拼成一个CREATE TABLE 的SQL,如：
```xml
    <update id="createNewTable">
        CREATE TABLE ${tableName} AS ${sqlText}
    </update>
```



## 错误方案
```xml
    <update id="createNewTable">
         ${sqlText}
    </update>
```
这是我最先一拍脑袋想到的，但是这句话被解析的时候会解析成了一个占位符“?”，本身很好理解，Mybatis找不到具体的SQL语句报错。

---
### 小提示：
1.建表语句的参数应该使用不带引号的 '$ {...}'
2.应为选择了$，所以有可能会受到SQL注入的攻击，需要具体逻辑具体校验
<comment/>
<ad/>