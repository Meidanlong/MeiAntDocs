# Windows系统MongoDB的下载安装

## MongoDB说明
>-    MongoDB 是一个面向文档存储的数据库，操作起来比较简单和容易。
>-    你可以在MongoDB记录中设置任何属性的索引 (如：FirstName="Sameer",Address="8 Gandhi Road")来实现更快的排序。
>-    你可以通过本地或者网络创建数据镜像，这使得MongoDB有更强的扩展性。
>-   如果负载的增加（需要更多的存储空间和更强的处理能力） ，它可以分布在计算机网络中的其他节点上这就是所谓的分片。
>-   Mongo支持丰富的查询表达式。查询指令使用JSON形式的标记，可轻易查询文档中内嵌的对象及数组。
>-   MongoDb 使用update()命令可以实现替换完成的文档（数据）或者一些指定的数据字段 。
>-   Mongodb中的Map/reduce主要是用来对数据进行批量处理和聚合操作。
> -  Map和Reduce。Map函数调用emit(key,value)遍历集合中所有的记录，将key与value传给Reduce函数进行处理。
> -   Map函数和Reduce函数是使用Javascript编写的，并可以通过db.runCommand或mapreduce命令来执行MapReduce操作。
> -   GridFS是MongoDB中的一个内置功能，可以用于存放大量小文件。
> -  MongoDB允许在服务端执行脚本，可以用Javascript编写某个函数，直接在服务端执行，也可以把函数的定义存储在服务端，下次直接调用即可。
> -    MongoDB支持各种编程语言:RUBY，PYTHON，JAVA，C++，PHP，C#等多种语言。
> -    MongoDB安装简单。
 ---

## MongoDB的下载
直接给出MongoDB的下载地址：[请点我！](https://www.mongodb.com/download-center/community)


## MongoDB的安装

1. 一键安装，多提一句的是，在安装的时候选择“**Custom**”,代表自定义安装，可以自主选择安装路径
   ![mongodb安装](https://img-blog.csdnimg.cn/2018122815392881.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phcndpcw==,size_16,color_FFFFFF,t_70)
2. 加入我们已经安装完成，MongoDB的路径为D:\mongodb。
>MongoDB将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。请注意，数据目录应该放在根目录下（(如： C:\ 或者 D:\ 等 )。
>
==我本人并没有一定在根目录下创建文件夹，目前看还没有出任何问题，暂且保留，如果出了问题我再回头来改。==

- 在该目录下创建data和log两个文件夹
- 完善mongod.cfg信息
```yaml
systemLog:
    destination: file
    path: D:\mongodb\data\log\mongod.log
storage:
    dbPath:D:\mongodb\data\db
```
3.配置windows环境变量
```markdown
MONGODB_HOME
D:\mongodb
```

```markdown
path
追加  ;$MONGODB_HOME$\bin;
```

在命令号中输入：mongo，有以下显示代表配置成功
![启动mongodb](https://img-blog.csdnimg.cn/20181228160808218.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phcndpcw==,size_16,color_FFFFFF,t_70)
3. cmd 命令行到mongodb安装目录
4. 安装服务

```shell
mongod --dbpath "D:\mongodb\data\db"  --logpath "D:\mongodb\data\log\log.txt"  --install -serviceName "MongoDB" ;
```

5.  启动MongoDB服务

```shell
net start MongoDB
```


6. 关闭MongoDB服务

```shell
net stop MongoDB
```
<comment/>
<ad/>