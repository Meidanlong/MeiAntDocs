<template>
    <div class="container">
        <div id="gitalk-container"></div>
    </div>
</template>
<script>
  export default {
    name: 'comment',
    data() {
      return {};
    },
    mounted() {
      const body = document.querySelector('.container');

      const linkGitalk = document.createElement('link');
      linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
      linkGitalk.rel = 'stylesheet';
      body.appendChild(linkGitalk);
      const scriptGitalk = document.createElement('script');
      scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
      body.appendChild(scriptGitalk);

      scriptGitalk.onload = () => {
        const commentConfig = {
          // 开发 OAuth 及 Issues项目地址
          clientID: 'eea717df8b83a0ca6b7e',
          clientSecret: 'd3832efcc09413cd6a5e1cfda879b5d3ba952242',
          repo: 'meidanlong.github.io',

          // 生产 OAuth 及 Issues项目地址
          /* clientID: '542b00b6278491b39c78',
          clientSecret: '4ee16247d322f5033f5f3d17c0d043f4beab1974',
          repo: 'meidanlong.github.io', */
          owner: 'Meidanlong',
          admin: ['Meidanlong'],
          id: location.pathname,
          distractionFreeMode: false,
          language: 'zh-CN',
          proxy: 'https://netnr-proxy.cloudno.de/https://github.com/login/oauth/access_token'

        };
        // console.log(location.pathname)
        // console.log(location.pathname.split("_")[1])

        const gitalk = new Gitalk(commentConfig);
        gitalk.render('gitalk-container');
      };
    },
  };
</script>
