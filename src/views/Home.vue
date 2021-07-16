<!--  -->
<template>
  <div class='body'>
    <nav>
      <div class="navBar">
        <div class="logo">
          <img src="../../src/assets/logo.png" alt="">
           <img src="../../src/assets/logo.png" alt="">
            <img src="../../src/assets/logo.png" alt="">
        </div>
        <div class="navBar-title">
          <div><i class="el-icon-s-home"></i>主页</div>
          <div><i class="el-icon-reading"></i>技术文章</div>
          <div class="classify"><i class="el-icon-s-unfold"></i>
            栏目分类
            <div class="menu">
              <div>资源分享</div>
              <div>资源分享</div>
              <div>资源分享</div>
            </div>
          </div>
          <div><i class="el-icon-loading"></i>实验室</div>
          <div><i class="el-icon-chat-round"></i>给我留言</div>
          <div><i class="el-icon-info"></i>关于</div>
        </div>
      </div>
    </nav>
    <div class="main_center">
      <div class="left">
        <div class="left_item1" v-for="(item,index) in leftImgList" :key="index">
          <div class="item">
            <div class="text">
              <h1>标题名称</h1>
              <img :src="item" alt="">
              <h2 class="animate-text">测试案例</h2>
              <p class="animate-text">这里放内容简介，内容简介,这里放内容简介，内容简介,这里放内容简介，内容简介</p>
              <div class="dots"> <span></span> <span></span> <span></span> </div>
            </div>
          </div>
        </div>

      </div>
      <div class="center">
        <el-carousel :interval="5000" arrow="always" height="450px">
          <el-carousel-item v-for="item in bannerList" :key="item">
            <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right">
        <div class="top-img">
          <img src="https://img.tgl.qq.com/cover/20210714/d7d2983f3e14b574a4bf28bc309b52ef_1626264996.jpg" alt="">
        </div>
        <div class="center-content">
          <div class="hearder">
            <img src="https://img.tgl.qq.com/cover/20210716/1d0812ff299e07eaaa61b9b25c75c550_1626394876.jpg" alt="">
          </div>
          <div>
            <h2>KR博客</h2>
          </div>
          <div class="detail">张克榕的博客是致力于解决web前端开发中的实际问题的个人博客（zkrblog.top）</div>
          <div class="add-friend">
            <div class="wx">
              <div class="erweima"></div>
            </div>
            <div class="qq">
              <div class="erweima"></div>
            </div>
          </div>
        </div>
        <div class="message-content">
          <div>
            <div class="num">3104</div>
            <div>
              <h4>浏览</h4>
            </div>
          </div>
          <div>
            <div class="num">64</div>
            <div>
              <h4>留言+评论</h4>
            </div>
          </div>
          <div class="run">
            <div class="num">669</div>
            <div>
              <h4>运行</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      bannerList: [
        "https://ossweb-img.qq.com/upload/adw/image/977/20210715/383272d4b61efe26fc833e63540fefe1.jpeg",
        "https://ossweb-img.qq.com/upload/adw/image/977/20210714/08edcd6af8a8d4c0a10f1d03830e6fa4.jpeg",
      ],
      leftImgList: [
        "https://img.tgl.qq.com/cover/20210714/d7d2983f3e14b574a4bf28bc309b52ef_1626264996.jpg",
        "https://img.tgl.qq.com/cover/20210716/1d0812ff299e07eaaa61b9b25c75c550_1626394876.jpg",
        "https://img.tgl.qq.com/cover/20210715/04e4288b376d2fcf5c4f9cf6d3def396_1626323861.jpg",
      ],
    };
  },
  computed: {},

  mounted() {},

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang='scss' scoped>

body {
  width: 100%;
  height: 100%;
 
  nav {
    width: 100%;
    border-bottom: 0.1px solid rgb(223, 223, 223);
    .navBar {
      margin: 0 auto;
      height: 80px;
      width: 1800px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        img {
          width: 60px;
          height: 60px;
          line-height: 60px;
          // background-color: rgb(187, 167, 167);
        }
      }
      .navBar-title {
        display: flex;
        width: 800px;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        // overflow: hidden;
        .classify:hover .menu {
          opacity: 1;
          display: flex;
        }
        .menu {
          display: none;
          position: absolute;
          z-index: 999;
          width: 100px;
          height: 100px;
          background-color: rgb(241, 241, 241);
          border: rgb(187, 181, 181) solid 1px;
          border-radius: 10px;
          flex-direction: column;
          justify-content: space-around;
          padding: 5px;
          opacity: 0;
        }
        > div {
          font-size: 1em;
          color: #444444;
          text-align: center;
          width: 100px;
          height: 80px;
          // line-height: 80px;
          i {
            line-height: 80px;
            margin-right: 10px;
          }
        }
        & :hover {
          color: #4586e7;
          cursor: pointer;

          // display: block;
        }
      }
    }
  }
  .main_center {
    margin: 20px auto;
    display: flex;
    width: 1800px;
    justify-content: space-around;
    .left {
      margin-right: 10px;
      width: 300px;
      height: 450px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > div {
        border-radius: 10px;
        width: 300px;
        height: 143.5px;
        overflow: hidden;
      }
      .left_item1 {
        .item {
          height: 100%;
          width: 100%;
          background-color: #4e5366;
          position: relative;
          cursor: pointer;
          transition: all 0.4s ease-out;
          box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44);
          overflow: hidden;
          color: #fff;
        }
        .item img {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          transition: all 0.4s ease-out;
        }
        .item .text {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          // z-index: 99;
          // position: absolute;
          padding: 30px;
        }
        .item h1 {
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
          // color: red;
        }
        .item h2 {
          margin-top: 20px;
          font-style: italic;
          transform: translateX(200px);
        }
        .item p {
          margin-top: 20px;
          line-height: 25px;
          transform: translateX(-200px);
          transition-delay: 0.2s;
        }
        .animate-text {
          opacity: 0;
          transition: all 0.6s ease-in-out;
        }
        .item:hover {
          box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);
          transform: scale(1.1);
        }
        .item:hover img {
          opacity: 0.3;
        }
        .item:hover .animate-text {
          transform: translateX(0);
          opacity: 1;
        }
        .dots {
          position: absolute;
          bottom: 20px;
          right: 30px;
          margin: 0 auto;
          width: 30px;
          height: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
        .dots span {
          width: 5px;
          height: 5px;
          background-color: #fff;
          border-radius: 50%;
          display: block;
          opacity: 0;
          transition: transform 0.4s ease-out, opacity 0.5s ease;
          transform: translateY(30px);
        }
        .item:hover span {
          opacity: 1;
          transform: translateY(0px);
        }
        .dots span:nth-child(1) {
          transition-delay: 0.05s;
        }
        .dots span:nth-child(2) {
          transition-delay: 0.1s;
        }
        .dots span:nth-child(3) {
          transition-delay: 0.15s;
        }
      }
    }
    .center {
      flex: 1;
      // width: 500px;
      height: 450px;
      // background-color: rgb(65, 48, 48);
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 450px;
      }
      .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 450px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
    .right {
      overflow: hidden;
      border-radius: 10px;
      margin-left: 10px;
      width: 300px;
      height: 450px;
      // background-color: rgb(180, 54, 54);
      .top-img {
        img {
          width: 100%;
          height: 100%;
        }
      }
      .center-content {
        padding: 20px;
        // background-color: teal
        position: relative;
        // background-color: steelblue;
        .hearder {
          position: absolute;
          top: -50px;
          left: 110px;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          // background-color: steelblue;
          img {
            border-radius: 50%;
            width: 80px;
            height: 80px;
          }
        }
        h2 {
          padding-top: 20px;
          text-align: center;
        }
        .detail {
          margin-top: 10px;
          font-size: 14px;
          color: #444444;
          line-height: 20px;
        }
        .add-friend {
          padding: 25px;
          width: 180px;
          margin: 0 auto;
          display: flex;
          justify-content: space-evenly;
          .wx {
            width: 65px;
            height: 30px;
            border-radius: 10px;
            background-color: teal;
            .erweima {
              width: 100px;
              height: 100px;
               background-color: rgb(96, 151, 202);
              border-radius: 10px;
              position: relative;
              bottom: 120px;
              right: 15px;
              display: none;
            }
          }
          .wx:hover .erweima {
            display: block;
          }
          .qq:hover .erweima {
            display: block;
          }
          .qq {
            width: 65px;
            height: 30px;
            border-radius: 10px;
            background-color: teal;
            .erweima {
              width: 100px;
              height: 100px;
              background-color: rgb(96, 151, 202);
              border-radius: 10px;
              position: relative;
              bottom: 120px;
              right: 15px;
              display: none;
            }
          }
        }
      }
      .message-content {
        // background-color: rgb(240, 151, 151);
        width: 100%;
        height: 65px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        border-top: 0.1px solid #d6d6d6;
        > div {
          border-right: 0.1px solid #d6d6d6;
          width: 100%;
        }
        .run {
          border-right: none;
          // margin-top: 15px;
        }
        .num {
          font-size: 16px;
          color: rgb(173, 165, 165);
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>