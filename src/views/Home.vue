<!--  -->
<template>
  <div class="body">
    <!-- <section class="container">
    <ul>
        <li class="wow bounceInLeft">啊啊啊</li>
        <li class="wow bounceInRight"></li>
        <li class="wow bounceIn"></li>
        <li class="wow bounceInUp"></li>
        <li class="wow bounceInDown"></li>
        <li class="wow slideInUp"></li>
        <li class="wow slideInDown"></li>
        <li class="wow slideInLeft"></li>
        <li class="wow slideInRight"></li>
        <li class="wow lightSpeedIn"></li>
        <li class="wow pulse"></li>
        <li class="wow flipInX">哦哦哦</li>
        <li class="wow flipInY"></li>
        <li class="wow bounce"></li>
        <li class="wow shake"></li>
        <li class="wow wobble"></li>
        <li class="wow rollIn"></li>
        <li class="wow fadeInUpBig" data-wow-delay="0.3s"></li>
        <li class="wow fadeInUpBig" data-wow-delay="0.6s">呃呃呃</li>
        <li class="wow fadeInUpBig" data-wow-delay="0.9s"></li>
        <li class="wow fadeInUpBig" data-wow-delay="1.2s"></li>
        <li class="wow fadeInUpBig" data-wow-delay="1.5s"></li>
    </ul>
</section> -->
    <div class="isTop" v-show="isTop" @click="backTop(step)">
      <i class="el-icon-top"></i>
    </div>
    <NavBar />
    <div class="main_center wow bounceInLeft">
      <div class="left">
        <div class="left_item1" v-for="(item, index) in leftImgList" :key="index">
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
      <div>
        <PersonCard />
      </div>

    </div>
    <div class="bottom_content">
      <div class="left_content">
        <Article navTitle="最新内容" :contentList="newList" />
        <div style="height:20px" />
        <Article navTitle="技术文章" :contentList="skillList" />
        <div style="height:20px" />
        <Article navTitle="软件仓库" :contentList="softList" />
      </div>
      <div class="right_content">
        <Label :contentList="labelList" />
        <HotArticle :contentList="hot_article" />
        <HotSoft :contentList="softList" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { WOW } from "wowjs";
import NavBar from "@/components/navBar";
import Article from "@/components/Article";
import Label from "@/components/Label.vue";
import HotArticle from "@/components/HotArticle.vue";
import HotSoft from "@/components/HotSoft.vue";
import Footer from "@/components/Footer.vue";
import PersonCard from "@/components/PersonCard.vue";
export default {
  components: {
    NavBar,
    Article,
    Label,
    HotArticle,
    HotSoft,
    Footer,
    PersonCard,
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
          title: "QQ",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "WX",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "支付宝",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "美团",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "饿了么",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
      ],
      skillList: [
        {
          title: "NBA2K21",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "NBA2K21",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空空发光角度来看离开对方感觉了可见多发公斤离开对方进攻收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "NBA2K21",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据空发光角度来看离开对方感觉了可见多发公斤离开对方进攻收到非官方的空间冬季风光肯定是军阀割据的是镂空的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "NBA2K21",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "NBA2K21",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
      ],
      newList: [
        {
          title: "雷神模拟器",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "雷神模拟器",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "雷神模拟器",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "雷神模拟器",
          content:
            "收到非官方的空间冬季风光肯定是军阀割据的是镂空发光角度来看离开对方感觉了可见多发公斤离开对方进攻",
        },
        {
          title: "雷神模拟器",
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
      height: 450px;
      border-radius: 10px;
      overflow: hidden;
      margin-right: 10px;
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
    }
  }
}
</style>