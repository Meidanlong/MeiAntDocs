# 第二章：日期转换

## 一、函数
### 1、date_format(date, format)
```sql
select date_format(now(),'%Y-%m-%d %H:%i:%S');

# 2017-10-29 14:02:54
```

### 2、unix_timestamp()
```sql
select unix_timestamp(now()); 

# 1509257408
```

### 3、str_to_date(str, format)
```sql
select str_to_date('2017-10-29', '%Y-%m-%d %H:%i:%S');

# 2017-10-29 00:00:00
```

### 4、from_unixtime(unix_timestamp, format)
```sql
select from_unixtime(1509257408); 

# 2017-10-29 14:10:08
```

::: tip 划重点
常用的时间占位符 -> `%Y-%m-%d %H:%i:%S`
:::
<ad/>
<comment/>