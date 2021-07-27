# Gitalk Request failed with status code 403

## 一、原因
跨域问题
## 二、解决
```js
const gitalk = new Gitalk({
    clientID: 'GitHub Application Client ID',
    clientSecret: 'GitHub Application Client Secret',
    repo: 'GitHub repo',      // The repository of store comments,
    owner: 'GitHub repo owner',
    admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false,  // Facebook-like distraction free mode
    // 添加proxy
    proxy: 'https://netnr-proxy.cloudno.de/https://github.com/login/oauth/access_token'
})

gitalk.render('gitalk-container')
```



<comment/>
<ad/>