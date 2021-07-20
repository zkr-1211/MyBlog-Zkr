<!--  -->
<template>
  <div class="body">
    <div class="card">
      <div>
        <div class="section">
          <i class="message fas fa-envelope"></i>
          <i class="notif fas fa-bell"></i>
          <div class="pic">
            <img src="../../assets/myPerson1.jpg" alt="图片加载错误！" />
          </div>
          <div class="name">KR的博客</div>
          <div class="tag">1290267206@qq.com</div>
        </div>

        <div class="bottom-section">
          <div class="social-media">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
          <div class="videos">190<span>视频</span></div>
          <div class="border"></div>
          <div class="subscribers">240k<span>订阅</span></div>
          <div class="border"></div>
          <div class="videws">7.3M<span>图片</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {};
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
@keyframes start {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@import url("https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/5.15.2/css/all.min.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.body {
  font-family: sans-serif;
  background: url(../../assets/myPerson1.jpg);
  background-size: cover;
  display: flex;
  align-items: center;
    // justify-content: center;
  min-height: 100vh;
}

.card {
  animation: start 1s;
  position: relative;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 0 10px #146ec273;
  margin: 0 auto;
}

.section {
  padding: 60px 40px;
  background: #7500fc54;
}

.message,
.notif {
  position: absolute;
  top: 40px;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
}

.message {
  right: 40px;
}

.notif {
  left: 40px;
}

.pic {
  position: relative;
  width: 150px;
  height: 150px;
  margin: auto auto 20px auto;
  padding: 4px;
  border: 2px solid #9985e0;
  border-radius: 50%;
}

.pic img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.pic::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid #9985e0;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border-radius: 50%;
  animation: animate 1.5s linear infinite;
}

@keyframes animate {
  to {
    transform: scale(1.5);
    opacity: 0;
  }
}

.name {
  color: #f1f1f1;
  font-size: 28px;
  letter-spacing: 2px;
  text-transform: inherit;
}

.tag {
  font-size: 18px;
  color:  #f1f1f1;
}

.bottom-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  padding: 60px 40px;
  font-size: 28px;
  text-transform: inherit;
}

.border {
  width: 1px;
  height: 20px;
  background: #bbb;
  margin: 0 30px;
}

.bottom-section span {
  font-size: 14px;
  display: block;
}

.social-media {
  position: absolute;
  width: 100%;
  top: -30px;
  left: 0;
  z-index: 1;
}

.social-media i {
  position: relative;
  width: 60px;
  height: 60px;
  background: #9985e0;
  border-radius: 50%;
  color: #f1f1f1;
  font-size: 24px;
  line-height: 60px !important;
  margin: 0 10px;
}

.social-media i::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid #9985e0;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border-radius: 50%;
  z-index: -1;
  transform: scale(0.9);
  transition: 0.4s linear;
}

.social-media i:hover::after {
  transform: scale(1.5);
  opacity: 0;
}
</style>