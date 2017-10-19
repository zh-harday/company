<template>
    <section class="about">
        <el-row>
            <el-col :span="24" class="banner">
                <div @mouseleave="leave($event)" @mouseover="hover($event)">
                <div></div>
                <div :class="{actives: isActive}">
                    dsd
                </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="welcom">{{welcomJ}}</div>
            </el-col>
        </el-row>
        <el-row class="join">
            <div>
            <el-col class="welImg" :span="6" v-for="(item,index) in welImg" :key="item.index">
                <img :src="item.src">
            </el-col>
            </div>
        </el-row>
    </section>
</template>


<style lang="less" scoped>
.about {
  margin-top: 70px;
  .banner {
    position: relative;
    > div > div:nth-child(1) {
      height: 600px;
      background: url(../../static/img/about/about-bg.png) no-repeat;
      background-size: 100%;
    }
    > div > div:nth-child(2) {
      position: absolute;
      right: -50%;
      top: 0;
      width: 50%;
      height: 600px;
      background: rgba(0, 0, 0, 0.5);
      z-index: 0;
    }
    .actives {
      position: absolute;
      width: 50%;
      height: 600px;
      background: rgba(0, 0, 0, 0.5);
      right: 0 !important;
      top: 0;
    }
  }
}
.welcom {
  width: 100%;
  height: 30px;
  text-align: center;
  margin: 90px 0;
}
.join {
  width: 100%;
  margin-bottom: 86px;
  > div {
    margin: 0 auto;
    > div {
      height: 239px;
    }
    > div:nth-child(1) {
      margin-left: 16%;
    }
  }
}
</style>


<script>
export default {
  data() {
    return {
      isActive: false,
      welcomJ: "欢迎你的加入",
      welImg: [
        { src: "./static/img/about/show1.png" },
        { src: "./static/img/about/show2.png" },
        { src: "./static/img/about/show3.png" }
      ]
    };
  },
  methods: {
    hover(e) {
      e.preventDefault();
      e.stopPropagation();
      // alert(0)
      this.isActive = true;
      console.log(this.isActive);
    },
    leave(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isActive = false;
    }
  }
};
</script>