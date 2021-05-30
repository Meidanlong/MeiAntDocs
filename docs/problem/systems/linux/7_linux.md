# Client_loop: send disconnect: Broken pipe

## 原因
长时间不使用或网络中断，导致ssh断开 

## 解决
```sh
sudo vim  /etc/ssh/ssh_config
```
追加ssh配置
```sh
# 断开时重试连接的次数
ServerAliveCountMax 5
 
# 每隔5秒自动发送一个空的请求以保持连接
ServerAliveInterval 5
```
<comment/>