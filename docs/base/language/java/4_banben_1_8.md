# 第一章：1.8

## 一. 函数式接口

- 也称为功能性接口，是有且仅有一个抽象方法，但是可以有多个非抽象方法的接口
- java 8 提供 @FunctionalInterface 注解来标识函数式接口
- Lamda 表达式需要一个函数式接口来盛接

```java
// 函数式接口的例子

@FunctionalInterface //添加此注解后，接口中只能有一个抽象方法。
public interface A {
	void call();

}
```

## 二. Lamda 表达式

- 语法

```java
(parameters) -> expression

或

(parameters) ->{statements; }
```

**举几个例子**

```java
// 不需要参数,返回值为 5
() -> 5

// 接收一个参数(数字类型),返回其2倍的值
x -> 2 * x

// 接受2个参数(数字),并返回他们的差值
(x, y) -> x – y

// 接收2个int型整数,返回他们的和
(int x, int y) -> x + y

// 接受一个 string 对象,并在控制台打印,不返回任何值(看起来像是返回void)
(String s) -> System.out.print(s)

```

```java

/*
 Runnable就是一个函数式接口：他只有一个方法run()方法。
 1、因为run()方法没有参数，所以   ->前面的()中不需要声明形参
 2、run返回的是void，所以不需要return。
 3、->后面写的代码其实就是定义在run方法内的代码。因为此处代码只有一行，所以{}也可以省略。如果此处多与一行，则无法省略。
 */
Runnable runnable = () -> System.out.println("这个是用拉姆Lambda的线程");
new Thread(runnable).start();

// 等价于

Runnable runnable = new Runnable() {

    @Override
    public void run() {
        System.out.println("这个是用内部类实现的线程");

    }
};
new Thread(runnable).start();

```

**注：**<br>

1. lambda 表达式的局部变量隐性的具有 final 语义，不可被后面的代码修改
2. Lambda 表达式当中不允许声明一个与局部变量同名的参数或者局部变量

### 为什么lamda不能修改外部引用的变量？

* lamda表达式实际上一个匿名内部类
* 所以我们的问题可以转向这两个问题：
    * 为什么匿名内部类调用外部引用的时候，外部引用需要用final修饰？
    * lamda如果才能修改外部引用变量？

#### 1. 为什么匿名内部类调用外部引用的时候，外部引用需要用final修饰？

* 我们在内部类中调用外部的自由变量，即使该变量没有显式的声明final，但是在编译器解析的时候也被定义成一个final变量
* 这里java内部类引用外部变量近似闭包的概念。我们先来了解一下js中满足闭包的条件：
    1. 一个依赖于外部环境自由变量的函数
    2. 这个函数能够访问外部环境里的自由变量
* 闭包常见使用场景
    1. 回调函数
    2. 匿名函数
* 在闭包中访问外部自由变量访问的是自由变量的哪个值呢？
    * 是闭包**定义**时，自由变量所定义的值（非运行时！）
* js中通常我们要解决闭包导致对象不正确问题，常用的有四个解决方案：
    1. func.call(obj, 20, 30)
    2. func.apply(obj, [20,30])
    3. const func1 = func.bind(obj,20,30)
    4. 在闭包外方法中手动指定 let self = this
* 说到闭包，绕不开this指向问题，this应该指向的是**运行**时的对象，简单总结this指向三种情况：
    1. obj.func() -> this指向`.`前面调用的对象，此时指向obj
    2. new Fun() -> this指向new出来的对象
    3. 函数自调、匿名函数和回调函数 -> this指向的是window
* java对闭包的处理
    1. 如函数在使用类的全局变量的时候
        * 全局变量实际是类的一个属性，用this指向，可所以修改
    2. 但是在处理匿名内部类的时候，在不同的类中无法用this指向，这时java的做法是：
        * 将自由变量拷贝一个副本带给匿名内部类，供内部类使用。
        * 类似于值传递而非引用传递

#### 2. lamda如果才能修改外部引用变量？

1. 数组
2. 全局变量
3. atomicReference


#### 3. 总结
```md
lamda不能修改外部引用的变量的原因其实也很简单，本质上就是因为lambda表达式在方法内部，那么lambda表达式的内存分配就是在栈上。栈内存不存在线程安全问题，因为栈内存存的都是变量的副本。
对于局部变量count而言，它的生命周期就是所在方法的生命周期。这就决定了count无法被位于同一个栈帧上的lambda修改，因为这种修改毫无意义，
你无法将你的修改传递出当前栈帧。栈内存不会被共享，也就意味着你没有权利和其他栈帧通信。

如果非要在lambda内部修改lambda表达式外部的局部变量的值呢？
有两种方式：使用数组或者把局部变量定义为全局变量。

这2种方式，其实本质是一样的：内存都分配在堆上。这就决定了，使用这2种方式来修改变量的值，是可行的。
```


## 三. 方法引用

- 语法

```java
// 静态方法 -> ClassName::methodName
Object ::equals

// 实例方法 -> Instance::methodName
Object obj=new Object();
obj::equals;

// 构造函数
ClassName::new
```

## 四. 默认方法

- 语法

```java
// 接口可以有实现方法，而且不需要实现类去实现其方法。需在方法名前面加default关键字

@FunctionalInterface
public interface A {

    void call();

    default void fun() {
        System.out.println("我是接口的默认方法1中的代码");
    }

    default void fun2() {
        System.out.println("我是接口的默认方法2中的代码");
    }
}
```

## 五. Stream 流

- 概念

1. Stream 是对集合的包装,通常和 lambda 一起使用
2. 流作用是提供了一种操作大数据接口，让数据操作更容易和更快
3. 支持 map, filter, limit, sorted, count, min, max, sum, collect 等操作
4. Stream 使用懒运算
   > 中间方法和终端方法:<br>
   > 中间方法永远返回的是 Stream（Pipelining），终点操作才能收集流产生的最终结果<br><br>
   > 懒运算只有碰到终端方法才会执行

**举个栗子：**

```java
List<User> users = new ArrayList<User>();
users.add(new User(20, "张三"));
users.add(new User(22, "李四"));
users.add(new User(10, "王五"));

Stream<User> stream = users.stream();
//返回流中元素的个数。
long count = stream.filter((User user) ->  user.getAge() >= 20).map((User user) -> {return "50";}).count();
System.out.println(count);
```

其他方法 API 参考，[传送门](https://blog.csdn.net/javazyw/article/details/82733459)

## 六. Optional 类

- 特性<br>
1. Optional 类是一个可以为 null 的容器对象

**举个栗子：**

```java
public static void main(String args[]) {
    Java8Tester java8Tester = new Java8Tester();
    Integer value1 = null;
    Integer value2 = new Integer(10);
    // Optional.ofNullable - 允许传递为 null 参数
    Optional<Integer> a = Optional.ofNullable(value1);
    // Optional.of - 如果传递的参数是 null，抛出异常 NullPointerException
    Optional<Integer> b = Optional.of(value2);
    System.out.println(java8Tester.sum(a, b));
}

public Integer sum(Optional<Integer> a, Optional<Integer> b) {
    // Optional.isPresent - 判断值是否存在
    System.out.println("第一个参数值存在: " + a.isPresent());
    System.out.println("第二个参数值存在: " + b.isPresent());
    // Optional.orElse - 如果值存在，返回它，否则返回默认值
    Integer value1 = a.orElse(new Integer(0));
    //Optional.get - 获取值，值需要存在
    Integer value2 = b.get();
    return value1 + value2;
}
```

```markdown
输出结果为：

第一个参数值存在:false
第二个参数值存在:true
10
```

## 七. 日期时间 API

- 举个栗子：

```java
public static void main(String args[]) {
    Java8Tester java8tester = new Java8Tester();
    java8tester.testLocalDateTime();
}

public void testLocalDateTime() {
    // 获取当前的日期时间
    LocalDateTime currentTime = LocalDateTime.now();
    System.out.println("当前时间: " + currentTime);
    LocalDate date1 = currentTime.toLocalDate();
    System.out.println("date1: " + date1);
    Month month = currentTime.getMonth();
    int day = currentTime.getDayOfMonth();
    int seconds = currentTime.getSecond();
    System.out.println("月: " + month + ", 日: " + day + ", 秒: " + seconds);
    LocalDateTime date2 = currentTime.withDayOfMonth(10).withYear(2012);
    System.out.println("date2: " + date2);
    // 12 december 2014
    LocalDate date3 = LocalDate.of(2014, Month.DECEMBER, 12);
    System.out.println("date3: " + date3);
    // 22 小时 15 分钟
    LocalTime date4 = LocalTime.of(22, 15);
    System.out.println("date4: " + date4);
    // 解析字符串
    LocalTime date5 = LocalTime.parse("20:15:30");
    System.out.println("date5: " + date5);
}
```

```markdown
输出结果为：

当前时间: 2018-06-08T15:19:16.910
date1:2018-06-08
月: JUNE, 日: 8, 秒: 16
date2:2012-06-10T15:19:16.910
date3:2014-12-12
date4:22:15
date5:20:15:30
```

## 八. 其他特性

- Nashorn JavaScript<br>
  Nashorn 一个 javascript 引擎。
- Base64<br>
  Java8 中，Base64 编码已经成为 Java 类库的标准。