# 第七章：模块内置变量

## 一. 常用内置变量

### 1. __name__变量
* 模块完整的名称
> 如果一个.py文件被当做应用程序的入口，那么它的__name__为__main__
* 经典实用
```python
if __name__ = '__main__' :
    pass
    
# 同时为一个模块和一个可执行文件
```

### 2. __package__变量
包名
> 如果一个.py文件被当做应用程序的入口，那么它不属于任何包

### 3. __file__变量
当前文件在系统中的物理路径

### 4. __doc__变量
注释






<ad/>
<comment/>