<!--  -->
<template>
  <div class='body'>
    <NavBar />
    <div class="topMain">
      <div class="text">
        <h2>互联网</h2>
        <p>
          转载或投稿优秀的技术文章</p>
      </div>
      <div class="topBackground">
        <img src="../../assets/Info.jpg" alt="">
      </div>

    </div>
    <div class="bottom_content">
      <div class="left_content">
        <Article navTitle="技术文章" :contentList="skillList" />
      </div>
      <div class="right_content">
        <PersonCard />
        <div style="height:20px" />
        <Label :contentList="labelList" />
        <HotArticle :contentList="hot_article" />
        <HotSoft :contentList="softList" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import Article from "@/components/Article";
import Footer from "@/components/Footer.vue";
import PersonCard from "@/components/PersonCard.vue";
import Label from "@/components/Label.vue";
import HotArticle from "@/components/HotArticle.vue";
import HotSoft from "@/components/HotSoft.vue";
export default {
  components: {
    NavBar,
    Article,
    PersonCard,
    Label,
    HotArticle,
    HotSoft,
    Footer,
  },
  data() {
    return {
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
        {
          title: "NBA2K21",
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
    };
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.topMain{
    position: relative;
  .text {
    z-index: 999;
    position: absolute;
    color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    h2 {
      text-align: center;
    }
    P {
      margin-top: 10px;
    }
  }
.topBackground {
  margin-top: 80px;
  height: 300px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: rgba(0,0,0,1);
  img {
    object-fit: cover;
    height: 300px;
    width: 100%;
    opacity: 0.6;
  }
  //   background-color: rgb(195, 250, 92);
}
}

.bottom_content {
  animation: start 1s;
  letter-spacing: 1px;
  // background-color: red;
  margin: 20px auto;
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
</style>