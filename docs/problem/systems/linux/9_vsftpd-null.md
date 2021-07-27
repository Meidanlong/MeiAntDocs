# vsftpd内容为空，不能建立文件夹

## 描述
* windows的cmd访问vsftpd内容为空，或者不能操作建立文件夹
* 网页ftp://ip 访问vsftpd内容为空

---
## 原因
是SELinux(Security-Enhanced Linux----是美国国家安全局对于强制访问控制的实现, 是Linux 上最杰出的新安全子系统.)安装机制限制

---
## 解决
关闭SELinux方法
```
# vi /etc/selinux/config

 SELINUX=disabled 
```
然后重启，或在命令行输入
```
setenforce 0
```
即可生效。

<

<ad/>
<comment/>