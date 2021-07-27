# 切换git账号

## 问题
git bash clone代码失败，**报错：** ==remote: HTTP Basic: Access denied==
**截图：**
![报错截图](https://img-blog.csdnimg.cn/20190305152952943.png)
怀疑是用户不正确。


---
## 解决
```
$ vim ~/.gitconfig
```
.gitconfig
```
[credential]
    helper = manager
[gui]
        recentrepo = C:/Users/Administrator/Desktop/Meidl/...
        recentrepo = E:/workspace/meidl/imooccodes/...
[user]
        name = meidl
        email = meidl
[filter "lfs"]
        smudge = git-lfs smudge -- %f
        process = git-lfs filter-process
        required = true
        clean = git-lfs clean -- %f
        
```
将最上面的 ==[credential]== 删除
![gitconfig](https://img-blog.csdnimg.cn/20190305153509931.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phcndpcw==,size_16,color_FFFFFF,t_70)
保存退出，再次clone即可重新输入用户名和密码，并成功下载。

---

## 效果
![成功](https://img-blog.csdnimg.cn/20190305154111382.png)




<ad/>
<comment/>