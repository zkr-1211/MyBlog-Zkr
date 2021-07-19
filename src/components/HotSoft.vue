<!--  -->
<template>
  <div class='body'>
    <div class="hot_soft wow fadeInRight" data-wow-delay="0.6s">
      <div class="nav"><i class="el-icon-connection" ></i> 热门软件</div>
      <div class="soft_content">
        <div class="soft_item" v-for="(item, index) in contentList" :key="index">
          <div class="img">
            <img src="https://img.tgl.qq.com/cover/20210714/d7d2983f3e14b574a4bf28bc309b52ef_1626264996.jpg" alt="" />
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
</style>