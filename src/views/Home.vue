<!--  -->
<template>
  <div class="body">
    <div class="isTop" v-show="isTop" @click="backTop(step)">
      <i class="el-icon-top"></i>
    </div>
    <NavBar/>
    <div class="main_center">
      <div class="left">
        <div
          class="left_item1"
          v-for="(item, index) in leftImgList"
          :key="index"
        >
          <div class="item">
            <div class="text">
              <h1>标题名称</h1>
              <img :src="item" alt="" />
              <h2 class="animate-text">测试案例</h2>
              <p class="animate-text">
                这里放内容简介，内容简介,这里放内容简介，内容简介,这里放内容简介，内容简介
              </p>
              <div class="dots"><span></span> <span></span> <span></span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="center">
        <el-carousel :interval="5000" arrow="always" height="450px">
          <el-carousel-item v-for="item in bannerList" :key="item">
            <img :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right">
        <div class="top-img">
          <img
            src="https://img.tgl.qq.com/cover/20210714/d7d2983f3e14b574a4bf28bc309b52ef_1626264996.jpg"
            alt=""
          />
        </div>
        <div class="center-content">
          <div class="hearder" @click="toMy()">
            <img
              src="https://img.tgl.qq.com/cover/20210716/1d0812ff299e07eaaa61b9b25c75c550_1626394876.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>KR博客</h2>
          </div>
          <div class="detail">
            张克榕的博客是致力于解决web前端开发中的实际问题的个人博客（zkrblog.top）
          </div>
          <div class="add-friend">
            <div class="wx">
              <img class="iconB" src="@/assets/wxBackground.jpg" alt="" />
              <div class="erweima">
                <img src="@/assets/wx.png" alt="" />
              </div>
            </div>
            <div class="qq">
              <img class="iconB" src="@/assets/qqBackground.jpg" alt="" />
              <div class="erweima">
                <img src="@/assets/qq.png" alt="" />
              </div>
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
    <div class="bottom_content">
      <div class="left_content">
        <div class="new_content">
          <div class="nav">
            <div>最新内容</div>
          </div>
          <div v-for="(item, index) in 3" :key="index">
            <div class="content">
              <div class="img">
                <img
                  src="https://img.tgl.qq.com/cover/20210716/1d0812ff299e07eaaa61b9b25c75c550_1626394876.jpg"
                  alt=""
                />
              </div>
              <div class="main_contnet">
                <div class="title">
                  <a href="">水电费水器目前市面上上有很</a>
                </div>
                <div class="detail">
                  有时候工作需要或者娱乐需要，会经常在电脑上使用安卓模拟器。目前市面上有很多款安装模拟器，像分享者比较常用的有两款：逍遥游和雷电；这两款都比较稳定，也比较适合我的使用习惯。今天给大家分享一下其中一款，雷电模拟器的无广告纯净版，搭载Android
                  7.1内核，启动速度快，稳定流畅兼容性好。
                  有时候工作需要或者娱乐需要，会经常在电脑上使用安卓模拟器。目前市面上有很多款安装模拟器，像分享者比较常用的有两款：逍遥游和雷电；这两款都比较稳定，也比较适合我的使用习惯。今天给大家分享一下其中一款，雷电模拟器的无广告纯净版，搭载Android
                  7.1内核，启动速度快，稳定流畅兼容性好。
                  有时候工作需要或者娱乐需要，会经常在电脑上使用安卓模拟器。目前市面上有很多款安装模拟器，像分享者比较常用的有两款：逍遥游和雷电；这两款都比较稳定，也比较适合我的使用习惯。今天给大家分享一下其中一款，雷电模拟器的无广告纯净版，搭载Android
                  7.1内核，启动速度快，稳定流畅兼容性好。
                  有时候工作需要或者娱乐需要，会经常在电脑上使用安卓模拟器。目前市面上有很多款安装模拟器，像分享者比较常用的有两款：逍遥游和雷电；这两款都比较稳定，也比较适合我的使用习惯。今天给大家分享一下其中一款，雷电模拟器的无广告纯净版，搭载Android
                  7.1内核，启动速度快，稳定流畅兼容性好。
                </div>
              </div>
            </div>
            <div class="info_message" :class="index == 2 ? 'last' : ''">
              <i class="el-icon-view"></i>243浏览 |
              <i class="el-icon-chat-square"></i>5评论 |
              <i class="el-icon-date"></i>2021年01月09日
            </div>
          </div>
        </div>
        <div class="new_content technical_content">
          <div class="nav">
            <div>最新文章</div>
          </div>
          <div v-for="(item, index) in 3" :key="index">
            <div class="content">
              <div class="img">
                <img
                  src="https://img.tgl.qq.com/cover/20210716/1d0812ff299e07eaaa61b9b25c75c550_1626394876.jpg"
                  alt=""
                />
              </div>
              <div class="main_contnet">
                <div class="title">
                  <a href="">水电费水费电费供电发生的腐蚀毒粉</a>
                </div>
                <div class="detail">
                  有时候工作需要或者娱乐需要，会经常在电脑上使用安卓模拟器。目前市面上有很多款安装模拟器，像分享者比较常用的有两款：逍遥游和雷电；这两款都比较稳定，也比较适合我的使用习惯。今天给大家分享一下其中一款，雷电模拟器的无广告纯净版，搭载Android
                  7.1内核，启动速度快，稳定流畅兼容性好。
                </div>
              </div>
            </div>
            <div class="info_message" :class="index == 2 ? 'last' : ''">
              <i class="el-icon-view"></i>243浏览 |
              <i class="el-icon-chat-square"></i>5评论 |
              <i class="el-icon-date"></i>2021年01月09日
            </div>
          </div>
        </div>
        <div class="new_content soft_content">
          <div class="nav">
            <div>软件仓库</div>
          </div>
          <div v-for="(item, index) in 3" :key="index">
            <div class="content">
              <div class="img">
                <img
                  src="https://img.tgl.qq.com/cover/20210716/1d0812ff299e07eaaa61b9b25c75c550_1626394876.jpg"
                  alt=""
                />
              </div>
              <div class="main_contnet">
                <div class="title">
                  <a href="">水电费水费电费供电发生的腐蚀毒粉</a>
                </div>
                <div class="detail">
                  有时候工作需要或者娱乐需要，会经常在电脑上使用安卓模拟器。目前市面上有很多款安装模拟器，像分享者比较常用的有两款：逍遥游和雷电；这两款都比较稳定，也比较适合我的使用习惯。今天给大家分享一下其中一款，雷电模拟器的无广告纯净版，搭载Android
                  7.1内核，启动速度快，稳定流畅兼容性好。
                </div>
              </div>
            </div>
            <div class="info_message" :class="index == 2 ? 'last' : ''">
              <i class="el-icon-view"></i>243浏览 |
              <i class="el-icon-chat-square"></i>5评论 |
              <i class="el-icon-date"></i>2021年01月09日
            </div>
          </div>
        </div>
      </div>
      <div class="right_content">
        <div class="label">
          <div class="nav"><i class="el-icon-paperclip"></i> 热门标签</div>
          <div class="label_content">
            <div v-for="(item, index) in labelList" :key="index">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="hot_article">
          <div class="nav"><i class="el-icon-document"></i> 热门文章</div>
          <div class="article_content">
            <div
              class="article_item"
              v-for="(item, index) in hot_article"
              :key="index"
            >
              <div
                class="serial"
                :class="[
                  index == 0 ? 'serial1' : '',
                  index == 1 ? 'serial2' : '',
                  index == 2 ? 'serial3' : '',
                ]"
              >
                {{ index + 1 }}
              </div>
              <span>
                {{ item }}
              </span>
            </div>
          </div>
        </div>
        <div class="hot_soft">
          <div class="nav"><i class="el-icon-connection"></i> 热门软件</div>
          <div class="soft_content">
            <div
              class="soft_item"
              v-for="(item, index) in softList"
              :key="index"
            >
              <div class="img">
                <img
                  src="https://img.tgl.qq.com/cover/20210714/d7d2983f3e14b574a4bf28bc309b52ef_1626264996.jpg"
                  alt=""
                />
              </div>
              <div class="soft_item_content">
                <div class="title">
                  {{ item.title }}
                </div>
                <div class="content">
                  {{ item.content }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import NavBar from "@/components/navBar"
export default {
  components: {
    NavBar
  },
  data() {
    return {
      isTop: false,
      step: 50,
      activeIndex: "1",
      activeIndex2: "1",
      bannerList: [
        "https://ossweb-img.qq.com/upload/adw/image/977/20210715/383272d4b61efe26fc833e63540fefe1.jpeg",
        "https://ossweb-img.qq.com/upload/adw/image/977/20210714/08edcd6af8a8d4c0a10f1d03830e6fa4.jpeg",
        "https://ossweb-img.qq.com/upload/adw/image/977/20210715/383272d4b61efe26fc833e63540fefe1.jpeg",
        "https://ossweb-img.qq.com/upload/adw/image/977/20210714/08edcd6af8a8d4c0a10f1d03830e6fa4.jpeg",
      ],
      leftImgList: [
        "https://img.tgl.qq.com/cover/20210714/d7d2983f3e14b574a4bf28bc309b52ef_1626264996.jpg",
        "https://img.tgl.qq.com/cover/20210716/1d0812ff299e07eaaa61b9b25c75c550_1626394876.jpg",
        "https://img.tgl.qq.com/cover/20210715/04e4288b376d2fcf5c4f9cf6d3def396_1626323861.jpg",
      ],
      labelList: [
        "HTML",
        "Vue3",
        "CSS",
        "Node.js",
        "软件",
        "游戏",
        "文章",
        "Ajax",
        "FTP",
        "H5",
        "HTML",
        "VUE",
        "CSS",
        "JavaScript",
        "软件",
        "游戏",
        "文章",
        "Ajax",
        "FTP",
        "H5",
      ],
      softList: [
        {
          title: "阿萨德速度防辐射的",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "阿萨德速度防辐射的",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "阿萨德速度防辐射的",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "阿萨德速度防辐射的",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "阿萨德速度防辐射的",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
      ],
      hot_article: [
        "风格化水电费水电费水电费水电费",
        "水电费水电费水电费水电费费价格和环境电费水电费",
        "水电费水电费水电费水电费水电费",
        "水电费风格化电费水电水电费",
        "风格化费的发挥法官水水电费水电费水电费",
        "风格化水电费水电费水电费水电费",
        "水电费水电费水电费水电费费价格和环境电费水电费",
        "水电费水电费水电费水电费水电费",
        "水电费风格化电费水电水电费",
        "风格化费的发挥法官水水电费水电费水电费",
        "风格化水电费水电费水电费水电费",
        "水电费水电费水电费水电费费价格和环境电费水电费",
        "水电费水电费水电费水电费水电费",
        "水电费风格化电费水电水电费",
        "风格化费的发挥法官水水电费水电费水电费",
      ],
    };
  },
  computed: {},

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      if (scrollTop > 800) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    },
    backTop(i) {
      //参数i表示间隔的幅度大小，以此来控制速度
      document.documentElement.scrollTop -= i;
      if (document.documentElement.scrollTop > 0) {
        let c = setTimeout(() => this.backTop(i), 8);
      } else {
        clearTimeout(c);
      }
    },
    toMy() {
      this.$router.push({
        path:"/my"
      })
    }
  },
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

.body {
  // transform: scale(1.5);
  // transition: all 2s;
  width: 100%;
  height: 100%;
  .isTop {
    z-index: 99;
    cursor: pointer;
    position: fixed;
    bottom: 100px;
    right: 100px;
    width: 60px;
    height: 60px;
    font-size: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background: rgb(252, 252, 252);
    i {
      // margin-right: 1px;
    }
  }
  .main_center {
    animation: start 1s;
    margin: 100px auto 20px;
    display: flex;
    width: 1700px;
    justify-content: space-around;
    // background-color: red;
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
      background-color: #fff;
      overflow: hidden;
      border-radius: 10px;
      margin-left: 10px;
      width: 300px;
      height: 450px;
      .top-img {
        height: 165px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .center-content {
        padding: 20px 20px 10px 20px;
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
          &:hover img {
            transform: scale(1.2);
          }

          overflow: hidden;

          img {
            transition: all 0.5s;
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
          width: 220px;
          margin: 0 auto;
          display: flex;
          justify-content: space-evenly;
          .iconB {
            // border-radius: 10px;
            width: 42px;
            height: 42px;
          }
          .wx {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background-color: teal;
            cursor: pointer;
            .erweima {
              width: 100px;
              height: 100px;
              // background-color: rgb(96, 151, 202);
              border-radius: 10px;
              position: relative;
              bottom: 145px;
              right: 30px;
              display: none;
              img {
                border-radius: 10px;
                width: 100px;
                height: 95px;
              }
            }
          }
          .wx:hover .erweima {
            display: block;
          }
          .qq:hover .erweima {
            display: block;
          }
          .qq {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background-color: teal;
            cursor: pointer;
            .erweima {
              width: 100px;
              height: 100px;
              // background-color: rgb(96, 151, 202);
              border-radius: 10px;
              position: relative;
              bottom: 145px;
              right: 30px;
              display: none;
              img {
                border-radius: 10px;
                width: 100px;
                height: 95px;
              }
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
  .bottom_content {
    animation: start 1s;
    letter-spacing: 1px;
    // background-color: red;
    margin: 0 auto;
    width: 1700px;
    height: 100%;
    display: flex;
    .left_content {
      width: 1400px;
      height: 100%;
      // background-color: rgba(0, 0, 0, 0.64);
      flex: 1;
      .new_content {
        padding: 0px 20px 0px 20px;
        border-radius: 10px;
        height: 100%;
        width: 100%;
        background-color: #fff;
        // margin-top: 15px;
        .nav {
          height: 60px;
          width: 100%;
          // background-color: forestgreen;
          border-bottom: 1px solid rgb(231, 229, 227);
          > div {
            font-size: 20px;
            font-weight: 600;
            color: #000;
            width: 85px;
            height: 62px;
            line-height: 60px;
            border-bottom: 6px solid #0eadf7;
          }
        }
        .content {
          display: flex;
          margin-top: 20px;
          .img {
            width: 180px;
            height: 120px;
            background-color: #0eadf7;
            overflow: hidden;
            border-radius: 5px;
            img {
              border-radius: 5px;
              width: 100%;
              height: 100%;
              transition: all 0.2s;
              &:hover {
                transform: scale(1.1);
              }
            }
          }
          .main_contnet {
            // background-color: #0eadf7;
            flex: 1;
            padding-left: 10px;
            width: 1000px;
            .title {
              font-size: 20px;
              font-weight: 600;
              width: 100%;
              color: #555555;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              // display: -webkit-box;
              // -webkit-box-orient: vertical;
              // -webkit-line-clamp: 1;
              a {
                color: #555555;
                text-decoration: none;
              }
              a:hover {
                color: #0eadf7;
                text-decoration: underline;
              }
            }
            .detail {
              margin-top: 5px;
              color: #666;
              display: block;
              font-size: 15px;
              width: 100%;
              line-height: 23px;
              max-height: 88px;
              text-overflow: ellipsis;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 4;
            }
          }
        }
        .info_message {
          color: #666;
          padding: 10px 0px 10px 0px;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          border-bottom: 1px dashed #cccccc;
          i {
            margin: 3px 5px 0px 7px;
          }
        }
        .last {
          border-bottom: none;
        }
      }
      .technical_content {
        margin-top: 20px;
      }
      .soft_content {
        margin-top: 20px;
      }
    }
    .right_content {
      //  animation: start 1s;
      width: 300px;
      // background-color: #fff;
      height: 100%;
      margin-left: 10px;
      .label {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        overflow: hidden;
        padding: 0px 20px 20px 20px;
        .nav {
          width: 100%;
          height: 35px;
          line-height: 50px;
          font-size: 20px;
          font-weight: 600;
          // background-color: firebrick;
        }
        .label_content {
          display: flex;
          flex-wrap: wrap;
          // background-color: firebrick;
          width: 100%;
          > div {
            color: #666;
            font-size: 12px;
            padding: 1px 15px 1px 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            border: 1px solid rgb(192, 186, 186);
            margin: 20px 10px 0px 0px;
            cursor: pointer;
            &:hover {
              color: #0eadf7;
              border: 1px solid #0eadf7;
            }
          }
        }
      }
      .hot_article {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        overflow: hidden;
        padding: 0px 20px 20px 20px;
        margin-top: 20px;
        .nav {
          height: 45px;
          line-height: 50px;
          font-size: 20px;
          font-weight: 600;
        }
        .article_content {
          .article_item:hover {
            color: #0eadf7;
            // background-color: forestgreen;
            margin-left: 15px;
            background-color: rgb(237, 242, 245);
          }
          .article_item {
            transition: all 0.5s;
            display: flex;
            align-items: center;
            width: 100%;
            margin-top: 2px;
            padding: 8px 0px 8px 2px;
            border-bottom: 1px dashed #cccccc;
            cursor: pointer;
            // color: red !important;
            color: #555555;
            .serial {
              color: #fff;
              font-size: 14px;
              width: 20px;
              height: 20px;
              background-color: gray;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .serial1 {
              background-color: red;
            }
            .serial2 {
              background-color: rgb(248, 127, 15);
            }
            .serial3 {
              background-color: rgb(14, 161, 247);
            }
            span {
              width: 100%;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              margin-left: 7px;
            }
          }
        }
      }
      .hot_soft {
        margin-top: 20px;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        overflow: hidden;
        padding: 0px 20px 20px 20px;
        .nav {
          width: 100%;
          height: 35px;
          line-height: 50px;
          font-size: 20px;
          font-weight: 600;
          // background-color: firebrick;
        }
        .soft_content {
          margin-top: 10px;

          .soft_item {
            display: flex;
            width: 100%;
            margin-top: 2px;
            padding: 8px 0px 8px 2px;
            border-bottom: 1px dashed #cccccc;
            cursor: pointer;
            color: #555555;
            transition: all 0.3s;
            &:hover {
              border: 4px dashed #a5cddd;
              transform: scale(1.05);
            }
            .img {
              margin-top: 2px;
              img {
                width: 88px;
                height: 65px;
                background-color: rgb(110, 114, 104);
              }
            }
            .soft_item_content {
              margin-left: 7px;
              width: 100%;
              height: 100%;
              .title {
                width: 170px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                color: #000;
                font-weight: 600;
                font-size: 15px;
              }
              .content {
                font-size: 12px;
                color: #555555;
                height: 100%;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
              }
            }
          }
        }
      }
    }
  }
  /*标签*/
  footer {
    width: 100%;
    min-width: 250px;
    line-height: 30px;
    padding: 10px 0;
    color: #000;
    margin: 20px 0px auto;
    font-size: 12px;
    text-align: center;
    background: #fff;
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
}
</style>