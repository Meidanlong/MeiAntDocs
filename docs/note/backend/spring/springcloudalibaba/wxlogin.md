# 小程序登陆


## 一、流程
1. 点击登陆
2. 统一获取个人信息
3. 执行wx.login()，获得code
4. 请求后台登陆接口
5. 用code请求微信api，验证用户已登陆微信小程序
6. 如果已注册则颁发token，否则先注册再颁发token