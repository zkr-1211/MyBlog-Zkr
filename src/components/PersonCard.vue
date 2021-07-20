<!--  -->
<template>
  <div class='body'>
    <div class="right">
      <div class="top-img">
        <img src="https://img.tgl.qq.com/cover/20210714/d7d2983f3e14b574a4bf28bc309b52ef_1626264996.jpg" alt="" />
      </div>
      <div class="center-content">
        <div class="hearder" >
            <a href="/my" target="_blank"><img src="https://img.tgl.qq.com/cover/20210716/1d0812ff299e07eaaa61b9b25c75c550_1626394876.jpg" alt="" /></a>   
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
.right {
     overflow: hidden;
      background-color: #fff;
      border-radius: 10px;
      width: 300px;
      height: 100%;
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
</style>