<!--  -->
<template>
  <div class='body'>
    <div class="new_content wow fadeInDown bg-red animated" >
      <div class="nav">
        <div>{{navTitle}}</div>
      </div>
      <div v-for="(item, index) in contentList" :key="index">
        <div class="content">
          <div class="img">
            <img src="https://img.tgl.qq.com/cover/20210716/1d0812ff299e07eaaa61b9b25c75c550_1626394876.jpg" alt="" />
          </div>
          <div class="main_contnet">
            <div class="title">
              <a href="">{{item.title}}</a>
            </div>
            <div class="detail">
              {{item.content}}
            </div>
          </div>
        </div>
        <div class="info_message" :class="index == contentList.length -1 ? 'last' : ''">
          <i class="el-icon-view"></i>243浏览 |
          <i class="el-icon-chat-square"></i>5评论 |
          <i class="el-icon-date"></i>2021年01月09日
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    navTitle: {
      type: String,
      default: null,
    },
    contentList: {
      type: Array,
      default: []
    }
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
</style>