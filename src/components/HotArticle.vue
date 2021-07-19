<!--  -->
<template>
  <div class='body'>
    <div class="hot_article wow fadeInRight" data-wow-delay="0.3s">
      <div class="nav"><i class="el-icon-document"></i> 热门文章</div>
      <div class="article_content">
        <div class="article_item" v-for="(item, index) in contentList" :key="index">
          <div class="serial" :class="[
                  index == 0 ? 'serial1' : '',
                  index == 1 ? 'serial2' : '',
                  index == 2 ? 'serial3' : '',
                ]">
            {{ index + 1 }}
          </div>
          <span>
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    contentList: {
      type: Array,
      default: [],
    },
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
</style>