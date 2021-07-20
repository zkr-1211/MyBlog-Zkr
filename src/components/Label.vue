<!--  -->
<template>
  <div class='body'>
    <div class="label wow fadeInRight">
      <div class="nav"><i class="el-icon-paperclip"></i> 热门标签</div>
      <div class="label_content">
        <div v-for="(item, index) in contentList" :key="index">
          {{ item }}
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
.label {
  z-index: 9;
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
</style>