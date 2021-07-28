# 小程序登陆


## 一、流程
1. 点击登陆
2. 统一获取个人信息
3. 执行wx.login()，获得code
4. 请求后台登陆接口
5. 用code请求微信api，验证用户已登陆微信小程序，并获取openid
6. 如果已注册则颁发token，否则先注册再颁发token

## 二、微信配置
1. 获取微信密钥openId


## 整合WxJava
功能包含 `小程序登陆` 、`小程序支付` 等

### 一、加依赖
```java
artigactId : weixin-java-miniapp
3.5.0
```


<ad/>
<comment/>