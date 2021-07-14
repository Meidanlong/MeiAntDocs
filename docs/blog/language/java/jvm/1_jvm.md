# JVM 基础

## JVM内存结构
1. 线程隔离的内存区域：虚拟机栈、本地方法栈 和 程序计数器 - 随着线程的创建而创建，随着线程的消亡而消亡
2. 线程共享的内存区域：堆 和 方法区

### 一、堆
- JVM内存中最大的一块空间
- 元空间并不是堆内存的一部分，而是本地内存

### 二、虚拟机栈
- 创建线程的时候创建
- 管理Java方法
- 虚拟机栈由 **栈帧** 构成，每一次方法调用，都会创建一个栈帧压入帧栈，当方法返回的时候，则对应着栈帧的出栈操作
- 栈帧中又保存着一系列数据：
    - 局部变量表
    - 操作数栈 ： 方法在执行的时候，存放临时数据的地方
    - 指向运行时常量池的引用
    - 方法返回地址
    - 动态链接
   
### 三、本地方法栈
- 管理native方法，如Unsafe类

### 四、程序计数器
- 用来记录各个线程执行的字节码的地址
- 如：分支、循环、跳转、异常、线程恢复等操作 
- 多线程争抢时间片，当抢到时间片后，可以通过记录得知上一次运行到哪一位置，从而继续执行

### 五、方法区
- 包括：
    - 静态变量（堆）
    - 字符串常量池（堆）
    - 类信息（元空间）
    - 运行时常量池（元空间）
    

**举例**
```java
public class JVMTest1{
    public static void main(String[] args){
        Demo demo = new Demo("aaa");
        demo.printName();
    }
}

class Demo{
    private String name;

    public Demo(String name){
        this.name = name;
    }

    public void printName(){
        System.out.println(this.name);
    }
}
```

