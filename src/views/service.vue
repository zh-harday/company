<template>
  <section class="service">
    <el-row>
      <el-col :span="24">
        <div class="banner">
          <img src="../../static/img/service/banner.png" class="img-responsive" alt="" />
          <!--遮罩层-->
          <div class="half-mask">
            <div class="text">
              <h3>服 务</h3>
              <p class="animated fadeInRight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda beatae consequatur consequuntur dolore, eos eum fugiat ipsum mollitia perspiciatis, ratione, tempore vero voluptate. Aperiam eaque facere incidunt nihil optio.</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="exploit">
          <p>开发实施服务</p>
          <el-row>
            <el-col :span="12" :offset="5">
              <div style="margin-bottom: 30px">
                <span style=" font-size: 30px;border-bottom:1px solid #f00;margin-bottom: 5px">标准开发实施</span>
                <span style="width: 30px;height: 30px;background: #f00;color: #fff;font-size: 20px">免费</span>
              </div>
              <div>
                <div>
                  <img src="../../static/img/service/secondary.png" class="img-responsive" alt="">
                  <img src="../../static/img/service/train.png" class="img-responsive" alt="">
                </div>
                <div>
                  <img src="../../static/img/service/deploy.png" class="img-responsive" alt="">
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </section>
</template>


<style lang="less" scoped>
  @import '../common/css/variable.less';

  .service {
    font-family: "microsoft yahei";
    margin-top: 70px;
    .img-responsive {
      display: inline-block;
      height: auto;
      max-width: 100%;
    }
    .banner {
      position: relative;
      overflow: hidden;
      margin-bottom: 90px;
    }
    img {
      position: relative;
    }
    .half-mask {
      /*背景颜色（透明），高度，宽度，绝对定位，初始位置，过渡*/
      background-color: rgba(0, 0, 0, 0.6);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      right: 50%;
      transition: right 200ms;
      padding-right: 48px;
      text-align: right;
    }
    div.half-mask:hover {
      padding-right: 48px;
      text-align: right;
      right: 0;
    }
    .text {
      color: #fff;
      padding-left: 80%;
      padding-top: 136px;
      >h3 {
        padding-bottom: 5px;
        border-bottom: 5px solid #f00;
        margin-bottom: 50px;
      }
    }
    .exploit {
      >p {
        font-size: 30px;
        color: @font-color-title;
        text-align: center;
        margin-bottom: 90px;
      }
      >.row>p {
        font-size: 30px;
        color: @font-color-title;
        text-align: left;
        margin-bottom: 30px;
      }
    }
  }
</style>


<script>
  export default {}
</script>
