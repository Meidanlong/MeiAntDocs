<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import md5 from 'blueimp-md5'

export default {
  name: 'comment',
  mounted() {
    const commentConfig = {
      // 开发 OAuth 及 Issues项目地址
      /*clientID: 'eea717df8b83a0ca6b7e',
      clientSecret: 'd3832efcc09413cd6a5e1cfda879b5d3ba952242',
      repo: 'meidanlong.github.io',*/

      // 生产 OAuth 及 Issues项目地址
      clientID: '542b00b6278491b39c78',
      clientSecret: 'c8e83de32f3309549481c78d94d7e4d751b2c059',
      repo: 'meidanlong.github.io',
      id: md5(location.pathname),
      owner: 'Meidanlong',
      admin: ['Meidanlong']
    };
    const gitalk = new Gitalk(commentConfig);
    gitalk.render('gitalk-container');
  }
};
</script>