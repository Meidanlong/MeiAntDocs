# Bean scopes

## 划重点
### 1、 spring scpoes重要的有哪些？怎么使用？
singleton：
```java
// 默认
@Scope("singleton")
```

prototype：
```java
@Scope("prototype")
```

### 2、 singleton的优势在于什么？劣势是什么？
优势：
1. 减少生成新实例的消耗
2. 快速获取bean
3. 减少jvm垃圾回收

劣势：
1. 线程不安全

---

## 
