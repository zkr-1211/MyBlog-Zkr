<!--  -->
<template>
  <div class='body'>
    <footer>
      <p class="foot_nav">
        <a href="">关于我们</a>|<a href="/" rel="nofollow">订阅本站</a> |
        <a href="" rel="nofollow">联系站长</a>
        |<a href="" target="_blank">网址地图</a>|<a href="">友情链接</a>
      </p>
      <p>
        Copyright © 2019-2021
        <a href="">KR博客</a>
        版权所有 | 托管于
        <a href="" target="_blank"><img src="" />阿里云服务器 </a>
      </p>
      <p>
        <span id="cnzz_stat_icon_1278873985"></span>
      </p>
      <p>
        <a href="" target="_blank"><img src="" />来自KR的博客</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
/*标签*/
footer {
  background-color: rgba(255,255,255,0.5);
    // background-color: #fff;
  width: 100%;
  min-width: 250px;
  line-height: 30px;
  padding: 10px 0;
  color: #000;
  margin: 20px 0px auto;
  font-size: 12px;
  text-align: center;
  // background: #fff;
  transition: all 0.5s;
}
footer .foot_nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
footer .foot_nav a {
  font-weight: bold;
  font-size: 13px;
  padding: 0 7px;
}
footer a:nth-child(1) img {
  position: relative;
  bottom: -5px;
  margin-right: 3px;
}
footer a:nth-child(2) img {
  position: relative;
  bottom: -1px;
  margin-right: 3px;
}
footer a:nth-child(3) img {
  height: 16px;
  position: relative;
  bottom: -2px;
  margin-right: 3px;
}
footer a {
  color: #555555;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
  color: #4586e7;
}
</style>