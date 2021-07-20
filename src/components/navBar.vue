<!--  -->
<template>
  <div class="body">
    <nav>
      <div class="navBar">
        <div class="logo">
          <img src="../../src/assets/logo.png" alt="" />
          <img src="../../src/assets/logo.png" alt="" />
          <img src="../../src/assets/logo.png" alt="" />
        </div>
        <div class="navBar-title">
          <a href="/home" target="_self">
            <div><i class="el-icon-s-home"> 主页</i></div>
          </a>
          <a href="/skillarticle">
            <div><i class="el-icon-reading"> 技术文章</i></div>
          </a>
          <el-dropdown>
            <div class="el-dropdown-link" style="width:125px;">
              <i class="el-icon-reading"></i>栏目分类<i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu class="el-dropdown-menu" slot="dropdown">

              <a href="/softarticle">
                <el-dropdown-item>软件文章</el-dropdown-item>
              </a>
              <a href="/codeshare">
                <el-dropdown-item divided>源码分享</el-dropdown-item>
              </a>
              <a href="/internet">
                <el-dropdown-item class="el-dropdown-item"  divided>互联网</el-dropdown-item>
              </a>

            </el-dropdown-menu>
          </el-dropdown>

          <a href="/lavoratory" target="_self">
            <div><i class="el-icon-cpu"> 实验室</i></div>
          </a>
          <a href="" target="_self">
            <div><i class="el-icon-chat-round"> 给我留言</i></div>
          </a>
          <a href="" target="_self">
            <div><i class="el-icon-info"> 关于</i></div>
          </a>
        </div>
      </div>
    </nav>
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
.el-dropdown-link {
  text-align: center;
}
.el-dropdown-menu{
  a{
    text-decoration: none;
  }
  .el-dropdown-item{
    text-align: center;
  }
}
nav {
  background-color: rgba(255, 255, 255, 1);
  // opacity: 0.6;
  // background-color: #fff;
  width: 100%;
  border-bottom: 0.1px solid rgb(223, 223, 223);
  position: fixed;
  top: 0;
  z-index: 999;
  .navBar {
    margin: 0 auto;
    height: 80px;
    width: 1700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      color: #444444;
    }
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
        // align-items: center;
        text-align: center;
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
</style>