<template>
  <div>
    <a-divider>推广</a-divider>
    <a-card hoverable class="ad">
      <img
          slot="cover"
          alt="example"
          src="https://img-blog.csdnimg.cn/img_convert/fb2cd43e5774f7cffbd9e30d33fca812.png"
      />
      <p>推荐一个<mark-orange>性能优秀</mark-orange>、<mark-orange>稳定</mark-orange>的小众云服务器-小鸟云</p>
      <p>亲测与其他大型的互联网厂商的产品体验没有什么不同，但是个人学习使用和科学上网<mark-orange>便宜</mark-orange>才是王道！</p>
      <p>使用我的推荐码：<mark-pink>ZR2GGE</mark-pink> 购买云服务器和主机可以在官网<mark-orange>优惠</mark-orange>的基础上<mark-orange>再打85折</mark-orange></p>
      <p>新用户可以点击这个链接直达：<a href="https://www.niaoyun.com/?u=JPHJ68">https://www.niaoyun.com/?u=JPHJ68</a></p>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "ad"
}
</script>

<style scoped>

  ad {
    width: 50%;
    margin: auto;
  }

  mark-pink {
    color: hotpink;
    font-weight:bold;
  }

  mark-orange {
    color: orangered;
    font-weight:bold;
  }

</style>